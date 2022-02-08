import React from "react";
import CardList from "./cardList.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />

			<main>
				<Jumbotron />
				<CardList />
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
