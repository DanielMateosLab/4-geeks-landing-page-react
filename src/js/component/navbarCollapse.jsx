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
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">{children}</ul>
			</div>
		</>
	);
};

export default NavbarCollapse;
