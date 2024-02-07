// import './App.css';
import './App.scss'
import SliderCarousel from './components/SliderCarousel'
import Slider, { type Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Main from './imgs/main.jpg'
import Main1 from './imgs/main1.jpg'
import Main2 from './imgs/main2.jpg'

import SliderButton from 'components/SliderButton'
import { ArrowLeftOutlineIcon, ArrowRightOutlineIcon, RectangleIcon } from 'components/icons/'

interface SliderItem {
  img: string
  title: string
  description: string
}

function App() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SliderButton type='next'>
        <ArrowRightOutlineIcon />
      </SliderButton>
    ),
    prevArrow: (
      <SliderButton type='prev'>
        <ArrowLeftOutlineIcon />
      </SliderButton>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', height: '10px' }}>{dots}</div>
      </div>
    ),
    customPaging: () => {
      return (
        <div>
          <RectangleIcon />
        </div>
      )
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const { prevArrow, nextArrow, customPaging, appendDots, ...restSettings } = settings
  const dataBanner: SliderItem[] = [
    {
      img: Main,
      title: 'Main',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main1,
      title: 'Main1',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main2,
      title: 'Main3',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main1,
      title: 'Main4',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main1,
      title: 'Main5',
      description: 'descridescriptiondescriptionption'
    }
  ]
  const dataListCard: SliderItem[] = [
    {
      img: Main,
      title: 'Main',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main1,
      title: 'Main1',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main2,
      title: 'Main3',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main2,
      title: 'Main4',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main1,
      title: 'Main5',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main,
      title: 'Main',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main1,
      title: 'Main1',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main,
      title: 'Main3',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main1,
      title: 'Main4',
      description: 'descridescriptiondescriptionption'
    },
    {
      img: Main1,
      title: 'Main5',
      description: 'descridescriptiondescriptionption'
    }
  ]
  const handleCLick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('click')
  }
  return (
    <div className='app'>
      <div className='header'>
        <div className='navigation'>
          <div className='navTop'>
            <div className='navTop__logo'>logo</div>
          </div>
          <div className='navHeader'>
            <button onClick={handleCLick}>click to</button>
          </div>
        </div>

        <Slider
          prevArrow={prevArrow}
          nextArrow={nextArrow}
          {...restSettings}
          customPaging={customPaging}
          appendDots={appendDots}
        >
          {dataBanner.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </Slider>

        <div className='gradient_bottom'></div>
      </div>
      <div className='listCard'>
        <Slider {...restSettings} slidesToShow={6} slidesToScroll={3}>
          {dataListCard.map((item, index) => (
            <div className='card' key={index}>
              <div className='containImg'>
                <img src={item.img} alt={item.title} />
              </div>
              <div className='containContent'>
                <img src={item.img} alt='' />
                <div className='content'>
                  <div className='title'>
                    <h3>{item.title}</h3>
                  </div>
                  <div className='description'>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default App
