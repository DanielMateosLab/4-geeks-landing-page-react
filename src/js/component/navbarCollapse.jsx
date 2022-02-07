import React from "react";

/**
 *
 * @param {*} children The menu links
 * @returns A toggler to see the menu in small devices. The menu links in large devices.
 */
const NavbarCollapse = ({ children }) => {
	return (
		<>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">{children}</ul>
			</div>
		</>
	);
};

export default NavbarCollapse;
