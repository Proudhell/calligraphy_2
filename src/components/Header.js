import React from 'react'

export default function Header() {
    return (
        <ul>
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
            <li class="navbar_link_right">
                <a href="shopping_cart">shopping cart 5 &gt;</a>
                </li>
        </ul>
    )
}
