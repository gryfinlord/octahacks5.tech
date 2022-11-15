import React from "react";

const About = () => {
	return (
		<div className="flex flex-col md:justify-between items-center lg:flex-row  w-full p-4 xs:p-10 sm:p-16  lg:p-12 gap-2 lg:h-[80vh] bg-slate-900" id="about">
			<div className="text-3xl lg:text-5xl xl:text-6xl font-bold text-transparent md:text-4xl lg:w-1/2 bg-clip-text  bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] text-center lg:text-start mt-6 lg:mt-0">
				About Us
			</div>
			<div className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem]  p-4 text-center lg:text-start lg:w-3/4 font-medium">
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
