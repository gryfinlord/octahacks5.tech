import React from "react";
// import Cards from "./Cards";
import Text from "./Text";
import "./style.css";
import Cards1 from "./Cards1";

const Tracks = () => {
	return (
		<div
			id="tracks"
			className="tracksContainer items-center max-w-[100vw] text-white bg-gradient-to-r from-[#0b0025] via-[#1d0027] to-[#250026]"
		>
			<Text />
			{/* <Cards/> */}
			<Cards1 />
		</div>
	);
};

export default Tracks;
