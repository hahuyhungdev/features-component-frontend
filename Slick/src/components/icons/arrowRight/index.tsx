import React from 'react'
import { IICon } from 'types/icons'

export const ArrowRight = ({ width = 17, height = 28, className }: IICon) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 17 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 3.052L10.406 13.852L0 24.645L2.943 27.698L16.293 13.852L2.943 0L0 3.052Z'
        fill='#B1B7C4'
      />
    </svg>
  )
}
