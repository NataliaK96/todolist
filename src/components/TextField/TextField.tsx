import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './TextField.styles';

type Props = {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
    value: string
}

export const MultilineTextFields: React.FC<Props> = ({onChange, value}) => {
    const classes = useStyles();
  return (
        <TextField
          id="filled-textarea"
          label="Новая задача"
          placeholder="добавьте задачу"
          multiline
          variant="filled"
          className={classes.margin}
          onChange={onChange}
          value={value}
        />  
  );
}
