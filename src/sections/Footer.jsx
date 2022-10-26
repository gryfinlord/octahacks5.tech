import React from "react";
import "../assets/footer.css";
const Footer = () => {
	return (
		<div
			id="footer"
			className="bg-slate-900 bg-no-repeat bg-contain p-2 snap-start"
		>
			<div className="text-5xl lg:text-6xl xl:text-7xl text-center">
				Contact Us
			</div>

			<div className="footer_section font-azonix flex flex-row justify-between w-full h-full">
				<div class="footer_section_1 w-1/3">
					<div class="">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.chitkara.edu.in%2Fwp-content%2Fthemes%2Fchitkara%2Fimages%2FCU_logo.png&f=1&nofb=1&ipt=73285697f123d5332b2fc6459189124b501093459305c9bf57dee8acfe851f7b&ipo=images"
							alt="footer"
							class="h-[50px] mx-auto"
						/>
						<div>
							<h1 className="text-center text-white">
								About Chitkara University
							</h1>
							<p className="text-center text-white">
								Chitkara university is a private university located in
								Rajpura,Punjab, India. It offers undergraduate programs,
								post-graduate program and doctoral programs in fields of
								engineering, management, pharmacy, and education.
							</p>
						</div>
					</div>
				</div>
				<div class="footer_section_1 w-1/3">
					<div class="footer_section_1_content">
						<img
							src="https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/logo.png?raw=true"
							alt="logo"
							class="bg-slate-900"
						/>
						<div>
							<h1 className="text-center text-black">About Octahacks</h1>
							<p className="text-center text-black">
								This November, Octahacks is back with it's fourth edition,
								Octahacks 4.0. Expect more than 36 hours of inspiring panel
								discussions, empowering tech products, networking opportunities
								with budding developers and lots of fun!
							</p>
						</div>
					</div>
				</div>
				<div class="footer_section_2 md:w-1/3 w-full flex items-center justify-center">
					<div class="social_icons">
						<div className="flex items-center justify-center">
							<a href="https://www.instagram.com/gdsc_ciet/">
								<img
									alt="socials"
									src="https://img.icons8.com/ios-glyphs/40/ffffff/instagram-new.png"
								/>
							</a>
							<a href="https://www.linkedin.com/company/gdsc-ciet/mycompany/">
								<img
									alt="socials"
									src="https://img.icons8.com/ios-glyphs/40/ffffff/linkedin-circled.png"
								/>
							</a>

							<a href="https://github.com/DSC-ChitkaraUniv">
								<img
									src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png"
									alt="githublogo"
								/>
							</a>
							<a href="https://twitter.com/gdscciet">
								<img
									src="https://img.icons8.com/ios-glyphs/40/ffffff/twitter--v1.png"
									alt=""
									srcset=""
								/>
							</a>
						</div>
						<p class="text-left">
							For more updates,
							<br />
							follow us on all social media.
						</p>
					</div>
				</div>
			</div>
			<div class="footer_section_3">
				<p>Architected with ♥ by GDSC Core Team</p>
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
