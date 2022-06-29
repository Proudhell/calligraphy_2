import React from 'react'

export default function Header(){
    return (
        <div class="container-fluid">
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">  
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="GALLERY">GALLERY </a>
                        <a class="nav-item nav-link active" href="BLOG">BLOG</a>
                        <a class="nav-item nav-link active" href="QUIZ">QUIZ</a>
                        <a class="nav-item nav-link active" href="ABOUT_ME">ABOUT ME</a>
                    </div>
                </div>
                <div class="navbar-nav navbar-nav mr-auto">
                    <a class="nav-item nav-link active" href="SHOPPING_CART">SHOPPING CART 5 &gt;</a>
                </div>
            </nav>
        </div>
    )
}
