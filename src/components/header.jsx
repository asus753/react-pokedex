import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar.jsx'


export const Header = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={Link} to='/'>Pokedex</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
      <Nav className='mr-auto'>
        <Nav.Link as={Link} to='/pokemon'>pokemons</Nav.Link>
          <Nav.Link as={Link} to='/generation'>generations</Nav.Link>
        </Nav>
        <SearchBar/>
      </Navbar.Collapse>
    </Navbar>
  )
}
