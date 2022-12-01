import React from "react";

function Prizes() {
	return (
		<div
			id="prizes"
			className="bg-no-repeat bg-contain grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full xl:h-[84%] lg:h-[84%] bg-slate-900 bg-fixed"
		>
			<div className="flex flex-col justify-center items-center">
				<div className="p-2 flex flex-col justify-center items-center lg:items-start">
					<div className="md:w-full lg:w-[88%] h-full flex flex-col justify-center items-center lg:items-start text-white bg-transparent  cursor-pointer space-y-4 ">
						<h1 className="mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text text-center">
							Prizes
						</h1>
						<p className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] w-[94%] lg:w-full p-4 lg:p-0 text-center lg:text-start font-normal">
							Just to incentivise your hard work and effort over those 36 hours
							we have prizes, cash rewards and more lined up for the top
							performers by our generous sponsors. Swags and goodies are for
							everyone but for the ones with the most creative and innovative
							projects we have more lined up!!
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center lg:pr-2">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full h-full  items-center px-3 py-5 gap-2">
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 rounded-[4px]">
						<h2 className="text-xl  font-semibold p-[2%] text-center">
							Winner
						</h2>
						<h1 className="text-[1.8rem] font-semibold text-center">
							₹ 15,000*
						</h1>
						<p className="text-[.6rem] lg:text-[.8rem] text-center">
							+ Goodies worth upto
						</p>
						<p>₹ 1 Lakh</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
						<h2 className="text-xl font-semibold p-[2%] text-center">
							1st Runner Up
						</h2>
						<h1 className="text-[1.8rem] font-semibold text-center">
							₹ 10,000*
						</h1>
						<p className="text-[.6rem] lg:text-[.8rem] text-center">
							+ Goodies worth upto
						</p>
						<p>₹ 75 Thousand</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
						<h2 className="text-xl  font-semibold p-[2%] text-center">
							2nd Runner Up
						</h2>
						<h1 className="text-[1.8rem] font-semibold text-center">
							₹ 5,000*
						</h1>
						<p className="text-[.6rem] lg:text-[.8rem] text-center">
							+ Goodies worth upto
						</p>
						<p>₹ 30 Thousand</p>
					</div>
					<div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-4">
						<h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
							<img
								alt="imageSponsors"
								src={require("../../assets/Sponsors/polygon.svg").default}
							/>
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
							₹ 15,000 for the greatest hack created using Polygon and Ethereum.
						</p>
						<p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center font-regular">
							eligibility to apply for internships or full-time positions, and
							up to $5,000 in seed money for winners!
						</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-4">
						<h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
							<img
								alt="imageSponsors"
								src={require("../../assets/Sponsors/tezos.svg").default}
							/>
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
							₹ 20,000 for the best Celo-built Dapp
						</p>
						<p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center font-regular">
							Up to Rs. 1 lakh worth of goodies
						</p>
					</div>

					<div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
						<h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
							<img
								alt="imageSponsors"
								src={require("../../assets/Sponsors/celo.png")}
							/>
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
							₹ 20,000* for best Celo-built Dapp.
						</p>
						<p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
							+ Upto Rs. 1 lakh of goodies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Prizes;
