import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Form(props) {
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [phone, setPhone] = useState("");
	const [gender, setGender] = useState("");
	const [year, setYear] = useState("");
	const [school, setSchool] = useState("");
	const [bio, setBio] = useState("");
	const handleClick = () => {
		axios
			.post("http://localhost:9000/formSubmit", {
				fName,
				lName,
				phone,
				gender,
				year,
				school,
				bio,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		/* console.log("button clicked"); */
	};
	return props.trigger ? (
		<section id="form" className="z-50">
			<div className="grid grid-cols-12  max-h-[calc(100vh-10%)] h-screen overflow-y-scroll">
				<div className="col-span-12  bg-cover formBg h-fit w-fit p-10">
					<div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 mt-1 2xl:mt-32 xl:mt-32 lg:mt md:mt-1 sm:mt-1 xs:mt-1 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-10 sm:ml-1 xs:ml-1 2xl:gap-x-16 xl:gap-x-16 lg:gap-x-16 md:gap-x-8 sm:gap-x-2 xs:gap-x-1 gap-x-2">
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
									onChange={(e) => setFName(e.target.value)}
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
									onChange={(e) => setLName(e.target.value)}
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
									onChange={(e) => setPhone(e.target.value)}
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
									onChange={(e) => setGender(e.target.value)}
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
									onChange={(e) => setYear(e.target.value)}
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
									onChange={(e) => setSchool(e.target.value)}
								/>
							</div>
						</div>

						<div className="col-span-1">
							<div className="label mt-6">
								<label id="school" className=" ">
									BIO
								</label>
							</div>
							<div className="inputBio 2xl:mr-16 xl:mr-16 lg:mr-16 md:mr-8 sm:mr-2 xs:mr-2 mr-0">
								<textarea
									name="bio"
									id=""
									rows="5"
									className="bg-transparent text-white border-2 border-[#d9d9d9] rounded-lg w-full p-2"
									onChange={(e) => setBio(e.target.value)}
								></textarea>
							</div>
						</div>
					</div>
					<button
						onClick={handleClick}
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
