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
                <a href="" className='mov'>Movies</a>
                <a href="/IndivitualMovies" className='info'>Info of Movies</a>
            </nav>
        </div>
    );
}
