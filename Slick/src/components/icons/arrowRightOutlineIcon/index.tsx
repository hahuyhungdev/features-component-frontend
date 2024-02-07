import React from 'react'
import { IICon } from 'types/icons'

export const ArrowRightOutlineIcon = ({ width = 22, height = 18, className }: IICon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M12 1L20 9L12 17' stroke='black' strokeWidth='1.5' />
      <path d='M20 9L-1.49012e-07 9' stroke='black' strokeWidth='1.5' />
    </svg>
  )
}
