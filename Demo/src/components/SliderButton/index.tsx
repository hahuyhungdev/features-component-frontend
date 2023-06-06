import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import classNames from './styles.module.scss'

const buttonTypes = {
  prev: classNames['prev-arrow'],
  next: classNames['next-arrow']
}

interface ISliderButton extends PropsWithChildren {
  className?: string
  style?: object
  onClick?: () => void
  type: keyof typeof buttonTypes
}

const SliderButton = ({ style, onClick, type, children }: ISliderButton) => {
  return (
    <button className={clsx(classNames['button'], buttonTypes[type])} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default SliderButton
