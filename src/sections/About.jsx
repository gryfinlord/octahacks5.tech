import React from "react";

const About = () => {
	return (
		<div className="flex flex-col bg-slate-900 font-azonix justify-evenly items-center lg:flex-col  w-full h-screen md:p-2 p-8 snap-start">
			<div className="text-3xl lg:text-5xl xl:text-6xl font-normal text-transparent md:text-4xl lg:w-1/2 bg-clip-text  bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] text-center ">
				About Us
			</div>
			<div className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] md:w-3/4 p-4 text-center">
				<p>
					OctaHacks is the annual flagship event of GDSC, Chitkara University,
					where innovators get an opportunity to merge their creative ideas with
					their technical skills to build something exemplary. Expect more than
					36 hours of inspiring panel discussions, working and collaborating on
					futuristic and empowering tech products, networking opportunities.
				</p>
			</div>
		</div>
	);
};

export default About;
