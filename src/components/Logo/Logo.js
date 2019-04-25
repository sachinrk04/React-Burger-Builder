import React from 'react';
import { Link } from 'react-router-dom';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';
const logo = (props) => (
    <Link to="/">
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="MyBurger " />
        </div>
    </Link>
)

export default logo;
