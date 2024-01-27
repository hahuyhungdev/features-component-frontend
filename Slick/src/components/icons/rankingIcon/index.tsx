import React from 'react'
import { IICon } from 'types/icons'

export const RankingIcon = ({ width = 400, height = 104, className }: IICon) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 400 104'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 6C0 2.68629 2.68629 0 6 0H393.869C398.429 0 401.323 4.88521 399.131 8.88374L375.5 52L399.131 95.1163C401.323 99.1148 398.429 104 393.869 104H6.00001C2.6863 104 0 101.314 0 98V6Z'
        fill='#E8EBF2'
      />
    </svg>
  )
}
