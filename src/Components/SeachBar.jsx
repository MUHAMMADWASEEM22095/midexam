import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function SeachBar() {
    return (
        <div className='NavBar'>
            <nav className='Nav'>
                <a href=""><li>Movies</li></a>
                <a href="/IndivitualMovies"><li>Info of Movies</li></a>
            </nav>
        </div>
    );
}
