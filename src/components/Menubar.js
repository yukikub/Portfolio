import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import {Container, Nav , Navbar, NavDropdown} from 'react-bootstrap';
export default class Menubar extends Component {
    render(){
        return (
            <Navbar className='bg-warning shadow-sm mb-3' sticky="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <img alt="" src=".\logopet.png" className="App-logo img-fluid"  sizes="50"/>{' '}My Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link">About</NavLink>
                                </li>
                            </ul>
                            <NavDropdown title="More" id="basic-nav-dropdoown">
                                <NavDropdown.Item>
                                    <NavLink to="/student-list" className="nav-link">
                                        See Instructions
                                    </NavLink>
                               </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="/create-student" className="nav-link">
                                        Create Text
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink  className="nav-link">
                                        Instagram = septyuk1
                                        <br/>
                                        Twitter = @Hzkllk1n
                                        <br/>
                                        Facebook = Yxkiez GN
                                        <br/>
                                        Github = yukikub
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Navbar.Text>Signed in as : Gatesuda</Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

