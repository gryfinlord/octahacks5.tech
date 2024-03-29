import React from "react";
// p-24 mt-28
const Text = () => {
	return (
		<div className="textContainer flex-1 flex flex-col md:gap-10 justify-center text-center">
			<div className="w-full  h-full flex flex-col justify-center items-center lg:items-start text-white bg-transparent cursor-pointer space-y-4 p-4 text-center">
				<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text text-center mt-4">
					Tracks
				</h1>
				<p className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] md:w-[90%] p-4 lg:text-start text-center font-normal">
					As the name suggests, Octahacks comprises 8 themes or impact areas to
					help spark your ideas. Remember that you're welcome to build the
					prototype with the technologies of your choice, so feel free to use
					any technology and think outside the box too!!
				</p>
			</div>
		</div>
	);
};

export default Text;
