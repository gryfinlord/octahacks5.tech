import React from "react";
const Landing = () => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<div
			id="home"
			className="flex relative flex-col flex-1 h-[88vh] bg-[url(https://github.com/YAKSHIT-22/Cyber_Threat_Analysis_Website/blob/main/ezgif.com-gif-maker.gif?raw=true)] bg-no-repeat bg-cover bg-center"
		>
			<div className="h-screen backdrop-blur-[2px]">
			
			<div className="flex relative flex-row flex-1 h-[88vh]">
			<div
				className="w-full h-full flex flex-col justify-center items-center"
			>
				

				<div className="w-full text-4xl p-2 xl:text-[9rem] leading-[1] lg:text-8xl md:text-8xl sm:text-7xl xs:text-5xl text-center  relative flex items-center justify-center">
					<p className="text-center absolute font-medium tracking-wider">
						OCTAHACKS 
					</p>
					<p className="w-full h-full text-[7rem] xs:text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] xl:text-[18rem] leading-[1] text-[#490b52] tracking-tighter">
						5.0 
					</p>
				</div>
				<div className="w-2/3 font-semibold text-md p-1 xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-center">
					<p>"TECH IT EASY"</p>
				</div>
				<div className="w-2/12 h-[1px] bg-white rounded-lg my-8 mx-4 border-white border-2"></div>

				<button className="p-2 font-medium group w-1/3 flex items-center justify-center gap-4 sm:text-sm md:text-md lg:text-xl">
					Apply With Devfolio
					<span className="flex group-hover:-inset-x-2 items-center relative text-2xl transition-all duration-150 ">
						<span className="z-10"> &rarr;</span>
						<div className="w-6 h-6 absolute border border-blue-400 left-3 group-hover:bg-blue-500  transition-all ease-in duration-150"></div>
					</span>
				</button>
				
			</div>
			<div className="flex-col justify-center item-center flex absolute right-6 xs:right-6 sm:right-8 md:right-10 lg:right-12 xl:right-14 gap-[1px] bottom-6">
				<img
					alt="socials"
					className="p-1 h-8 w-8"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/instagram-new.png"
				/>
				<img
					alt="socials"
					className="p-1 h-8 w-8"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/twitter--v1.png"
				/>
				<img
					alt="socials"
					className="p-1 h-8 w-8"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/linkedin-circled.png"
				/>
				<img
					alt="socials"
					className="p-1 h-8 w-8"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png"
				/>
				<div className="w-full h-full flex items-center justify-center p-1 mx-auto">
				<img src={require("../../assets/Line9.svg").default}/>
</div>

			</div>
			</div>
			{/* <div className="text-sm lg:text-md xl:text-lg md:w-2/4 p-4 text-center absolute bottom-44 right-20">
				<p>
					OctaHacks is the annual flagship event of GDSC, Chitkara University,
					where innovators get an opportunity to merge their creative ideas with
					their technical skills to build something exemplary. Expect more than
					36 hours of inspiring panel discussions, working and collaborating on
					futuristic and empowering tech products, networking opportunities.
				</p>
			</div> */}
			</div>
		</div>
	);
};

export default Landing;
