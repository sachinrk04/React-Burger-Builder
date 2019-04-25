import React from 'react';

import classes from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxulary/Auxulary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
  return (
    <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')} onClick={props.closed} >
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems emailName={props.Email} isAuthenticated={props.isAuth} />
            </nav>
        </div>
    </Aux>
  );
}

export default sideDrawer;
