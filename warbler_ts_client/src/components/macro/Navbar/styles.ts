import {createStyles, Theme} from '@material-ui/core/styles';


const styles = (theme: Theme) => createStyles({
   root: {
     justifyContent: 'space-between',
     backgroundColor: theme.palette.primary.main
   }
});


export default styles;