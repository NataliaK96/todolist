import React from 'react'
import { List } from 'antd'
import { ToDoItem } from './ToDoItem'
import { TToDo } from '../../types'

const data: TToDo[] = [{text: 'ddd', done: false}, {text: 'ddd', done: false}, {text: 'ddd', done: false}]

export const ToDoList = () => <List
header={<div>ToDoList</div>}
footer={<div>Footer</div>}
bordered
dataSource={data}
renderItem={item => (
   <ToDoItem done={item.done} text={item.text}/>
)}
/>