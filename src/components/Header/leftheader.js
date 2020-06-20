/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Button from "../CustomButtons/Button.js";
import styles from "../../Styles/headerLinksStyle";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "../../Styles/dropdownStyle.css"
import { Link } from 'react-router-dom'
// import Search from "../search"


const useStyles = makeStyles(styles);

const StyledMenu = withStyles({
  paper: {
    border: 'px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: '#59bfff'
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [genre, setGenre] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profileAnchor, setProfileAnchor] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickProfile = (event) => {
    setProfileAnchor(event.currentTarget)
  }
  const handleCloseProfile = () => {
    setProfileAnchor(null)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const selectedGenre = (e) => {

  //   window.location.href = `/${e}`

  // }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>

        <Link to='/'> <Button color="transparent" >
          Home
                </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>

        <Link to='/aboutus'> <Button color="transparent">
          About Us
                </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} >
        <div class="dropdown" >
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="transparent"
            onClick={handleClick}
          >
            Services
      </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}

          >
            <div class="dropdown-menu dropdown-multicol2" aria-labelledby="dropdownMenuButton"  >
              <div class="dropdown-col" >
                <StyledMenuItem value='Fiction' >
                  <Link to='/Men'><Button color="transparent" value='Men'  >Custom Tailoring for Gents</Button>
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem value='Fantasy' >

                  <Link to='/Ladies'><Button color="transparent" value='Ladies' >Custom Tailoring for Ladies</Button>
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem value='Young-Adult' >

                  <Link to='Kids'> <Button color="transparent" value='Kids' >Custom Tailorig for Kids</Button>
                  </Link>
                </StyledMenuItem>

              </div>



            </div>
          </StyledMenu>

        </div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to='/contact'><Button color="transparent">
          Contact Us
                </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} >
        <div class="dropdown" >
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="transparent"
            onClick={handleClickProfile}
          >
            Profile
      </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={profileAnchor}
            keepMounted
            open={Boolean(profileAnchor)}
            onClose={handleCloseProfile}

          >
            <div class="dropdown-menu dropdown-multicol2" aria-labelledby="dropdownMenuButton"  >
              <div class="dropdown-col" >
                <StyledMenuItem value='Fiction' >
                  <Link to='/Cart'><Button color="transparent" value='Cart'  >Cart</Button>
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem value='Fantasy' >

                  <Link to='/Profile'><Button color="transparent" value='Profile' >My Account</Button>
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem value='Young-Adult' >

                  <Link to='/Login'><Button color="transparent" value='Login' >Login</Button>
                  </Link>
                </StyledMenuItem>

              </div>



            </div>
          </StyledMenu>

        </div>
      </ListItem>
      {/* <ListItem className={classes.listItem} style={{ top: "5px" }}>
        <Search />

      </ListItem> */}
    </List>


  );

}
