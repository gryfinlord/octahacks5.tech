import React from "react";
const Landing = () => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<div
			id="home"
			className=" flex relative flex-col flex-1 snap-start h-screen"
		>
			<div className="w-full h-fit  bg-[black]">
				<nav className="relative px-4 py-4 flex justify-between items-center">
					<div className="flex items-center justify-center w-28 h-full ml-2">
						<a className="text-3xl font-bold leading-none" href="#!">
							<img
								src="https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/logo.png?raw=true"
								class="w-52 h-auto"
								alt="gdsc"
							/>
						</a>
					</div>
					<div className="lg:hidden">
						<button
							className="navbar-burger flex items-center text-mainColor p-3"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg
								className="block h-4 w-4 fill-current"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Mobile menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
							</svg>
						</button>
					</div>
					<div className="hidden lg:flex  lg:items-center lg:w-auto">
						<ul className="lg:flex lg:mx-2 lg:my-2 lg:items-center lg:w-auto lg:space-x-4 xl:space-x-6">
								<li className="">
									<a
										className="block p-2 text-md  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#home"
									>
										Home
									</a>
								</li>
								<li className="">
									<a
										className="block p-2 text-md  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#tracks"
									>
										Tracks
									</a>
								</li>
								<li className="">
									<a
										className="block p-2 text-md  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#prizes"
									>
										Prizes
									</a>
								</li>
								<li className="">
									<a
										className="block p-2 text-md  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#sponsers"
									>
										Sponsors
									</a>
								</li>
								<li className="">
									<a
										className="block p-2 text-md  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#judges"
									>
										Judges
									</a>
								</li>
								<li className="">
									<a
										className="block p-2 text-md  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#mentors"
									>
										Mentor
									</a>
								</li>
								<li className="">
									<a
										className="block p-2 text-md  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#footer"
									>
										Contact
									</a>
								</li>
						</ul>
					</div>
					<div className="hidden lg:flex items-center justify-center">
						<a
							className="hidden lg:inline-block lg:ml-auto text-sm font-bold  transition duration-200"
							href="#!"
						>
							<img
								src={require("../../assets/Sponsors/gdsc.png")}
								className="w-52"
								alt="gdsc"
							/>
						</a>
					</div>
				</nav>
				<div
					className={
						"navbar-menu relative z-50 lg:hidden" +
						(navbarOpen ? " flex" : " hidden")
					}
				>
					<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
					<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto">
						<div className="flex items-center mb-8">
							<a className="mr-auto text-3xl font-bold leading-none" href="#!">
								<img
									src="https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/logo.png?raw=true"
									alt="gdsc"
									className="w-auto h-12"
								/>
							</a>
							<button
								className="navbar-close"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<svg
									className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							</button>
						</div>
						<div>
							<ul>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#!"
									>
										Home
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#home"
									>
										Overview
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#tracks"
									>
										Tracks
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#prizes"
									>
										Prizes
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#sponsers"
									>
										Sponsors
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#judges"
									>
										Judges
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#mentors"
									>
										Mentor
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#about"
									>
										Our Team
									</a>
								</li>
								<li className="mb-1">
									<a
										className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
										href="#footer"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
			<div className="sm:ml-[5%] flex relative flex-row flex-1 h-full">
			<div
				className="w-full h-full flex flex-col justify-center backdrop-blur-lg bg-black/30"
			>
				<div className="w-2/3 text-md p-1 xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
					<p>"TECH IT EASY"</p>
				</div>

				<div className="w-full text-4xl p-2 xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl xs:text-5xl">
					<p className="w-full h-full p-1">
						Octahacks <br /> 5.0
					</p>
				</div>
				<div className="w-2/12 h-[1px] bg-white rounded-lg my-8 mx-4 border-white border-2"></div>

				<button className="p-2 group w-1/3 flex items-center justify-around  sm:text-sm md:text-md lg:text-xl mx-1">
					Apply With Devfolio
					<span className="flex group-hover:-inset-x-2 items-center relative text-2xl transition-all duration-150">
						<span className="z-10"> &rarr;</span>
						<div className="w-6 h-6 absolute border border-blue-400 left-3 group-hover:bg-blue-500  transition-all ease-in duration-150"></div>
					</span>
				</button>
				
			</div>
			<div className="flex-col justify-center sm:flex hidden">
				<img
					alt="socials"
					className="p-1"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/instagram-new.png"
				/>
				<img
					alt="socials"
					className="p-1"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/twitter--v1.png"
				/>
				<img
					alt="socials"
					className="p-1"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/linkedin-circled.png"
				/>
				<img
					alt="socials"
					className="p-1"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png"
				/>
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
	);
};

export default Landing;
