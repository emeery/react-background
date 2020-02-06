import React from "react";
import Aux from "../../hoc/Auxi";
import classes from './Layout.css';
import NavBar from '../Toolbar/Toolbar';
const layout = (props) => (
    <Aux>
    <NavBar/>
    <main className={classes.Content}>{props.children}</main>
    </Aux>
);
export default layout;