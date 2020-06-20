/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../Styles/footerStyle";


const useStyles = makeStyles(styles);

export default function Footer(props) {

    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="/footer/aboutus"
                                className={classes.block}
                                target="_blank"
                            >
                                About Us
              </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="/footer/ourservices"
                                className={classes.block}
                                target="_blank"
                            >
                                Our Services
              </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="/footer/address"
                                className={classes.block}
                                target="_blank"
                            >
                                Address
              </a>
                        </ListItem>

                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} , made with{" "}
                    <Favorite className={classes.icon} /> by{" "}
                    <a
                        href="https://github.com/hyderdanyal/thenewchapter"
                        className={aClasses}
                        target="_blank"
                    >
                        Danyal Hyder
          </a>{" "}
          for a better web.
        </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};