import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const navStyle = {
        backgroundColor: '#636fd4'
    }

    return (
        <Navbar dark color='primary' expand='md'>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink to='/' className='nav-link'>
                            <i className='fa fa-home fa-lg'/> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/quiz/math" className='nav-link'>
                            <i className='fa fa-solid fa-calculator' /> Math
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink to="#" className='nav-link'>
                            <i className='fa fa-solid fa-flask' /> Chemistry
                        </NavLink>
                    </NavItem> */}
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;