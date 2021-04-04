import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    listItem: {
      display: 'flex',
      padding: 0
    },
    text: {
      overflowWrap: 'normal',
      overflow: 'hidden',
      flexGrow: 1,
    },
  })
);
