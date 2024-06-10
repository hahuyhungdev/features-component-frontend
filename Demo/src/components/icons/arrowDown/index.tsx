import React from 'react'
import { IICon } from '../../../types/icons'

export const ArrowDown = ({ width = 11, height = 7, className }: IICon) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 11 7'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 1L5.5 6L10 1' stroke='#747A86' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
