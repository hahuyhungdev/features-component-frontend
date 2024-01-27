import Popover from '@/components/Popover'
import { dataMenu } from '@/mockData'
import React from 'react'

const MenuSelectBox = () => {
  return (
    <ul style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
      {dataMenu.map((item, index) => (
        <li key={index} style={{ listStyle: 'none', textAlign: 'center', width: '160px' }}>
          <Popover title={item.category} contents={item.label} />
        </li>
      ))}
    </ul>
  )
}

export default MenuSelectBox
