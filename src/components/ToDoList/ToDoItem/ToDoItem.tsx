import { Checkbox, ListItem } from '@material-ui/core';
import React from 'react';
import { TToDo } from '../../../types';
import store from '../../../store'
import { observer } from 'mobx-react';

type Props = TToDo;

export const ToDoItem: React.FC<Props> = observer(({ done, text, id }) => (
  <ListItem>
    <Checkbox checked={done} onChange={() => {
      store.selectTask(id)}
      } />
    <div>
      {done ? (<del>{text}</del>) : text}
      </div>
  </ListItem>
));
