import React, {useState} from "react";
import stylesComponets from'./style/componets.module.scss'

const Topbar = function () {
    const [products, setProducts] = useState(0);

    function NumberOfProducts () {
        setProducts(products + 1);
    }


    return(
        <div className={stylesComponets.topBar}>
            <div className={stylesComponets.topBarLeft}>
                <ul className={stylesComponets.topBarLeftWrapper}>
                    <li className={stylesComponets.topBarLeftItem}><a className={stylesComponets.topBarLeftItem} href="teasers">teasers</a></li>
                    <li className={stylesComponets.topBarLeftItem}><a className={stylesComponets.topBarLeftItem} href="constructor">constructor</a></li>
                    <li className={stylesComponets.topBarLeftItem}><a className={stylesComponets.topBarLeftItem} href="manufacturing">manufacturing</a></li>
                </ul>
                <ul className={stylesComponets.topBarLeftWrapper}>
                    <li className={stylesComponets.topBarLeftItem}><a className={stylesComponets.topBarLeftItem} href="catalog">catalog</a></li>
                    <li className={stylesComponets.topBarLeftItem}><a className={stylesComponets.topBarLeftItem} href="discounts">discounts</a></li>
                    <li className={stylesComponets.topBarLeftItem}><a className={stylesComponets.topBarLeftItem} href="about_author">about author</a></li>
                </ul>
            </div>
            <div>
            <li className={stylesComponets.topBarRight}>
                <button onClick={NumberOfProducts}>Товары</button>
                <div className={stylesComponets.topBarRightWrapper}><img src="" alt="" />
                <a className={stylesComponets.topBarRightItem} href="shopping_cart">shopping cart <span>{products}</span> &gt;</a></div>
            </li>
            </div>
        </div>
    );
};

export default Topbar;