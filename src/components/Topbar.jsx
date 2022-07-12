import React, {useState} from "react";


const Topbar = function () {
    const [products, setProducts] = useState(0);

    function NumberOfProducts () {
        setProducts(products + 1);
    }


    return(
        <div>
            <ul >
            <div class="left-buttons">
                <ul class="navbar_links">
                    <li><a class="navbar-links" href="teasers">teasers</a></li>
                    <li><a class="navbar-links" href="constructor">constructor</a></li>
                    <li><a class="navbar-links" href="manufacturing">manufacturing</a></li>
                </ul>
                <ul class="navbar_links">
                    <li><a class="navbar-links" href="catalog">catalog</a></li>
                    <li><a class="navbar-links" href="discounts">discounts</a></li>
                    <li><a class="navbar-links" href="about_author">about author</a></li>
                </ul>
            </div>
            <li class="navbar_link_right">
                <button onClick={NumberOfProducts}>Товары</button>
                <img src="" alt="" />
                <a href="shopping_cart">shopping cart <span>{products}</span> &gt;</a>
            </li>
        </ul>
        </div>
    );
};

export default Topbar;