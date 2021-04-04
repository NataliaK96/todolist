import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './Buttons.styles';

type Props = {
  onClick: () => void;
};

export const AddButton: React.FC<Props> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.button}>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.margin}
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
