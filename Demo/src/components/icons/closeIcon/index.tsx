import { IICon } from '@/types/icons'
import React from 'react'

export const CloseIcon = ({ width = 12, height = 12, className }: IICon) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M11.1562 11.1543L1.00187 0.999918' stroke='#818181' strokeLinecap='round' />
      <path d='M1.17383 11.1587L11.3282 1.00432' stroke='#818181' strokeLinecap='round' />
    </svg>
  )
}
