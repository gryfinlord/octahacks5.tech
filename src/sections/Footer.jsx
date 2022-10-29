import React from "react";
import "../assets/footer.css";
const Footer = () => {
	return (
		<div
			id="footer"
			className="bg-no-repeat bg-contain p-2 snap-start"
		>
			 <div className="w-full  h-full flex flex-col justify-center items-center text-white bg-transparent cursor-pointer space-y-4 p-2 text-center">
				<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text text-center">
				Contact Us
				</h1>
				<p className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] md:w-3/4 p-4 text-center font-regular">
				Octahacks has developed at a massive rate and positions for
				participants, mentors, judges and sponsorships are open now!
				</p>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center ">
				
				<div className="flex flex-col items-center justify-center md:w-[60%] w-full">
					<div className="flex flex-col items-center justify-center py-6">
						<div className="p-3 bg-[#2D3340] w-[75%] sm:w-[50%] h-[75%] rounded-md">
							<p className="text-[22px]"> About Chitkara University</p>
							<div className="grid grid-cols-12 mt-1">
								<div className="col-span-3">
									<hr />
								</div>
								<div className="col-span-9"></div>
							</div>
							<p className="mt-2 text-[14px]">
								Chitkara University is a private university with a rating of A+
								by the presitigious NAAC and ranks in top 5% of HEIs. The
								University scored a Cummulative Grade Point Average(CGPA) of
								3.26 on a 4 point scale.
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center py-6">
						<div className="p-3 bg-[#2D3340] w-[75%] sm:w-[50%] h-[75%] rounded-md">
							<p className="text-[22px]"> About Octahacks 5.0</p>
							<div className="grid grid-cols-12 mt-1">
								<div className="col-span-3">
									<hr />
								</div>
								<div className="col-span-9"></div>
							</div>
							<p className="mt-2 text-[14px]">
								This November, Octahacks is back with it's fourth edition,
								octahacks 4.0. Expect more than 36 hours of inspiring panel
								discussions and networking opportunities with budding developers
								and lots of fun! We value the participation of each member and
								want all attendees to have an enjoyable and fulfilling
								experience.
							</p>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center p-6 w-full md:w-[40%] h-full">
					<img
						src={require("../assets/contactUsGuy.png")}
						alt=""
						className="w-[75%] h-[75%]  sm:w-[50%] sm:h-[50%] md:w-full md:h-full"
					/>
				</div>

				<div className="col-span-2"></div>
			</div>

			<div className="footer_section_3">
				<p className="">Architected with ♥ by GDSC Core Team</p>
				<img
					src={require("../assets/Sponsors/gdsc.png")}
					className="w-52"
					alt="gdsc"
				/>
			</div>
		</div>
	);
};

export default Footer;
