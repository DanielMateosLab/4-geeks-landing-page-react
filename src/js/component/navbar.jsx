import React from "react";
import NavbarCollapse from "./navbarCollapse.jsx";
import NavItem from "./navitem.jsx";

const Navbar = () => (
	<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
		<div class="nav-container">
			<a class="navbar-brand" href="#">
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
