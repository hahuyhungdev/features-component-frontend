import { ChangeEvent, FormEvent, useState } from 'react'

import { ILabel } from '@/mockData'
import { CloseOutlined } from '@ant-design/icons'
import { Popover as PopoverAnt } from 'antd'
import './Popover.scss'

// type IPopover = PopoverProps
interface IPopover {
  title: string
  contents: ILabel[]
}

const Popover = ({ title, contents }: IPopover) => {
  console.log('contents', contents)
  const [open, setOpen] = useState(false)
  const [checkedItems, setCheckedItems] = useState<boolean[]>([])
  const [labels, setLabels] = useState<ILabel[]>([])

  const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked

    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = [...prevCheckedItems]
      updatedCheckedItems[index] = isChecked
      //   setLabels(contents.filter((item, index) => updatedCheckedItems[index] === true))
      return updatedCheckedItems
    })
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // Perform any necessary actions with the selected checkboxes
    setLabels(contents.filter((item, index) => checkedItems[index] === true))
    console.log('labels', labels)
    setOpen(false)
  }

  const handleOpenChange = (contents: boolean) => {
    setOpen(contents)
  }
  const handleCloseLabel = (label: ILabel) => {
    setLabels(labels.filter((item) => item.label !== label.label))
    // and uncheck the checkbox
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = [...prevCheckedItems]
      console.log('updatedCheckedItems', updatedCheckedItems)
      updatedCheckedItems[contents.indexOf(label)] = false
      return updatedCheckedItems
    })
  }
  const popoverContent = (
    <form className='popoverContent' onSubmit={handleSubmit}>
      <div className='items'>
        {contents.length > 0 &&
          contents.map((item, index) => {
            return (
              <label className='item' key={index}>
                <input type='checkbox' checked={checkedItems[index] || false} onChange={handleCheckboxChange(index)} />
                <span>{item.label}</span>
              </label>
            )
          })}
      </div>
      <div className='footer'>
        <p>* 최대 3개 선택 가능</p>
        <button type='submit'>완료</button>
      </div>
    </form>
  )

  return (
    <>
      <PopoverAnt
        className='PopoverCustom'
        style={{
          marginTop: '20px'
        }}
        placement='bottom'
        content={popoverContent}
        trigger='click'
        open={open}
        onOpenChange={handleOpenChange}
      >
        <span>{title}</span>
      </PopoverAnt>
      {labels.length > 0 && (
        <div className='showItems'>
          {labels.map((label, index) => (
            <div className='showItem' key={index}>
              <span>{label.label}</span>
              <button onClick={() => handleCloseLabel(label)}>
                <CloseOutlined />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Popover
