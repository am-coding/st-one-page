import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SchoolIcon from '@material-ui/icons/School';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HelpIcon from '@material-ui/icons/Help';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import Button from '@material-ui/core/Button';
import img from './img3.jpg'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    boxShadow: 'none',
      color: '#2D2D2E',
      paddingLeft: '.1em',
      paddingRight: '1em',
      zIndex: '999',
      backgroundColor: '#fafafa'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {  
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  searchBox: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
       width: '100%',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    
  },
  iconButton: {
    padding: 4,
  },
  searchInput: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      border: '2px solid rgb(194, 194, 194)',
      borderRadius: '6px',
      display: 'inline-block'
    },
  },
  btn: {
    fontSize: '1rem',
    backgroundColor: '#EC1C45',
    color: 'white',
    padding: '10px 24px',
    '&:hover': {
      backgroundColor: '#fd0738'
    },
  },
  btnDiv: {
    textAlign: 'center', 
    paddingTop: '1.5em',  
    paddingBottom: '1.5em',
    marginLeft: '1em', 
    marginRight: '1em',
    borderTop: '2px solid  rgb(223, 222, 222)',
    borderBottom: '2px solid  rgb(223, 222, 222)',
  },
  active: {
    backgroundColor: 'rgba(236, 28, 69, .2) !important',
    color: '#EC1C45',
    borderRight: '2px solid blue'
  },
  profile: {
    display: 'flex',
    marginLeft: '2em',
    marginRight: '2em',
    marginTop: '10vh',
    paddingTop: '1.3em',
    borderTop: '2px solid  rgb(223, 222, 222)',
  },
  fullDrawer: {
    height: '100%',
  },
  heading: {
     fontWeight: '700',
  },
  
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [openList, setOpenList] = React.useState(true);

  const handleClickList = () => {
    setOpenList(!openList);
  };

  const drawer = (
    <div className={classes.fullDrawer}>
      <div className={classes.toolbar} />
      <div className={classes.btnDiv}>
      <Button className={classes.btn} variant="contained">Create a project</Button>
      </div>
      <List>
      <ListItem button onClick={handleClickList}>
      {openList ? <ExpandLess /> : <ExpandMore />}
        <ListItemText style={{marginLeft: '1em'}} primary="Workspaces" />
        
      </ListItem>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Shared with me" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <WatchLaterIcon />
            </ListItemIcon>
            <ListItemText primary="Recent Projects" />
          </ListItem>
        </List>
      </Collapse>
    </List>
      <List>
      <ListItem button onClick={handleClick}>
      {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText style={{marginLeft: '1em'}} primary="Learning Resources" />
        
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem selected={true}  button classes={{selected: classes.active, root: classes.nested}}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText  primary="Guided Projects" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary="Tutorials" />
          </ListItem>
          <ListItem button  classes={{root: classes.nested}}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Collapse>
    </List>

    <div className={classes.profile}>
      <img width="40px" height="40px" style={{borderRadius: '50%', marginRight: '1em', border: '1.7px solid #EC1C45'}} src={img} alt="profile" />
      <p>Rahul Dangwal</p>
    </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.searchBox}>
          <Typography className={classes.heading}  variant="h4" noWrap>
            Guided Projects
          </Typography>
          <div className={classes.searchInput}>
            <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
            </IconButton>
          </div>
          
      </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
