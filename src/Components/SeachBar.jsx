import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SeachBar() {
    return (
        <div className='NavBar'>
            <nav className='Nav'>
                <a href="">Movies</a>
                <a href="">Info of Movies</a>
            </nav>
        </div>
    );
}