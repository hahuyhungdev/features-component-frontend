/* eslint-disable no-unused-vars */
import './style.css'

import { Form, Input, Modal } from 'antd'
import { FooterModal } from 'components/FooterModal'
import { memo } from 'react'
import { toast } from 'react-toastify'
import { ITodo } from 'pages/dashboard/todos.slice'

interface PopupTodoType {
  title: string
  onOpen: boolean
  onFinish: (values: ITodo) => void
  onCancel: () => void
  onInitialValues?: ITodo
}
export const PopupTodo = ({
  title,
  onOpen,
  onFinish,
  onCancel,
  onInitialValues = {
    id: '',
    title: '',
    content: ''
  }
}: PopupTodoType) => {
  const [form] = Form.useForm()
  return (
    <div className='modalTag justify-items-start'>
      <Modal
        closable={false}
        maskClosable={false}
        title={title}
        open={onOpen}
        centered
        className={'modalTag justify-items-start'}
        footer={[<FooterModal key='footerCutom' onCancel={onCancel} onFinish={form.submit} />]}
      >
        <Form
          form={form}
          autoComplete='off'
          onFinish={onFinish}
          onFinishFailed={(error) => {
            toast.error(error.errorFields[0].errors[0])
          }}
          colon={false}
          initialValues={{
            id: onInitialValues.id,
            title: onInitialValues.title,
            content: onInitialValues.content
          }}
        >
          <Form.Item label='title' name={'title'} rules={[{ required: true, message: 'Tag is required' }]}>
            <Input placeholder='Tag' />
          </Form.Item>
          <Form.Item label='content' name={'content'}>
            <Input.TextArea showCount maxLength={100} placeholder='Autosize height based on content lines' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default memo(PopupTodo)
