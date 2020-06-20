import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "../components/CustomButtons/Button";


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

const Navbar = () => {

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
    const selectedGenre = (e) => {

        window.location.href = `/${e}`

    }

    return (
        <nav className="nav-wrapper">
            <div className="container2">
                <Link to="/" className="brand-logo">Vicky Tailor</Link>

                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li onClick={handleClick}>Services
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
                                        <Link to='men'><Button color="transparent" value='Men'  >Custom Tailoring for Gents</Button></Link>

                                    </StyledMenuItem>
                                    <StyledMenuItem value='Fantasy' >

                                        <Link to='/kids'><Button color="transparent" value='Ladies' >Custom Tailoring for Ladies</Button></Link>
                                    </StyledMenuItem>
                                    <StyledMenuItem value='Young-Adult' >

                                        <Link to='/ladies'><Button color="transparent" value='Kids' >Custom Tailorig for Kids</Button></Link>
                                    </StyledMenuItem>

                                </div>



                            </div>
                        </StyledMenu>

                    </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/Cart">Profile</Link></li>
                    <li><Link to="/Cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;