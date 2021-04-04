import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      marginRight: 0,
      marginLeft: 'auto',
    },
    button: {
      position: 'fixed',
      bottom: '5%',
      right: '5%',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);
