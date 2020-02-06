import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import wm from '../../assets/images/watermelon.png';
// import classes from './Toolbar.css';
import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const toolstyle = {  }
const NavBar = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <AppBar style={{background: '#273746'}} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img  src={wm}  alt="watermelon"/>
          </IconButton>
          <div variant="h6" className={classes.title}>
            
          </div>
          <Button color="inherit">L</Button>
          <Button color="inherit">S</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
}
 
export default NavBar;