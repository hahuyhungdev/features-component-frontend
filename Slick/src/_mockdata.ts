import Main from './imgs/main.jpg'
import Main1 from './imgs/main1.jpg'
import Main2 from './imgs/main2.jpg'
interface ISliderItem {
  img: string
  title: string
  description: string
}
interface IValueItem {
  rank: number
  value: string
  label: string
  description: string
  changeRank: number
  percent: number
  img: any
}
export const dataBanner: ISliderItem[] = [
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
export const dataListCard: ISliderItem[] = [
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
export const dataValue: IValueItem[] = [
  {
    rank: 1,
    value: '1,000,000',
    label: '판교불주먹김넥슨',
    description: 'descridescriptionde',
    changeRank: 1,
    percent: 100,
    img: Main
  },
  {
    rank: 2,
    value: '1,000,000',
    label: '판교불주먹김넥슨',
    description: 'descridescriptionde',
    changeRank: 2,
    percent: 100,
    img: Main1
  },
  {
    rank: 3,
    value: '1,000,000',
    label: 'Total Value Lod 3',
    description: 'descridescriptio',
    changeRank: 3,
    percent: 100,
    img: Main2
  },
  {
    rank: 4,
    value: '1,000,000',
    label: 'BADBAA 4',
    description: 'descridescripti',
    changeRank: 0.18,
    percent: 88,
    img: Main
  },
  {
    rank: 5,
    value: '1,000,000',
    label: 'BADBAA 5',
    description: 'descrssidescricn',
    changeRank: 0.34,
    percent: 34,
    img: Main1
  }
]
