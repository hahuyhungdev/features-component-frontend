import React, { useEffect, useState } from 'react'
import './index.css'
import dayjs from 'dayjs'
import dayLocaleData from 'dayjs/plugin/localeData'
import type { BadgeProps } from 'antd'
import { Badge, Calendar, Modal, Col, Radio, Row, Select, Typography, Button } from 'antd'
import type { Dayjs } from 'dayjs'
import type { CellRenderInfo } from 'rc-picker/lib/interface'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

dayjs.extend(dayLocaleData)

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
      date: '2023-07-01',
      events: [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' }
      ]
    },
    {
      date: '2023-07-10',
      events: [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' }
      ]
    },
    {
      date: '2023-07-15',
      events: [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' }
      ]
    }
  ] as IEventData[]
}

const CalendarNotion: React.FC = () => {
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
    return selectedData ? { events: selectedData.events, checked: 'checked' } : { events: [], checked: 'not checked' }
  }
  const countCheckedItems = () => {
    return data.filter((item: IEventData) => item.events.length > 0).length
  }

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value)

    return (
      <ul className='events'>
        <li>{listData.checked === 'checked' && <CheckOutlined />}</li>
        {listData.events.map((item) => (
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
      <Calendar
        cellRender={cellRender}
        onSelect={handleSelect}
        headerRender={({ value, onChange }) => {
          const year = value.year()
          const month = value.month()
          const monthName = value.format('MMMM')

          const decreaseMonth = () => {
            onChange(value.month(month - 1))
          }

          const increaseMonth = () => {
            onChange(value.month(month + 1))
          }

          return (
            <>
              <div style={{ padding: 8 }}>
                <Typography.Title level={4}>Custom header</Typography.Title>
                <h1>{year}</h1>
                <Row gutter={8}>
                  <Col>
                    <Button size='small' onClick={decreaseMonth}>
                      Previous
                    </Button>
                  </Col>
                  <Col>
                    <Typography.Text>{monthName}</Typography.Text>
                  </Col>
                  <Col>
                    <Button size='small' onClick={increaseMonth}>
                      Next
                    </Button>
                  </Col>
                </Row>
              </div>
              <div>Checked items: {countCheckedItems()}</div>
            </>
          )
        }}
      />

      <Modal open={selectedDate !== null} onCancel={() => setSelectedDate(null)} title='Selected Date' footer={null}>
        {selectedDate && (
          <div>
            <h3>{selectedDate.format('YYYY-MM-DD')}</h3>
            <ul className='events'>
              {getListData(selectedDate).events.map((item) => (
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
