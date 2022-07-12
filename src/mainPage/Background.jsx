import React from "react";
import logo from './img/logo.svg';
import styles from './style/mainpage.module.scss';

const Background = function() {
    // const [iconsBanner, setIconsBanner] = useState(0);
    // const imageContainer = 308;

    const windowInnerWidth = document.documentElement.clientWidth;
    const windowInnerHeight = document.documentElement.clientHeight;

    console.log(windowInnerWidth);
    console.log(windowInnerHeight);
    
    

    return (
        <div className={styles.wrapperBanner} >
            <div className={styles.bigLogo}>
                <img src={logo} className={styles.mainpage-logo} alt="logo" />
            </div>
        </div>
    );
};

export default Background;