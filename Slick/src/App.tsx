// import './App.css';
import './App.scss'
import SliderCarousel from './components/SliderCarousel'
import Slider, { type Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SliderButton from 'components/SliderButton'
import {
  ArrowLeftOutlineIcon,
  ArrowRight,
  ArrowRightOutlineIcon,
  ArrowUp,
  RankingIcon,
  RectangleIcon
} from 'components/icons/'
import { dataBanner, dataListCard, dataValue } from '_mockdata'
import top1 from './imgs/top1.png'
import top2 from './imgs/top2.png'
import top3 from './imgs/top3.png'

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
      <div className='ranking'>
        <div className='title'>
          <h1>넥슨 크리에이터즈 랭킹</h1>
          <ArrowRight />
        </div>
        <div className='columns'>
          <div className='type1'>
            {dataValue.map((item, index) => (
              <div
                className='item'
                key={index}
                style={{
                  // check if top 1,2,3 then background img is top1,2,3. outtop 4 then not show background img
                  backgroundImage: `url(${
                    item.rank === 1 ? top1 : item.rank === 2 ? top2 : item.rank === 3 ? top3 : ''
                  })`,
                  width: `${
                    item.rank === 1 ? '404px' : item.rank === 2 ? '365px' : item.rank === 3 ? '331px' : '100%'
                  }`,
                  height: `${item.rank <= 3 ? '104px' : '60px'}` // add this line to set the height
                }}
              >
                {item.rank <= 3 ? (
                  <>
                    <div className='content'>
                      <div className='rank'>{item.rank}</div>
                      <img src={item.img} alt={item.label} />
                      <div className='valueContent'>
                        <p className='label'>{item.label}</p>
                        <p className='description'>{item.description}</p>
                      </div>
                    </div>
                    <div className='last_content'>
                      <div className='change'>
                        <ArrowUp />
                        <span>{item.changeRank}</span>
                      </div>

                      <div className='value'>{item.percent}</div>
                    </div>
                  </>
                ) : (
                  <div className='newValue'>
                    <div className='rank'>{item.rank}</div>
                    <div className='substance'>
                      <span>NEW</span>
                      <p className='label'>{item.label}</p>
                      <p className='description'>{item.description}</p>
                      <div className='value'>{item.percent}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='type2'>
            {dataValue.map((item, index) => (
              <div
                className='item'
                key={index}
                style={
                  {
                    // check if top 1,2,3 then background img is top1,2,3. outtop 4 then not show background img
                  }
                }
              >
                {item.rank <= 3 ? (
                  <div className='newValue'>
                    <div className='rank'>{item.rank}</div>
                    <div className='change'>
                      <ArrowUp />
                      <span>{item.changeRank}</span>
                    </div>
                    <div className='substance'>
                      <p className='label'>{item.label}</p>
                      <p className='description'>{item.description}</p>
                      <div className='value'>{item.percent}</div>
                    </div>
                  </div>
                ) : (
                  <div className='newValue'>
                    <div className='rank'>{item.rank}</div>
                    <div className='substance'>
                      <span>NEW</span>
                      <p className='label'>{item.label}</p>
                      <p className='description'>{item.description}</p>
                      <div className='value'>{item.percent}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
