import React from 'react'

const Cards2 = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center pr-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full h-full  items-center px-2 py-5 gap-2">
                    <div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 rounded-[4px]">
                        <h2 className="text-xl  font-semibold p-[2%] text-center">
                            Winner
                        </h2>
                        <h1 className="text-[1.8rem] font-semibold text-center">
                            ₹ 15,000*
                        </h1>
                        <p className="text-[.6rem] lg:text-[.8rem] text-center">
                            + Goodies worth upto
                        </p>
                        <p>₹ 1 Lakh</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
                        <h2 className="text-xl font-semibold p-[2%] text-center">
                            1st Runner Up
                        </h2>
                        <h1 className="text-[1.8rem] font-semibold text-center">
                            ₹ 10,000*
                        </h1>
                        <p className="text-[.6rem] lg:text-[.8rem] text-center">
                            + Goodies worth upto
                        </p>
                        <p>₹ 75 Thousand</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
                        <h2 className="text-xl  font-semibold p-[2%] text-center">
                            2nd Runner Up
                        </h2>
                        <h1 className="text-[1.8rem] font-semibold text-center">
                            ₹ 5,000*
                        </h1>
                        <p className="text-[.6rem] lg:text-[.8rem] text-center">
                            + Goodies worth upto
                        </p>
                        <p>₹ 30 Thousand</p>
                    </div>
                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-4">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img
                                alt="imageSponsors"
                                src={require("../../assets/Sponsors/polygon.svg").default}
                            />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center font-regular">
                            ₹ 20,000* for best Dapp built on Tezos.
                        </p>
                        <p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center font-regular">
                            + Continuity grant opportunity up to 5,000 USD for an outstanding
                            project.
                        </p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-4">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img
                                alt="imageSponsors"
                                src={require("../../assets/Sponsors/tezos.svg").default}
                            />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            ₹ 20,000* for best Dapp built on Tezos.
                        </p>
                        <p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center font-regular">
                            + Continuity grant opportunity up to 5,000 USD for an outstanding
                            project.
                        </p>
                    </div>

                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
                        <h2 className="h-auto w-[35%] sm:w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
                            <img
                                alt="imageSponsors"
                                src={require("../../assets/Sponsors/celo.png")}
                            />
                        </h2>
                        <p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            ₹ 20,000* for best Dapp built on Tezos.
                        </p>
                        <p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
                            + Continuity grant opportunity up to 5,000 USD for an outstanding
                            project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards2
