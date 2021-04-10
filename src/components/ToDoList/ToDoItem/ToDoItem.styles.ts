import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    listItem: {
      display: 'flex',
      padding: 0,
      alignItems: 'flex-start',
      marginBottom: '12px',
    },
    text: {
      overflowWrap: 'normal',
      overflow: 'hidden',
      flexGrow: 1,
    },
  })
);
