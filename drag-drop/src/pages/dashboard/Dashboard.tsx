import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { Dropdown, Input } from 'antd'
import PopupTodo from 'components/PopupTodo'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ITodo, removeTodo, editTodoDrag, addTodo, IColumns, setColumns } from './todos.slice'
function Dashboard({ dataColumns }: { dataColumns: IColumns }) {
  // const [columns, setColumns] = useState(dataColumns)
  const [isEditVisible, setIsEditVisible] = useState(false)
  const [idDesNameColumnDrop, setIdDesNameColumnDrop] = useState('')
  const [idDesDrag, setIdDesDrag] = useState('')

  const [itemCurrent, setItemCurrent] = useState<ITodo>({
    id: '',
    title: '',
    content: ''
  })
  const dispatch = useDispatch()
  function findColumnByItemId(columns: IColumns, itemId: string): { columnName: string; itemIndex: number } | null {
    for (const columnName in columns) {
      const column = columns[columnName]
      const itemIndex = column.items.findIndex((item) => item.id === itemId)
      if (itemIndex !== -1) {
        return { columnName, itemIndex }
      }
    }
    return null
  }
  const handleRemoveTodo = (id: string) => {
    console.log('id', id)
    const findColumn = findColumnByItemId(dataColumns, id)
    dispatch(
      removeTodo({
        column: findColumn?.columnName as string,
        todoId: id
      })
    )
  }
  useEffect(() => {
    // setColumns(dataColumns)
    console.log('columns', dataColumns)
  }, [dataColumns])

  const itemsMenu = [
    {
      label: 'Edit',
      key: 'edit',
      icon: <EditOutlined />
    },
    {
      label: 'Delete',
      key: 'delete',
      icon: <DeleteOutlined />
    }
  ]
  const handleMenu = (event: any, item: any) => {
    setItemCurrent(item)
    if (event.key === 'delete') {
      console.log('item', item)
      handleRemoveTodo(item.id)
    } else if (event.key === 'edit') {
      setIsEditVisible(true)
    }
  }
  const handlEditTodoDrag = (values: ITodo) => {
    const findColumn = findColumnByItemId(dataColumns, itemCurrent.id)
    dispatch(
      editTodoDrag({
        column: findColumn?.columnName as string,
        todoId: itemCurrent.id,
        updatedTodo: {
          id: itemCurrent.id,
          title: values.title,
          content: values.content
        }
      })
    )
    setIsEditVisible(false)
  }
  const handleDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return
    const { destination, source, draggableId } = result
    console.log('result', result)
    setIdDesNameColumnDrop(destination.droppableId)
    setIdDesDrag(draggableId)
    if (source.droppableId !== destination.droppableId) {
      console.log('da khac', result)
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      dispatch(
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          }
        })
      )
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      dispatch(
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems
          }
        })
      )
    }
  }

  return (
    <div className='h-[100vh] w-auto p-4 text-xl'>
      <h1 className='text-center font-extrabold'>Hiring Test - Author: Ha Huy Hung</h1>

      <div className='mt-4 flex h-full justify-center gap-2'>
        <DragDropContext onDragEnd={(result) => handleDragEnd(result, dataColumns, setColumns)}>
          {Object.entries(dataColumns).map(([columnId, column]) => {
            return (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? 'lightblue' : '#F8FAFC',
                        padding: 16,
                        width: 250,
                        minHeight: 500,
                        border: '1px solid #D6D8DB',
                        borderRadius: '5px'
                      }}
                    >
                      <h2 className='hight text-base font-bold leading-7'>{column.name}</h2>
                      {column.items.map((item, index) => {
                        return (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: 'none',
                                    minHeight: '50px',
                                    backgroundColor: snapshot.isDragging ? 'lightblue' : '#ffffff',
                                    ...provided.draggableProps.style
                                  }}
                                  className='my-5 rounded-lg p-2 shadow-[0px_1px_4px_rgba(0,0,0,0.25)]'
                                >
                                  <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                      <p className='text-base font-semibold text-[#000000]'>{item.title}</p>
                                      <p className='text-xs font-normal text-[#6C6C6C]'>{item.content}</p>
                                    </div>
                                    {isEditVisible && (
                                      <PopupTodo
                                        title='Edit Todo'
                                        onCancel={() => setIsEditVisible(false)}
                                        onOpen={isEditVisible}
                                        onFinish={handlEditTodoDrag}
                                        onInitialValues={itemCurrent}
                                      />
                                    )}
                                    <Dropdown
                                      placement='topLeft'
                                      menu={{
                                        onClick: (e: any) => {
                                          handleMenu(e, item)
                                        },
                                        items: itemsMenu
                                      }}
                                    >
                                      <MoreOutlined className='text-[#6C6C6C]' />
                                    </Dropdown>
                                  </div>
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            )
          })}
        </DragDropContext>
      </div>
    </div>
  )
}

export default Dashboard
