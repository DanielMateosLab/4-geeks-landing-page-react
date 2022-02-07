import React from "react";
import NavbarCollapse from "./navbarCollapse.jsx";
import NavItem from "./navitem.jsx";

const Navbar = () => (
	<nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
		<div className="nav-container">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<NavbarCollapse>
				<NavItem active>Home</NavItem>
				<NavItem>About</NavItem>
				<NavItem>Services</NavItem>
				<NavItem>Contact</NavItem>
			</NavbarCollapse>
		</div>
	</nav>
);

export default Navbar;
