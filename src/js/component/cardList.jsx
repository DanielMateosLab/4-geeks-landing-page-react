import React from "react";
import Card from "./card.jsx";

const CardList = () => {
	const cards = [
		{
			title: "Aenean eleifend",
			body: "Suspendisse massa augue, tempus non dictum vel, pulvinar at arcu. Phasellus maximus faucibus justo ac imperdiet. Sed vitae arcu fringilla, varius tortor non, dictum nisl.",
		},
		{
			title: "Volutpat tellus",
			body: "Donec molestie eleifend leo eget viverra. Mauris efficitur mattis est, vitae imperdiet nisl consequat ut.  Ut sed ultricies ante, quis tincidunt mauris.",
		},
		{
			title: "Pellentesque condimentum",
			body: "Sed eu suscipit mi. Nam mollis velit eu magna tincidunt feugiat. Proin eleifend commodo magna et varius. Ut eget ex id ipsum sodales tempor ut in dolor.",
		},
		{
			title: "Donec molestie",
			body: "Maecenas tristique neque nisl, nec lacinia enim faucibus in. Pellentesque lobortis, quam ac consequat auctor, turpis arcu commodo odio, at consectetur felis lectus non ante.",
		},
	];
	return (
		<section className="card-list">
			{cards.map((card) => (
				<Card {...card} />
			))}
		</section>
	);
};

export default CardList;
