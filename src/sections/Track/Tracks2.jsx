import React from "react";

function Tracks2() {
    return (
        <div
            id="Tracks"
            className="bg-no-repeat bg-contain grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full xl:h-[84%] lg:h-[84%] bg-slate-900 bg-fixed p-6 lg:mt-[-80px]"
        >
            <div className="flex flex-col justify-center items-center">
                <div className="p-2 flex flex-col justify-center items-center">
                    <div className="md:w-full lg:w-[88%] h-full flex flex-col justify-center items-center text-white bg-transparent  cursor-pointer space-y-4 ">
                        <h1 className="mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text text-center">
                            Tracks
                        </h1>
                        <p className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] w-[94%] lg:w-full p-4 lg:p-0 text-center font-normal">
                            As the name suggests, Octahacks comprises 8 themes or impact areas to
                            help spark your ideas. Remember that you're welcome to build the
                            prototype with the technologies of your choice, so feel free to use
                            any technology and think outside the box too!!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pr-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full h-full  items-center px-2 py-5 gap-2">

                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img className='rounded-xl' src={require("../../assets/Tracks_1.png")} alt='image1' />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Smart City
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Smart Cities is a space in which developers,
                            entrepreneurs, designers, professors,
                            researchers and persons interested in
                            making their city a better place can gather
                            to build in a collaboratively fashion a
                            solution that makes our city more efficient
                            and intelligent.
                        </p>
                    </div>


                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img className='rounded-xl' src={require("../../assets/Tracks_2.png")} alt='image1' />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Security
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Security-related issues are growing. The
                            programs for public safety lack and also
                            the increased use of automated
                            technologies is also driving an increase in
                            the advancement of the need for proper
                            security systems.
                        </p>
                    </div>


                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img className='rounded-xl' src={require("../../assets/Tracks_3.png")} alt='image1' />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Fintech
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            From mobile payments to internet
                            banking, an increased number of
                            consumers are adopting fintech solutions
                            today, and therefore there are a lot of
                            exciting career options in this space.
                        </p>
                    </div>


                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img className='rounded-xl' src={require("../../assets/Tracks_4.png")} alt='image1' />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Health
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            The increase in patients has led to the
                            decrease in the relative number of doctors
                            per patient which results in a vicous cycle
                            where ignored or delayed diagnostics of an
                            ailment makes the patient more
                            dependent on doctor's check-up. Some
                            also cannot afford to visit a doctor.
                        </p>
                    </div>


                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img className='rounded-xl' src={require("../../assets/Tracks_6.png")} alt='image1' />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Woman security
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Everything you know about Women Safety
                            is set to change. From self-driving cars to
                            ride-hailing to micro-mobility, we are in the
                            process of completely reinventing how
                            people move. And while we do know that
                            everything is about to change, we still
                            need to figure out how.
                        </p>
                    </div>


                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img className='rounded-xl' src={require("../../assets/Tracks_5.png")} alt='image1' />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            Business
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            As technology is evolving, Business are
                            accelerating their investments in
                            innovation and digital advancements.
                            Today, in this fast trending world, many
                            innovative ideas have turned into
                            significant business adventures. Here, we
                            are looking forward to our next Facebook,
                            Uber or Zomato.
                        </p>
                    </div>


                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img className='rounded-xl' src={require("../../assets/Tracks_7.png")} alt='image1' />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                        Environment
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                        We are advancing in technology at a very
                            rapid rate. But this development has made
                            our nature suffer. It is considered more
                            important to expand cities than to save
                            trees.
                        </p>
                    </div>
                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img className='rounded-xl' src={require("../../assets/Tracks_8.png")} alt='image1' />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                        Education
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                        A large part of our population is still not
                            able to recieve proper education due to
                            lack of resources. Education is important
                            for everyone,but only a few have access to
                            it. Children of poor families tend to move
                            frequently, which disrupts their education.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tracks2;
