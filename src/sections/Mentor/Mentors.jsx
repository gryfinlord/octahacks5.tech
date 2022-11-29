import React from "react";
const Mentors = () => {
  return (
    <div
      id="mentors"
      className="min-h-screen bg-no-repeat bg-contain p-2 snap-start bg-slate-900"
    >
      <div className="text-white flex  justify-center items-center">
        <h1 className="font-bold text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text p-2 mt-4">
          Mentors
        </h1>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 xs:px-12 py-12 md:px-6 md:py-6 xl:px-12 xl:py-12 auto-rows-fr bg-slate-900">
      <div data-aos="flip-left" data-aos-easing="ease-in-sine" class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img class="object-fill mt-[-1rem] sm:mt-0  object-center  w-full h-auto" src={require("../../assets/mentor/shehdev.jpg")} alt="photo" />
                    </div>
                    <div class="text-center pt-8 pb-4 sm:py-6">
                        <p class="text-xl text-gray-700 font-bold mb-2">Sahdev Kharb</p>
                        <p class="text-md text-gray-500 font-semibold">QA Zscaler</p>
                    </div>
                    <div class="flex flex-row items-center justify-center gap-2 mb-4">
						<a href="https://www.linkedin.com/in/sahdev-kharb-369a72195/" class="">
							<img src={require("../../assets/linkedin.png")} class="w-7 h-7" alt="linkedin"/>
						</a>
						<a href="https://www.instagram.com/kharbsk31/" class="">
							<img src={require("../../assets/instagram.png")} class="w-7 h-7" alt="instagram"/>
						</a>

					</div>
                </div>
        <div data-aos="flip-left" data-aos-easing="ease-in-sine" class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img class="object-fill object-center  w-full h-auto" src={require("../../assets/mentor/2.jpg")} alt="photo"/>
                    </div>
                    <div class="text-center py-8 sm:py-6">
                        <p class="text-xl text-gray-700 font-bold mb-2">Sourav</p>
                        <p class="text-base text-gray-500 font-semibold">SRE Dunnhumby</p>
                    </div>
                    <div class="flex flex-row items-center justify-center gap-2 mb-4">
						<a href="https://www.linkedin.com/in/sourav-sourav-5aa882195/" class="">
							<img src={require("../../assets/linkedin.png")} class="w-7 h-7" alt="linkedin"/>
						</a>
						<a href="https://www.instagram.com/__lulzsec__/" class="">
							<img src={require("../../assets/instagram.png")} class="w-7 h-7" alt="instagram"/>
						</a>

					</div>
                </div>
        <div data-aos="flip-left" data-aos-easing="ease-in-sine" class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img class="object-fill object-center   h-auto w-full" src={require("../../assets/mentor/3.jpg")} alt="photo"/>
                    </div>
                    <div class="text-center py-8 sm:py-6">
                        <p class="text-xl text-gray-700 font-bold mb-2">Gautam Sood</p>
                        <p class="text-base text-gray-500 font-semibold">SDE Fidelity</p>
                    </div>
                    <div class="flex flex-row items-center justify-center gap-2 mb-4">
						<a href="https://www.linkedin.com/in/gautam-sood-55bb84232/" class="">
							<img src={require("../../assets/linkedin.png")} class="w-7 h-7" alt="linkedin"/>
						</a>
						<a href="https://www.instagram.com/gautamsood__/" class="">
							<img src={require("../../assets/instagram.png")} class="w-7 h-7" alt="instagram"/>
						</a>

					</div>
                </div>
        <div data-aos="flip-left" data-aos-easing="ease-in-sine" class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img class="object-fill object-center   h-auto w-full" src={require("../../assets/mentor/4.jpg")} alt="photo"/>
                    </div>
                    <div class="text-center py-8 sm:py-6">
                        <p class="text-xl text-gray-700 font-bold mb-2">Kartik Sharma</p>
                        <p class="text-base text-gray-500 font-semibold">Web Developer</p>
                    </div>
                    <div class="flex flex-row items-center justify-center gap-2 mb-4">
						<a href="https://www.linkedin.com/in/kartik-sharma-a5618b194/" class="">
							<img src={require("../../assets/linkedin.png")} class="w-7 h-7" alt="linkedin"/>
						</a>
						<a href="https://www.instagram.com/kartik.sharma.18" class="">
							<img src={require("../../assets/instagram.png")} class="w-7 h-7" alt="instagram"/>
						</a>
					</div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-in-sine" class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        {/* <img class="object-fill object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/> */}
                    </div>
                    {/* <div class="text-center py-8 sm:py-6">
                        <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                        <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                    </div> */}
                      <div className="text-black text-3xl w-full h-full text-center flex items-center justify-center">
            Coming Soon..
          </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-in-sine" class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        {/* <img class="object-fill object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/> */}
                    </div>
                    {/* <div class="text-center py-8 sm:py-6">
                        <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                        <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                    </div> */}
                    <div className="text-black text-3xl w-full h-full text-center flex items-center justify-center">
                        Coming Soon..
          </div>
                </div>
      </div>
    </div>
  );
};

export default Mentors;
