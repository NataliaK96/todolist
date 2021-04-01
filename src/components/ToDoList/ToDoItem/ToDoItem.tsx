import { Checkbox, Typography } from 'antd';
import React from 'react';
import { TToDo } from '../../../types';
const { Text } = Typography;

type Props = TToDo;

export const ToDoItem: React.FC<Props> = ({ done, text }) => (
  <div>
    <Checkbox checked={done} onChange={() => {}} />
    <Text strong>{text}</Text>
  </div>
);
