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
	const [email, setEmail] = useState("");
	const [participation, setParticipation] = useState("");
	const handleClick = () => {
		axios
			.post("http://localhost:9000/formSubmit", {
				fName,
				lName,
				phone,
				gender,
				year,
				school,
				email,
				participation,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
			setFName("");
			setLName("");
			setPhone("");
			setGender("");
			setYear("");
			setSchool("");
			setEmail("");
			setParticipation("");
		/* console.log("button clicked"); */
	};
	return props.trigger ? (
		<section id="form" className="z-50">
			<div className="grid grid-cols-12  max-h-[calc(100vh-10%)] h-screen overflow-y-scroll w-96 max-w-[100vw - 40%]">
				<div className="col-span-12  bg-cover formBg h-fit p-10 max-w-[100vw-40%]">
					<div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 mt-1 2xl:mt-32 xl:mt-10 lg:mt-1 md:mt-1 sm:mt-1 xs:mt-1 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-10 sm:ml-1 xs:ml-1 2xl:gap-x-16 xl:gap-x-16 lg:gap-x-16 md:gap-x-8 sm:gap-x-2 xs:gap-x-1 gap-x-2">
						<div className="col-span-2">
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
									PHONE NUMBER
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
									className="text-black w-full p-2 bg-transparent border-2 border-[#d9d9d9]outline-none"
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

							<div className="label mt-6">
								<label id="email" className=" ">
									EMAIL
								</label>
							</div>
							<div className="inputLname mt-2">
								<input
									type="email"
									className="w-full outline-none text-white p-2 bg-transparent border-[#d9d9d9] border-2 rounded-xl"
									name="email"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="label mt-6">
								<label id="gender" className=" ">
									Participation
								</label>
							</div>
							<div className="inputLname mt-2">
								<select
									name="participation"
									id="participation"
									className="text-black w-full p-2 bg-transparent border-2 border-[#d9d9d9]outline-none"
									onChange={(e) => setParticipation(e.target.value)}
								>
									<option value=""></option>
									<option value="Solo">Individual</option>
									<option value="Teammate">Teammate</option>
								</select>
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
