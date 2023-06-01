import React from 'react'
import { IICon } from 'types/icons'

export const ArrowUp = ({ width = 10, height = 6, className }: IICon) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 10 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5 0.5L10 5.5H0L5 0.5Z' fill='#B1B7C4' />
    </svg>
  )
}
