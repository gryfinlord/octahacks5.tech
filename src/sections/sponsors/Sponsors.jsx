import React from "react";
import JetLogo from "../../assets/Sponsors/premium/jbLogo.svg";
import DGOcean from "../../assets/Sponsors/gold/DigitalOcean_logo.svg";

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
									<img src={DGOcean} alt="" className="w-28 h-auto" />
									<img
										src={require("../../assets/Sponsors/premium/wolfram.png")}
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
										alt="airmeet"
										className="w-36 h-auto"
									/>
									<a href="https://www.sashido.io/en/" target="_blank" className="cursor-pointer">
									<img
										src={require("../../assets/Sponsors/sashido.png")}
										alt="sashido"
										className="w-36 h-auto"
										
									/></a>
									<img src={JetLogo} alt="" className="w-28 h-auto" />
									<a href="https://www.taskade.com/" target="_blank" className="cursor-pointer">
									<img
										src={require("../../assets/Sponsors/premium/logo_taskade_black.png")}
										alt="taskade"
										className="w-28 h-auto"
										onclick="javascript:location.href='https://www.taskade.com/'"
									/></a>
									<a href="http://rosenfeldmedia.com/" target="_blank" className="cursor-pointer">
									<img
										src={require("../../assets/Sponsors/premium/rosenfeld-logo.png")}
										alt=""
										className="w-28 h-auto"
									/>
									</a>
									<img
										src={require("../../assets/Sponsors/premium/interviewCake.png")}
										alt=""
										className="w-28 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/premium/streamYard.png")}
										alt=""
										className="w-28 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/premium/balsamiq.png")}
										alt=""
										className="w-36 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/premium/oreilly.png")}
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
									<img
										src={require("../../assets/Sponsors/chitkara.jpg")}
										alt="chitkara"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/gietu.jpg")}
										alt="gietu"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/kalindi.jpg")}
										alt="kalindi"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/kanpur.jpg")}
										alt="kanpur"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/maharishi.jpg")}
										alt="maharishi"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/peshawar.jpg")}
										alt="peshawar"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/ropar.jpg")}
										alt="ropar"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/srinix.jpg")}
										alt="ropar"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/jalandhar.jpg")}
										alt="jalandhar"
										className="w-32 h-auto rounded-md"
									/>
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
										src={require("../../assets/Sponsors/replit.png")}
										alt=""
										className="w-36 h-auto"
									/>
									<img src={DGOcean} alt="" className="w-28 h-auto" />
									<img
										src={require("../../assets/Sponsors/premium/wolfram.png")}
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
									<a href="https://www.sashido.io/en/" target="_blank" className="cursor-pointer">
									<img
										src={require("../../assets/Sponsors/sashido.png")}
										alt="sashido"
										className="w-36 h-auto"
										
									/></a>
									<img src={JetLogo} alt="" className="w-28 h-auto" />
									<a href="https://www.taskade.com/" target="_blank" className="cursor-pointer">			
		  						   <img
										src={require("../../assets/Sponsors/premium/logo_taskade_black.png")}
										alt=""
										className="w-28 h-auto"
									/>
									</a>
									<a href="http://rosenfeldmedia.com/" target="_blank" className="cursor-pointer">
									<img
										src={require("../../assets/Sponsors/premium/rosenfeld-logo.png")}
										alt=""
										className="w-28 h-auto"
									/>
									</a>
									<img
										src={require("../../assets/Sponsors/premium/interviewCake.png")}
										alt=""
										className="w-28 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/premium/streamYard.png")}
										alt=""
										className="w-28 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/premium/balsamiq.png")}
										alt=""
										className="w-36 h-auto"
									/>
									<img
										src={require("../../assets/Sponsors/premium/oreilly.png")}
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
									<img
										src={require("../../assets/Sponsors/chitkara.jpg")}
										alt="chitkara"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/gietu.jpg")}
										alt="gietu"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/kalindi.jpg")}
										alt="kalindi"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/kanpur.jpg")}
										alt="kanpur"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/maharishi.jpg")}
										alt="maharishi"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/peshawar.jpg")}
										alt="peshawar"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/ropar.jpg")}
										alt="ropar"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/srinix.jpg")}
										alt="ropar"
										className="w-32 h-auto rounded-md"
									/>
									<img
										src={require("../../assets/Sponsors/jalandhar.jpg")}
										alt="jalandhar"
										className="w-32 h-auto rounded-md"
									/>
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
