import { IICon } from 'types/icons'

export const RectangleIcon = ({ width = 279, height = 8 }: IICon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 279 8'
      xmlns='http://www.w3.org/2000/svg'
      style={{ position: 'absolute', left: 0 }}
    >
      <g>
        <rect width='278.4' height='8' rx='4' fill='#FFFFFF' opacity={0.5} />
      </g>
    </svg>
  )
}
