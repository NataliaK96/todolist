import React from 'react';
import { ToDoItem } from './ToDoItem';
import { TToDo } from '../../types';
import { List } from '@material-ui/core';
import { observer } from 'mobx-react';

type Props = {
  tasks: TToDo[];
};

export const ToDoList: React.FC<Props> = observer(({ tasks }) => (
  <List>
    {tasks.map((item) => (
      <ToDoItem {...item} key={item.id} />
    ))}
  </List>
));
