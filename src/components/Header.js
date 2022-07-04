import React from 'react'
import { Navbar,  Nav} from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar variant="dark" expand="md">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    
                    navbarScroll
                >
                    <Nav.Link href="Gallery">Gallery</Nav.Link>
                    <Nav.Link href="Blog">Blog</Nav.Link>
                    <Nav.Link href="Quiz">Quiz</Nav.Link>
                    <Nav.Link href="About_me">About me</Nav.Link>
                </Nav>
            </Navbar.Collapse>            
        </Navbar>
    )
}
