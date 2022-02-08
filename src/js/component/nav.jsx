import React from "react";

const Nav = ({ children }) => (
	<nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
		<div className="nav-container">{children}</div>
	</nav>
);

export default Nav;
