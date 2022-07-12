import React from "react";
import logo from './img/logo.svg';
//import './style/mainpage.module.scss';

const Background = function() {




    return (
        <div className="wrapper-header">
            <div className="big-logo">
                <img src={logo} className="mainpage-logo" alt="logo" />
            </div>
        </div>
    );
};

export default Background;