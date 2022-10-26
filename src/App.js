import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Judges from "./sections/Judges";
import About from "./sections/About";
import Landing from "./sections/Landing/Landing";
import Mentors from "./sections/Mentors";
import Prizes from "./sections/Prizes";
import Footer from "./sections/Footer";
import Sponsers from "./sections/sponsors/Sponsors";
import Tracks from "./sections/Track/Track";
document.onkeydown = function (e) {
	if (e.keyCode === 123) {
		return true;
	}
	if (
		e.ctrlKey &&
		e.shiftKey &&
		(e.keyCode === "I".charCodeAt(0) || e.keyCode === "i".charCodeAt(0))
	) {
		return false;
	}
	if (
		e.ctrlKey &&
		e.shiftKey &&
		(e.keyCode === "C".charCodeAt(0) || e.keyCode === "c".charCodeAt(0))
	) {
		return false;
	}
	if (
		e.ctrlKey &&
		e.shiftKey &&
		(e.keyCode === "J".charCodeAt(0) || e.keyCode === "j".charCodeAt(0))
	) {
		return false;
	}
	if (
		e.ctrlKey &&
		(e.keyCode === "U".charCodeAt(0) || e.keyCode === "u".charCodeAt(0))
	) {
		return false;
	}
	if (
		e.ctrlKey &&
		(e.keyCode === "S".charCodeAt(0) || e.keyCode === "s".charCodeAt(0))
	) {
		return false;
	}
};
function App() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		// <div className='debug-screens font-azonix bg-slate-900 w-full h-full min-h-screen bg-cover bg-center text-gray-100'>
		<div className="font-azonix bg-no-repeat bg-contain w-full h-full min-h-screen text-gray-100">
			
			{/* <div className="hidden fixed w-[15%] h-full min-h-screen z-[18] bg-gradient-to-r from-black lg:flex justify-center items-center">
				<div className="hidden flex-row justify-between gap-6 items-center p-4 relative top-[2.5rem] text-lg text-white lg:flex rotate-[270deg]">
					<a href="#sponsors">
						<div className="text-light "> Sponsors</div>
					</a>
					<a href="#mentors">
						<div className="text-light "> Mentor </div>
					</a>
					<a href="#judges">
						<div className="text-light "> Judges </div>
					</a>
					<a href="#prizes">
						<div className="text-light "> Prizes </div>
					</a>
					<a href="#tracks">
						<div className="text-light "> Tracks </div>
					</a>
				</div>
			</div> */}
			<div className="scroll-remove snap-y snap-mandatory h-screen overflow-scroll">
				<Landing />
				<About />
				<Tracks />
				<Prizes />
				<Judges />
				<Mentors />
				<Sponsers />
				<Footer />
			</div>
		</div>
	);
}

export default App;
