import React, { useEffect, useState } from 'react'
import './index.css'
import type { BadgeProps } from 'antd'
import { Badge, Calendar, Modal } from 'antd'
import type { Dayjs } from 'dayjs'
import type { CellRenderInfo } from 'rc-picker/lib/interface'

// Function to fetch fake API data
interface IEventData {
  date: string
  events: {
    type: 'success' | 'warning' | 'error'
    content: string
  }[]
}

const fetchData = async () => {
  // Simulating API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // Simulated API response data
  return [
    {
      date: '2023-06-01',
      events: [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' }
      ]
    },
    {
      date: '2023-06-10',
      events: [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' }
      ]
    },
    {
      date: '2023-06-15',
      events: [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' }
      ]
    }
  ] as IEventData[]
}

export const CalendarNotion: React.FC = () => {
  const [data, setData] = useState<IEventData[]>([])
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData()
      setData(result)
    }

    fetchDataAsync()
  }, [])

  const getListData = (value: Dayjs) => {
    const dateString = value.format('YYYY-MM-DD')
    const selectedData = data.find((item: IEventData) => item.date === dateString)
    return selectedData ? selectedData.events : []
  }

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value)
    return (
      <ul className='events'>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === 'date') return dateCellRender(current)
    return info.originNode
  }

  const handleSelect = (value: Dayjs) => {
    setSelectedDate(value)
  }

  return (
    <div>
      <Calendar cellRender={cellRender} onSelect={handleSelect} />
      <Modal open={selectedDate !== null} onCancel={() => setSelectedDate(null)} title='Selected Date' footer={null}>
        {selectedDate && (
          <div>
            <h3>{selectedDate.format('YYYY-MM-DD')}</h3>
            <ul className='events'>
              {getListData(selectedDate).map((item: any) => (
                <li key={item.content}>
                  <Badge status={item.type as BadgeProps['status']} text={item.content} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default CalendarNotion
