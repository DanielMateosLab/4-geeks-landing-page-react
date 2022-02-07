import React from "react";

const NavItem = ({ children, active }) => (
	<li className="nav-item">
		<a className={`nav-link ${active ? "active" : ""}`} href="#">
			{children}
		</a>
	</li>
);

export default NavItem;
