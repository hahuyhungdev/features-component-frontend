// import './App.css';
import './App.scss'
import SliderCarousel from './components/SliderCarousel'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Main from './imgs/main.jpg'
import Main1 from './imgs/main1.jpg'
import SliderButton from 'components/SliderButton'
import { ArrowLeftOutlineIcon } from 'components/arrowLeftOutlineIcon'
import { ArrowRightOutlineIcon } from 'components/arrowRightOutlineIcon'

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
    )
  }
  const dataBanner: SliderItem[] = [
    {
      img: Main,
      title: 'Main'
    },
    {
      img: Main1,
      title: 'Main1'
    }
  ]

  return (
    <div className='app'>
      <div className='header'>
        <Slider {...settings}>
          {dataBanner.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default App
