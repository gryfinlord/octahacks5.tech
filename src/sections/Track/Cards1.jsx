import React from "react";

const Cards1 = () => {
	return (
		<div className='md:flex-1 '>
			<div className='md:space-y-8 space-y-3 md:mx-7 mx-2 my-4 bg-slate-900 px-4 py-6 h-[90vh] rounded-md overflow-y-hidden'>
				{/* <div className='scroll  md:space-y-8 space-y-3 md:mx-7 mx-2 my-4 bg-slate-900 px-4 py-6 rounded-md'> */}
				{/* card1 */}
				<div className='flex-col text-center items-center justify-center p-6 relative flex overflow-y-hidden group'>
					<div className='animate-marqueeT group-hover:pause'>
						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%] '>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Smart City</p>
									<p className='number'>1</p>
								</div>
								<p className='para'>
									Smart Cities is a space in which developers, entrepreneurs,
									designers, professors, researchers and persons interested in
									making their city a better place can gather to build in a
									collaboratively fashion a solution that makes our city more
									efficient and intelligent.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                                <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_1.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Security</p>
									<p className='number'>2</p>
								</div>
								<p className='para'>
									Security-related issues are growing. The programs for public
									safety lack and also the increased use of automated
									technologies is also driving an increase in the advancement of
									the need for proper security systems.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_2.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Fintech</p>
									<p className='number'>3</p>
								</div>
								<p className='para'>
									From mobile payments to internet banking, an increased number
									of consumers are adopting fintech solutions today, and
									therefore there are a lot of exciting career options in this
									space.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_3.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Health</p>
									<p className='number'>4</p>
								</div>
								<p className='para'>
									The increase in patients has led to the decrease in the
									relative number of doctors per patient which results in a
									vicous cycle where ignored or delayed diagnostics of an
									ailment makes the patient more dependent on doctor's check-up.
									Some also cannot afford to visit a doctor.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									style={{ marginRight: "0px" }}
									src={require("../../assets/Tracks_4.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Business</p>
									<p className='number'>5</p>
								</div>
								<p className='para'>
									As technology is evolving, Business are accelerating their
									investments in innovation and digital advancements. Today, in
									this fast trending world, many innovative ideas have turned
									into significant business adventures. Here, we are looking
									forward to our next Facebook, Uber or Zomato.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_5.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Woman security</p>
									<p className='number'>6</p>
								</div>
								<p className='para'>
									Everything you know about Women Safety is set to change. From
									self-driving cars to ride-hailing to micro-mobility, we are in
									the process of completely reinventing how people move. And
									while we do know that everything is about to change, we still
									need to figure out how.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_6.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Environment</p>
									<p className='number'>7</p>
								</div>
								<p className='para'>
									We are advancing in technology at a very rapid rate. But this
									development has made our nature suffer. It is considered more
									important to expand cities than to save trees.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_7.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Education</p>
									<p className='number'>8</p>
								</div>
								<p className='para'>
									A large part of our population is still not able to recieve
									proper education due to lack of resources. Education is
									important for everyone,but only a few have access to it.
									Children of poor families tend to move frequently, which
									disrupts their education.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_8.png")}
									alt='image1'
								/>
							</div>
						</div>
					</div>
					<div className='absolute whitespace-normal px-6 animate-marqueeT2  group-hover:pause'>
						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%] '>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Smart City</p>
									<p className='number'>1</p>
								</div>
								<p className='para'>
									Smart Cities is a space in which developers, entrepreneurs,
									designers, professors, researchers and persons interested in
									making their city a better place can gather to build in a
									collaboratively fashion a solution that makes our city more
									efficient and intelligent.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_1.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Security</p>
									<p className='number'>2</p>
								</div>
								<p className='para'>
									Security-related issues are growing. The programs for public
									safety lack and also the increased use of automated
									technologies is also driving an increase in the advancement of
									the need for proper security systems.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_2.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Fintech</p>
									<p className='number'>3</p>
								</div>
								<p className='para'>
									From mobile payments to internet banking, an increased number
									of consumers are adopting fintech solutions today, and
									therefore there are a lot of exciting career options in this
									space.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_3.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Health</p>
									<p className='number'>4</p>
								</div>
								<p className='para'>
									The increase in patients has led to the decrease in the
									relative number of doctors per patient which results in a
									vicous cycle where ignored or delayed diagnostics of an
									ailment makes the patient more dependent on doctor's check-up.
									Some also cannot afford to visit a doctor.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									style={{ marginRight: "0px" }}
									src={require("../../assets/Tracks_4.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Business</p>
									<p className='number'>5</p>
								</div>
								<p className='para'>
									As technology is evolving, Business are accelerating their
									investments in innovation and digital advancements. Today, in
									this fast trending world, many innovative ideas have turned
									into significant business adventures. Here, we are looking
									forward to our next Facebook, Uber or Zomato.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_5.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Woman security</p>
									<p className='number'>6</p>
								</div>
								<p className='para'>
									Everything you know about Women Safety is set to change. From
									self-driving cars to ride-hailing to micro-mobility, we are in
									the process of completely reinventing how people move. And
									while we do know that everything is about to change, we still
									need to figure out how.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_6.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Environment</p>
									<p className='number'>7</p>
								</div>
								<p className='para'>
									We are advancing in technology at a very rapid rate. But this
									development has made our nature suffer. It is considered more
									important to expand cities than to save trees.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                    <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_7.png")}
									alt='image1'
								/>
							</div>
						</div>

						<div className='flex flex-col md:flex-row justify-evenly md:space-x-4 space-y-8 md:space-y-0 items-center p-5 rounded-xl  bg-slate-800 bg-opacity-60 border border-gray-200'>
							<div className='md:w-[55%]'>
								<div className='flex flex-row justify-between items-center'>
									<p className='titlePara'>Education</p>
									<p className='number'>8</p>
								</div>
								<p className='para'>
									A large part of our population is still not able to recieve
									proper education due to lack of resources. Education is
									important for everyone,but only a few have access to it.
									Children of poor families tend to move frequently, which
									disrupts their education.
								</p>
								{/* <p className='para'> to safeguard meritocracy in</p>
                   				 <p className='para'>GameFi</p> */}
							</div>
							<div className='lg:flex-1 lg:w-[45%] flex items-center justify-center'>
								<img
									className='rounded-xl'
									src={require("../../assets/Tracks_8.png")}
									alt='image1'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards1;
