import React from "react";
import "../assets/footer.css";
const Footer = () => {
	return (
		<div
			id="footer"
			className="bg-no-repeat bg-contain p-2 pt-12 h-fit"
		>
			<h1 className="text-5xl lg:text-6xl xl:text-5xl font-semibold text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text ml-10">
				Contact Us
			</h1>

			<p className="contactUsSubText ml-10 font-medium">
				Octahacks has developed at a massive rate and positions for
				participants, mentors, judges and sponsorships are open now!
			</p>

			<div className="grid grid-cols-12 ml-10 mt-8">
				<div className="col-span-2"></div>
				<div className="col-span-12 2xl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 xs:col-span-12">
					<div className="grid grid-cols-12 mt-10">
						<div className="p-3 bg-[#2D3340] col-span-9 rounded-2xl">
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

					<div className="grid grid-cols-12 mt-10">
						<div className="p-3 bg-[#2D3340] col-span-9 rounded-2xl">
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

				<div className="col-span-12 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
					<img
						src={require("../assets/contactUsGuy.png")}
						alt=""
						className="mt-10 2xl:w-[60%] xl:w-[80%] lg:w-[90%]"
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