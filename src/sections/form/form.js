import React from "react";

export default function Form(props) {
	return props.trigger ? (
		<section id="form" className="h-screen z-50">
			<div className="grid grid-cols-12">
				<div className="col-span-12  bg-[length:100%_100%] formBg h-fit w-fit p-10">
					<div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-32 ml-10 gap-x-16">
						<div className="col-span-1">
							<div className="label">
								<label id="fname" className="text-white ">
									FIRST NAME
								</label>
							</div>
							<div className="inputFname mt-2">
								<input
									type="text"
									className="w-full outline-none text-white p-2 bg-transparent border-[#d9d9d9] border-2 rounded-xl"
									name="fname"
								/>
							</div>

							<div className="label mt-6">
								<label id="lname" className=" ">
									LAST NAME
								</label>
							</div>
							<div className="inputLname mt-2">
								<input
									type="text"
									className="w-full outline-none text-white p-2 bg-transparent border-[#d9d9d9] border-2 rounded-xl"
									name="lname"
								/>
							</div>

							<div className="label mt-6">
								<label id="phone" className=" ">
									PHONE NUMBER (OPTIONAL)
								</label>
							</div>
							<div className="inputLname mt-2">
								<input
									type="text"
									className="w-full outline-none text-white p-2 bg-transparent border-[#d9d9d9] border-2 rounded-xl"
									name="phone"
								/>
							</div>

							<div className="label mt-6">
								<label id="gender" className=" ">
									GENDER
								</label>
							</div>
							<div className="inputLname mt-2">
								<select
									name=""
									id="gender"
									className="text-white w-full p-2 bg-transparent border-2 border-[#d9d9d9]outline-none"
								>
									<option value=""></option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Others">Others</option>
								</select>
							</div>

							<div className="label mt-6">
								<label id="gradYear" className=" ">
									YEAR OF GRADUATION
								</label>
							</div>
							<div className="inputGrad">
								<input
									type="text"
									className="w-full outline-none text-white p-2 bg-transparent border-[#d9d9d9] border-2 rounded-xl"
									name="gradYear"
								/>
							</div>

							<div className="label mt-6">
								<label id="school" className=" ">
									SCHOOL / COLLEGE
								</label>
							</div>
							<div className="inputSchool">
								<input
									type="text"
									className="w-full outline-none text-white p-2 bg-transparent border-[#d9d9d9] border-2 rounded-xl"
									name="school"
								/>
							</div>
						</div>

						<div className="col-span-1">
							<div className="label mt-6">
								<label id="school" className=" ">
									BIO
								</label>
							</div>
							<div className="inputBio mr-16">
								<textarea
									name="bio"
									id=""
									rows="5"
									className="bg-transparent text-white border-2 border-[#d9d9d9] rounded-lg w-full p-2"
								></textarea>
							</div>
						</div>
					</div>
					<button
						className="bg-transparent border-2 border-[#d9d9d9] mt-6 px-3 py-1 rounded-lg ml-10"
						type="submit"
					>
						SUBMIT
					</button>
					<button
						className="bg-transparent border-2 border-[#d9d9d9] mt-6 px-3 py-1 rounded-lg ml-10"
						onClick={() => props.setTrigger(false)}
					>
						Close
					</button>
					{props.children}
				</div>
			</div>
		</section>
	) : (
		""
	);
}
