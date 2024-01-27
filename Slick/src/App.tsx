// import './App.css';
import './App.scss'
import SliderCarousel from './components/SliderCarousel'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Main from './imgs/main.jpg'
import Main1 from './imgs/main1.jpg'
import SliderButton from 'components/SliderButton'
import { ArrowLeftOutlineIcon, ArrowRightOutlineIcon, RectangleIcon } from 'components/icons/'

interface SliderItem {
  img: string
  title: string
}

function App() {
  const settings = {
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
    }
  }
  const dataBanner: SliderItem[] = [
    {
      img: Main,
      title: 'Main'
    },
    {
      img: Main1,
      title: 'Main1'
    },
    {
      img: Main,
      title: 'Main3'
    },
    {
      img: Main1,
      title: 'Main4'
    }
  ]

  return (
    <div className='app'>
      <div className='header'>
        <div className='navigation'>
          <div className='navTop'>
            <div className='navTop__logo'>logo</div>
          </div>
        </div>
        <Slider {...settings}>
          {dataBanner.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </Slider>
        <div className='gradient_bottom'></div>
      </div>
    </div>
  )
}

export default App
