import React from "react";
const Landing = () => {
	return (
		<div
			id="home"
			className="flex relative flex-row flex-1 h-screen  bg-gif   bg-no-repeat bg-cover bg-center"
			
		>
			<div
				className="w-full h-full min-h-screen flex flex-col justify-center backdrop-blur-lg bg-black/30 items-center lg:items-start
      font-extrabold font-azonix "
			>
				<div className="w-2/3 text-md p-1 xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-center lg:text-start">
					<p>"TECH IT EASY"</p>
				</div>

				<div className="w-full text-4xl p-2 xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl xs:text-5xl text-center lg:text-start">
					<p className="w-full h-full p-1">
						Octahacks <br /> 5.0
					</p>
				</div>
				<div className="w-2/12 h-[1px] bg-white rounded-lg my-8 mx-4 border-white border-2"></div>
                <div className="flex items-center flex-col lg:flex-row justify-center gap-7 w-[75%] md:w-1/2 lg:w-[75%] xl:w-1/2 p-4 m-1">
					
				<button className="p-2  w-full flex items-center justify-center gap-4 text-sm md:text-md lg:text-lg  font-semibold border-2 border-blue-700">
					Apply With Devfolio
					
				</button>
				<button className="p-2 w-full flex items-center  justify-center gap-4 text-sm md:text-md lg:text-lg font-semibold border-violet-700 border-2">
					Join Discord
					
				</button>
				
				</div>
			</div>
			<div className="flex-col justify-center item-center flex absolute right-6 xs:right-6 sm:right-8 md:right-10 lg:right-12 xl:right-14 gap-[1px] bottom-4">
				<img
					alt="socials"
					className="p-1 h-8 w-8"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/instagram-new.png"
				/>
				<img
					alt="socials"
					className="p-1 h-8 w-8"
					src="https://img.icons8.com/ios-glyphs/40/ffffff/discord--v1.png"
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
	);
};

export default Landing;
