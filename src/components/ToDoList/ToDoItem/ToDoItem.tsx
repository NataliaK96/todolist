import { Checkbox, ListItem } from '@material-ui/core';
import React from 'react';
import { TToDo } from '../../../types';
import store from '../../../store';
import { observer } from 'mobx-react';
import { useStyles } from './ToDoItem.styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

type Props = TToDo;

export const ToDoItem: React.FC<Props> = observer(({ done, text, id }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Checkbox
        checked={done}
        onChange={() => {
          store.selectTask(id);
        }}
      />
      <div className={classes.text}>{done ? <del>{text}</del> : text}</div>
      <IconButton onClick={()=>{store.deleteTask(id)}}>
        <CloseIcon/>
      </IconButton>
    </ListItem>
  );
});
