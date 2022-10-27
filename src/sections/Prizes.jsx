import React from "react";

function Prizes() {
	return (
		<div
			id="prizes"
			className="bg-slate-900 bg-[url(https://github.com/YAKSHIT-22/Cyber_Threat_Analysis_Website/blob/main/ezgif.com-gif-maker.gif?raw=true)] bg-no-repeat bg-cover bg-center  w-full sm:h-screen"
		>
			<div className="backdrop-blur-md h-full w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
			<div className="flex flex-col justify-center items-center  md:p-2 lg:p-4">
				<div className="p-2 flex flex-col justify-center items-center">
					<div className="md:w-full lg:w-[88%] h-full flex flex-col justify-center items-center lg:items-start text-white bg-transparent  cursor-pointer space-y-4 ">	
						<h1 className="text-5xl lg:text-6xl xl:text-7xl font-normal text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text">
							Prizes
						</h1>
						<p className="text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] font-light lg:text-left text-center">
							Just to incentivise your hard work and effort over those 36 hours
							we have prizes, cash rewards and more lined up for the top
							performers by our generous Sponsors. Swags and goodies are for
							everyone but for the ones with the most creative and innovative
							projects we have more lined up!!
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center  md:p-2 lg:p-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full h-full  items-center md:px-1 p-4  md:py-5 gap-2">
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
						<h2 className="text-xl font-semibold p-[2%] text-center">Winner</h2>
						<h1 className="text-[2rem] font-black text-center">₹ 15,000*</h1>
						<p className="text-[.5rem] lg:text-[.8rem] text-center">
							+Goodies worth upto
						</p>
						<p>₹ 1 Lakh</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
						<h2 className="text-xl font-semibold p-[2%] text-center">
							Runner Up
						</h2>
						<h1 className="text-[2rem] font-black text-center">₹ 10,000*</h1>
						<p className="text-[.5rem] lg:text-[.8rem] text-center">
							+Goodies worth upto
						</p>
						<p>₹ 75 Thousand</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
						<h2 className="text-xl font-semibold p-[2%] text-center">Third</h2>
						<h1 className="text-[2rem] font-black text-center">₹ 5,000*</h1>
						<p className="text-[.5rem] lg:text-[.8rem] text-center">
							+Goodies worth upto
						</p>
						<p>₹ 30 Thousand</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
						<h2 className="h-auto w-[28%] sm:w-1/2 md:w-[75%] p-[2%] ">
							<img alt="imageSponsors" src={require("../assets/Sponsors/tezos.svg").default} />
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center">
							₹ 20,000* for best Dapp built on Tezos.
						</p>
						<p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center">
							+Continuity grant opportunity up to 5,000 USD for an outstanding
							project.
						</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
						<h2 className="h-auto w-[28%] sm:w-1/2 md:w-[75%] p-[2%] ">
							<img alt="imageSponsors" src={require("../assets/Sponsors/polygon.svg").default} />
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center">
							₹ 20,000* for best Dapp built on Tezos.
						</p>
						<p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center">
							+Continuity grant opportunity up to 5,000 USD for an outstanding
							project.
						</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
						<h2 className="h-auto w-[28%] sm:w-1/2 md:w-[75%] p-[2%] ">
							<img alt="imageSponsors" src={require("../assets/Sponsors/celo.png")} />
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center">
							₹ 20,000* for best Dapp built on Tezos.
						</p>
						<p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center">
							+Continuity grant opportunity up to 5,000 USD for an outstanding
							project.
						</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
}
export default Prizes;
