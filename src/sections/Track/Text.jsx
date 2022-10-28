import React from "react";
// p-24 mt-28
const Text = () => {
	return (
		<div className="textContainer flex-1 flex flex-col justify-center text-center">
			<div className="w-full  h-full flex flex-col justify-center items-center text-white bg-transparent cursor-pointer space-y-4 p-4 text-center">
				<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text text-center">
					Tracks
				</h1>
				<p className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] md:w-3/4 p-4 text-center font-regular">
					As the name suggests, Octahacks comprises 8 themes or impact areas to
					help spark your ideas. Remember that you're welcome to build the
					prototype with the technologies of your choice, so feel free to use
					any technology and think outside the box too!!
				</p>
			</div>
			<div className="p-6 h-full rounded-md  flex flex-row flex-wrap w-fit gap-8  text-center justify-center">
				{/* card1 */}
				<div className="p-5 rounded-lg  bg-slate-800 xl:basis-1/5 lg:basis-1/5 py-8  md:basis-1/3 sm:basis-1/3 xs:basis-full">
					<div className="lg:w-[100%] flex items-center justify-center gap-2 flex-col">
						<div className="">
							<p className="titlePara uppercase text-center">Smart City</p>
						</div>
						<p className="para text-center font-regular">
							Smart Cities is a space in which developers, entrepreneurs,
							designers, professors, researchers and persons interested in
							making their city a better place can gather to build in a
							collaboratively fashion a solution that makes our city more
							efficient and intelligent.
						</p>
						{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
					</div>
					<div className="md:flex-1 flex items-center justify-center">
						<img
							className="rounded-xl"
							src={require("../../assets/Tracks_1.png")}
							alt="image1"
						/>
					</div>
				</div>

				<div className="p-5 rounded-lg bg-slate-800 xl:basis-1/5 lg:basis-1/5 py-8  md:basis-1/3 sm:basis-1/3 xs:basis-full">
					<div className="md:w-[100%] flex items-center justify-center gap-2 flex-col p-1">
						<div className="">
							<p className="titlePara uppercase text-center">Security</p>
						</div>
						<p className="para text-center font-regular">
							Security-related issues are growing. The programs for public
							safety lack and also the increased use of automated technologies
							is also driving an increase in the advancement of the need for
							proper security systems.
						</p>
						{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
					</div>
					<div className="md:flex-1 flex items-center justify-center">
						<img
							className="rounded-xl md:pt-12"
							src={require("../../assets/Tracks_2.png")}
							alt="image1"
						/>
					</div>
				</div>

				<div className=" items-center p-5 rounded-lg  bg-slate-800 xl:basis-1/5 lg:basis-1/5 py-8 md:basis-1/3 sm:basis-1/3 xs:basis-full">
					<div className="md:w-[100%] flex items-center justify-center gap-2 flex-col">
						<div className="">
							<p className="titlePara uppercase text-center">Fintech</p>
						</div>
						<p className="para text-center font-regular">
							From mobile payments to internet banking, an increased number of
							consumers are adopting fintech solutions today, and therefore
							there are a lot of exciting career options in this space.
						</p>
						{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
					</div>
					<div className="md:flex-1 flex items-center justify-center">
						<img
							className="rounded-xl pt-12"
							src={require("../../assets/Tracks_3.png")}
							alt="image1"
						/>
					</div>
				</div>

				<div className="p-5 rounded-lg  bg-slate-800 xl:basis-1/5 lg:basis-1/5 py-8 md:basis-1/3 sm:basis-1/3 xs:basis-full">
					<div className="md:w-[100%] flex items-center justify-center gap-2 flex-col">
						<div className="">
							<p className="titlePara uppercase text-center">Health</p>
						</div>
						<p className="para text-center font-regular">
							The increase in patients has led to the decrease in the relative
							number of doctors per patient which results in a vicous cycle
							where ignored or delayed diagnostics of an ailment makes the
							patient more dependent on doctor's check-up. Some also cannot
							afford to visit a doctor.
						</p>
						{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
					</div>
					<div className="md:flex-1 flex items-center justify-center">
						<img
							className="rounded-xl pt-12 w-auto h-[210px]"
							src={require("../../assets/Tracks_4.png")}
							alt="image1"
						/>
					</div>
				</div>

				<div className="p-5 rounded-lg  bg-slate-800 xl:basis-1/5 lg:basis-1/5 py-8 md:basis-1/3 sm:basis-1/3 xs:basis-full">
					<div className="md:w-[100%] flex items-center justify-center gap-2 flex-col">
						<div className="">
							<p className="titlePara uppercase text-center">Business</p>
						</div>
						<p className="para text-center font-regular">
							As technology is evolving, Business are accelerating their
							investments in innovation and digital advancements. Today, in this
							fast trending world, many innovative ideas have turned into
							significant business adventures. Here, we are looking forward to
							our next Facebook, Uber or Zomato.
						</p>
						{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
					</div>
					<div className="md:flex-1 flex items-center justify-center">
						<img
							className="rounded-xl"
							src={require("../../assets/Tracks_5.png")}
							alt="image1"
						/>
					</div>
				</div>

				<div className=" p-5 rounded-lg  bg-slate-800 xl:basis-1/5 lg:basis-1/5 py-8 md:basis-1/3 sm:basis-1/3 xs:basis-full">
					<div className="md:w-[100%] flex items-center justify-center gap-2 flex-col">
						<div className="">
							<p className="titlePara uppercase text-center">Woman security</p>
						</div>
						<p className="para text-center font-regular">
							Everything you know about Women Safety is set to change. From
							self-driving cars to ride-hailing to micro-mobility, we are in the
							process of completely reinventing how people move. And while we do
							know that everything is about to change, we still need to figure
							out how.
						</p>
						{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
					</div>
					<div className="md:flex-1 flex items-center justify-center">
						<img
							className="rounded-xl pt-14"
							src={require("../../assets/Tracks_6.png")}
							alt="image1"
						/>
					</div>
				</div>

				<div className=" p-5 rounded-lg  bg-slate-800 xl:basis-1/5 lg:basis-1/5 py-8 md:basis-1/3 sm:basis-1/3 xs:basis-full">
					<div className="md:w-[100%] flex items-center justify-center gap-2 flex-col">
						<div className="">
							<p className="titlePara uppercase text-center">Environment</p>
						</div>
						<p className="para text-center font-regular">
							We are advancing in technology at a very rapid rate. But this
							development has made our nature suffer. It is considered more
							important to expand cities than to save trees.
						</p>
						{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
					</div>
					<div className="md:flex-1 flex items-center justify-center">
						<img
							className="rounded-xl pt-24"
							src={require("../../assets/Tracks_7.png")}
							alt="image1"
						/>
					</div>
				</div>

				<div className="p-5 rounded-lg  bg-slate-800 xl:basis-1/5 lg:basis-1/5 py-8 md:basis-1/3 sm:basis-1/3 xs:basis-full">
					<div className="md:w-[100%] flex items-center justify-center gap-2 flex-col">
						<div className="">
							<p className="titlePara uppercase text-center">Education</p>
						</div>
						<p className="para text-center font-regular">
							A large part of our population is still not able to recieve proper
							education due to lack of resources. Education is important for
							everyone,but only a few have access to it. Children of poor
							families tend to move frequently, which disrupts their education.
						</p>
						{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
					</div>
					<div className="flex-1 flex items-center justify-center">
						<img
							className="rounded-xl pt-24"
							src={require("../../assets/Tracks_8.png")}
							alt="image1"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Text;
