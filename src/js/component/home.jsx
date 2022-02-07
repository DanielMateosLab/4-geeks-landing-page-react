import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />

			<main>
				<Jumbotron />
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
