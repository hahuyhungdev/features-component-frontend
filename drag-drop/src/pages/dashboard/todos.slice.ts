import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
export interface ITodo {
  id: string
  title: string
  content: string
}
export interface IColumns {
  [columnName: string]: {
    name: string
    items: ITodo[]
  }
}

const initialState: IColumns = {
  column1: {
    name: 'Todo',
    items: [
      { id: '1', title: 'Task 1', content: 'Task 1 content' },
      { id: '2', title: 'Task 2', content: 'Task 2 content' },
      { id: '3', title: 'Task 3', content: 'Task 3 content' }
    ]
  },
  column2: {
    name: 'In Progress',
    items: [
      { id: '4', title: 'Task 4', content: 'Task 4 content' },
      { id: '5', title: 'Task 5', content: 'Task 5 content' }
    ]
  },
  column3: {
    name: 'Done',
    items: [
      { id: '6', title: 'Task 6', content: 'Task 6 content' },
      { id: '7', title: 'Task 7', content: 'Task 7 content' }
    ]
  }
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ column: string; todo: ITodo }>) => {
      const { column, todo } = action.payload
      state[column].items.push(todo)
    },
    editTodoDrag: (
      state,
      action: PayloadAction<{
        column: string
        todoId: string
        updatedTodo: ITodo
      }>
    ) => {
      console.log(action.payload)
      const { column, todoId, updatedTodo } = action.payload
      const todoIndex = state[column].items.findIndex((todo) => todo.id === todoId)
      state[column].items[todoIndex] = updatedTodo
    },
    removeTodo: (state, action: PayloadAction<{ column: string; todoId: string }>) => {
      const { column, todoId } = action.payload
      console.log('column', column, 'todoId', todoId)
      const todoIndex = state[column].items.findIndex((todo) => todo.id === todoId)
      state[column].items.splice(todoIndex, 1)
    },
    setColumns: (state, action: PayloadAction<IColumns>) => {
      return action.payload
    }
  }
})
export const { addTodo, removeTodo, editTodoDrag, setColumns } = todosSlice.actions
export default todosSlice.reducer
