import React from 'react'

import { IICon } from 'types/icons'

export const ArrowLeftOutlineIcon = ({ width = 22, height = 18 }: IICon) => {
  return (
    <svg width={width} height={height} viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10 17L2 9L10 0.999999' stroke='black' strokeWidth='1.5' />
      <path d='M2 9H22' stroke='black' strokeWidth='1.5' />
    </svg>
  )
}
