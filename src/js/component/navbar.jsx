import React from "react";
import NavbarCollapse from "./navbarCollapse.jsx";
import NavItem from "./navitem.jsx";
import Nav from "./nav.jsx";

const Navbar = () => (
	<Nav>
		<a className="navbar-brand" href="#">
			Start Bootstrap
		</a>

		<NavbarCollapse>
			<NavItem active>Home</NavItem>
			<NavItem>About</NavItem>
			<NavItem>Services</NavItem>
			<NavItem>Contact</NavItem>
		</NavbarCollapse>
	</Nav>
);

export default Navbar;
