import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    listItem: {
      maxWidth: '85%',
    },
    text: {
      overflowWrap: 'normal',
      overflow: 'hidden',
    },
  })
);
