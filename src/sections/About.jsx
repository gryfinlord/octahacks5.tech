import React from "react";

const About = () => {
	return (
		<div className="flex flex-col bg-blend-saturation bg-fixed font-azonix justify-evenly items-center lg:flex-col  w-full h-full md:p-2 p-8 ">
			<div className="m-20 h-full w-full flex flex-col items-center justify-center gap-8">
			<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text text-center">
				About Us
			</h1>
			<div className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] md:w-3/4 p-4 text-center font-regular">
				<p>
					OctaHacks is the annual flagship event of GDSC, Chitkara University,
					where innovators get an opportunity to merge their creative ideas with
					their technical skills to build something exemplary. Expect more than
					36 hours of inspiring panel discussions, working and collaborating on
					futuristic and empowering tech products, networking opportunities.
				</p>
			</div>
			</div>
		</div>
	);
};

export default About;
