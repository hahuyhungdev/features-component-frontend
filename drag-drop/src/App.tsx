import Dashboard from 'pages/dashboard'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { v4 as uuid } from 'uuid'
import 'react-toastify/dist/ReactToastify.css'
import { RootState } from 'store'

function App() {
  const ColumnsFromServer = useSelector((state: RootState) => state.todos)

  return (
    <Fragment>
      <ToastContainer />
      <Dashboard dataColumns={ColumnsFromServer} />
    </Fragment>
  )
}

export default App
