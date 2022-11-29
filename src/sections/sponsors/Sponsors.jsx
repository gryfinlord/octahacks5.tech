import React from "react";
import Logo1 from "../../assets/Sponsors/community-partner/gdsc-logo-1.svg";
import Logo2 from "../../assets/Sponsors/community-partner/gdsc-logo-2.svg";
import Logo3 from "../../assets/Sponsors/community-partner/gdsc-logo-3.svg";
import Logo4 from "../../assets/Sponsors/community-partner/gdsc-logo-4.svg";
import Logo5 from "../../assets/Sponsors/community-partner/gdsc-logo-5.svg";
import Logo6 from "../../assets/Sponsors/community-partner/gdsc-logo-6.svg";
import cuLogo from "../../assets/Sponsors/community-partner/cu-logo.png";
import Logo7 from "../../assets/Sponsors/community-partner/gdsc-logo-7.svg";
import Logo8 from "../../assets/Sponsors/community-partner/gdsc-logo-8.svg";

const Sponsers = () => {
	return (
		<div id="sponsors" className="sm:flex-col flex bg-slate-900 flex-wrap">
			{/* left div----------------------------------------------------------------------------------------- */}
			<div className=" backdrop-blur-lg flex-col md:flex-row flex text-center items-center justify-center ">
				<div className="w-full">
					<div className="font-bold text-4xl sm:text-5xl text-white pb-4 p-4 mt-2">
						<h1>
							Our{" "}
							<span
								className="font-bold text-4xl sm:text-5xl 
text-transparent  bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text"
							>
								Awesome
							</span>
							&nbsp;Sponsors
						</h1>
					</div>
					<div className="text-white p-4">
						While all our participants make our event lively. it is our very
						amazing{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
							{" "}
							sponsors{" "}
						</span>
						that{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
							make it possible
						</span>
					</div>
				</div>

				{/* right div -----------------------------------------------------------------------------------*/}

				<div className=" w-full flex justify-center text-center items-center relative h-screen overflow-y-hidden	">
					<div className="flex flex-col text-center items-center justify-center p-6 relative overflow-y-hidden group">
						<div className="animate-marquee group-hover:pause">
							{/* Platinum Sponsors --------------------------------------------------------------------------*/}

							<div className=" bg-white flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-x overflow-hidden my-4  w-full p-4">
								<div>
									<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
										Platinum Sponsors
									</h1>
								</div>

								{/* Platinum Sponsors Images-------------------------------------------------------------------- */}

								<div className="flex justify-center gap-6 p-4 flex-wrap items-center">
									<img
										src={require("../../assets/Sponsors/devfolio.svg").default}
										alt="devfolio"
										className=" w-36 h-auto inline"
									/>
									<img
										src={require("../../assets/Sponsors/polygon.svg").default}
										alt=""
										className="w-36 h-auto"
									/>
								</div>
							</div>

							{/* Gold Sponsors ----------------------------------------------------------------------------*/}

							<div className=" bg-white flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg  h-full rounded-lg shadow-x overflow-hidden my-4  w-full p-4 ">
								<div>
									<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
										Gold Sponsors
									</h1>
								</div>

								{/* Gold Sponsors Images ----------------------------------------------------------------*/}
								<div className="flex justify-center gap-2 p-4 flex-wrap items-center ">
									<img
										src={require("../../assets/Sponsors/Filecoin.png")}
										alt="devfolio"
										className="w-36 h-auto inline"
									/>
									<img
										src={require("../../assets/Sponsors/tezos.svg").default}
										alt=""
										className="w-36 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/celo.png")}
										alt=""
										className="w-36 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/axure.png")}
										alt=""
										className="w-36 h-auto"
									/>
								</div>
							</div>

							{/* Premium Sponsors ------------------------------------------------------------------------ */}
							<div className=" bg-white flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg  h-full rounded-lg shadow-x overflow-hidden  w-full p-4">
								<div>
									<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  p-2">
										Premium Sponsors
									</h1>
								</div>

								{/* Premium Sponsors Images ---------------------------------------------------------------- */}
								<div className="flex justify-center gap-4 p-4 flex-wrap items-center">
									<img
										src={require("../../assets/Sponsors/solanaLogo.png")}
										alt="devfolio"
										className="w-36 h-auto inline"
									/>
									<img
										src={require("../../assets/Sponsors/airmeet.png")}
										alt=""
										className="w-36 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/sashido.png")}
										alt=""
										className="w-36 h-auto"
									/>
								</div>
							</div>

							{/* Community Partner ----------------------------------------------------------------------------*/}

							<div className=" bg-white flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg  h-full rounded-lg shadow-x overflow-hidden my-4  w-full p-4 ">
								<div>
									<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
										Community Partner
									</h1>
								</div>

								{/* community Partner Images ----------------------------------------------------------------*/}
								<div className="flex justify-center gap-2 p-4 flex-wrap items-center ">
									<img src={cuLogo} alt="chitkara" className="w-32 h-auto" />
									<img src={Logo1} alt="gietu" className="w-32 h-auto" />
									<img src={Logo2} alt="kalindi" className="w-32 h-auto" />
									<img src={Logo3} alt="kanpur" className="w-32 h-auto" />
									<img src={Logo4} alt="maharishi" className="w-32 h-auto" />
									<img src={Logo5} alt="peshawar" className="w-32 h-auto" />
									<img src={Logo6} alt="ropar" className="w-32 h-auto" />
									<img src={Logo7} alt="ropar" className="w-32 h-auto" />
									<img src={Logo8} alt="jalandhar" className="w-32 h-auto" />
								</div>
							</div>
						</div>
						<div className="absolute animate-marquee2  group-hover:pause px-6">
							{/* Platinum Sponsors --------------------------------------------------------------------------*/}

							<div className=" bg-white flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-x overflow-hidden my-4  w-full p-4">
								<div>
									<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
										Platinum Sponsors
									</h1>
								</div>

								{/* Platinum Sponsors Images-------------------------------------------------------------------- */}

								<div className="flex justify-center gap-6 p-4 flex-wrap items-center">
									<img
										src={require("../../assets/Sponsors/devfolio.svg").default}
										alt="devfolio"
										className=" w-36 h-auto inline"
									/>
									<img
										src={require("../../assets/Sponsors/polygon.svg").default}
										alt=""
										className="w-36 h-auto"
									/>
								</div>
							</div>

							{/* Gold Sponsors ----------------------------------------------------------------------------*/}

							<div className=" bg-white flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg  h-full rounded-lg shadow-x overflow-hidden my-4  w-full p-4 ">
								<div>
									<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
										Gold Sponsors
									</h1>
								</div>

								{/* Gold Sponsors Images ----------------------------------------------------------------*/}
								<div className="flex justify-center gap-2 p-4 flex-wrap items-center ">
									<img
										src={require("../../assets/Sponsors/Filecoin.png")}
										alt="devfolio"
										className="w-36 h-auto inline"
									/>
									<img
										src={require("../../assets/Sponsors/tezos.svg").default}
										alt=""
										className="w-36 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/celo.png")}
										alt=""
										className="w-36 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/axure.png")}
										alt=""
										className="w-36 h-auto"
									/>
								</div>
							</div>

							{/* Premium Sponsors ------------------------------------------------------------------------ */}
							<div className=" bg-white flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg  h-full rounded-lg shadow-x overflow-hidden  w-full p-4">
								<div>
									<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
										Premium Sponsors
									</h1>
								</div>

								{/* Premium Sponsors Images ---------------------------------------------------------------- */}
								<div className="flex justify-center gap-4 p-4 flex-wrap items-center">
									<img
										src={require("../../assets/Sponsors/solanaLogo.png")}
										alt="devfolio"
										className="w-36 h-auto inline"
									/>
									<img
										src={require("../../assets/Sponsors/airmeet.png")}
										alt=""
										className="w-36 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/sashido.png")}
										alt=""
										className="w-36 h-auto"
									/>
								</div>
							</div>

							{/* Community Partner ----------------------------------------------------------------------------*/}

							<div className=" bg-white flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg  h-full rounded-lg shadow-x overflow-hidden my-4  w-full p-4 ">
								<div>
									<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
										Community Partner
									</h1>
								</div>

								{/* Gold Sponsors Images ----------------------------------------------------------------*/}
								<div className="flex justify-center gap-2 p-4 flex-wrap items-center ">
									<img src={cuLogo} alt="chitkara" className="w-32 h-auto" />
									<img src={Logo1} alt="gietu" className="w-32 h-auto" />
									<img src={Logo2} alt="kalindi" className="w-32 h-auto" />
									<img src={Logo3} alt="kanpur" className="w-32 h-auto" />
									<img src={Logo4} alt="maharishi" className="w-32 h-auto" />
									<img src={Logo5} alt="peshawar" className="w-32 h-auto" />
									<img src={Logo6} alt="ropar" className="w-32 h-auto" />
									<img src={Logo7} alt="ropar" className="w-32 h-auto" />
									<img src={Logo8} alt="jalandhar" className="w-32 h-auto" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* right div -----------------------------------------------------------------------------------*/}
		</div>
	);
};

export default Sponsers;
