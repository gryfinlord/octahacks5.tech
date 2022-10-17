import React from 'react';

function Prizes() {
  return (
    <div id="prizes" className='min-h-screen bg-slate-900 bg-[url(https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/backVideo.gif?raw=true)] bg-no-repeat bg-contain grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full xl:h-[84%] lg:h-[84%] h-[88%] p-2'>
      <div className='flex flex-col justify-center items-center backdrop-blur-lg bg-black/30'>
        <div className='p-2 flex flex-col justify-center items-center lg:ml-4'>
          <div className='md:w-full lg:w-[88%] h-full flex flex-col justify-center items-center md:items-start text-white bg-transparent  cursor-pointer space-y-4 '>
            <h2 className='text-[1.2rem] lg:text-[1.3rem] xl:text-[1.6rem] font-medium'>
              'TECH IT EASY'
            </h2>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl font-normal text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text'>
              Prizes
            </h1>
            <p className='text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] font-light md:text-left text-center'>
              Just to incentivise your hard work and effort over those 36 hours
              we have prizes, cash rewards and more lined up for the top
              performers by our generous Sponsors. Swags and goodies are for
              everyone but for the ones with the most creative and innovative
              projects we have more lined up!!
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center backdrop-blur-lg bg-black/30'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full h-full  items-center px-2 py-5'>
          <div className='w-full h-full flex flex-col justify-center items-center text-white bg-transparent p-2 cursor-pointer border-2'>
            <h2 className='text-xl font-semibold p-[2%]'>Winner</h2>
            <h1 className='text-[2rem] font-black'>₹ 15,000 *</h1>
            <p className='text-[.5rem] lg:text-[.8rem]'>+Goodies worth upto</p>
            <p>₹ 1 Lakh</p>
          </div>
          <div className='w-full h-full flex flex-col justify-center items-center text-white bg-transparent p-2 cursor-pointer border-2'>
            <h2 className='text-xl font-semibold p-[2%]'>Winner</h2>
            <h1 className='text-[2rem] font-black'>₹ 15,000 *</h1>
            <p className='text-[.5rem] lg:text-[.8rem]'>+Goodies worth upto</p>
            <p>₹ 1 Lakh</p>
          </div>
          <div className='w-full h-full flex flex-col justify-center items-center text-white bg-transparent p-2 cursor-pointer border-2'>
            <h2 className='text-xl font-semibold p-[2%]'>Winner</h2>
            <h1 className='text-[2rem] font-black'>₹ 15,000 *</h1>
            <p className=' text-[.5rem] lg:text-[.8rem]'>+Goodies worth upto</p>
            <p>₹ 1 Lakh</p>
          </div>
          <div className='w-full h-full flex flex-col justify-center items-center text-white bg-transparent p-2 cursor-pointer border-2'>
            <h2 className='text-xl font-semibold p-[2%]'>Winner</h2>
            <h1 className='text-[2rem] font-black'>₹ 15,000 *</h1>
            <p className='text-[.5rem] lg:text-[.8rem]'>+Goodies worth upto</p>
            <p>₹ 1 Lakh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Prizes;
