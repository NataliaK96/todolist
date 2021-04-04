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
          label="New task"
          placeholder="What you need to do"
          multiline
          variant="filled"
          className={classes.field}
          onChange={onChange}
          value={value}
        />  
  );
}
