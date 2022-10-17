import React from 'react'

const Cards = () => {
    return (
        <div className='mainCards py-24 flex items-center justify-center'>
            <div className='cardsContainer border border-neutral-500 overflow-scroll'>
                {/* Cards 1  */}
                <div className='cards flex justify-center align-top'>
                    <div className="leftSection w-1/2 pt-9 pr-12 pb-11 pl-10">
                        <div className='safeDiv flex align-middle justify-start gap-24'>
                            <p className="titlePara">SMART CITY</p>
                            <p className="number">1</p>
                        </div>
                        <p className='para'>Smart Cities is a space in which developers,
                            entrepreneurs, designers, professors,
                            researchers and persons interested in
                            making their city a better place can gather
                            to build in a collaboratively fashion a
                            solution that makes our city more efficient
                            and intelligent.</p>
                        {/* <p className='para'> to safeguard meritocracy in</p>
                        <p className='para'>GameFi</p> */}
                    </div>
                    <div>
                        <img src={require("../../assets/safeguard.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 1 end  */}
                {/* Cards 2  */}
                <div className='cards flex  flex-row-reverse justify-center align-top'>
                    <div className="leftSection w-1/2 pt-9 pr-12 pb-11 pl-10">
                        <div className='safeDiv flex align-middle justify-start gap-28'>
                            <p className="titlePara">Security</p>
                            <p className="number">2</p>
                        </div>
                        <p className='para'>Security-related issues are growing. The
                            programs for public safety lack and also
                            the increased use of automated
                            technologies is also driving an increase in
                            the advancement of the need for proper
                            security systems.</p>
                            {/* <br/>
                            <br></br>
                            <br/> */}
                    </div>
                    <div className=''>
                        <img src={require("../../assets/safeguard.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 2 end  */}
                {/* Cards 3  */}
                <div className='cards flex justify-center align-top'>
                    <div className="leftSection w-1/2 pt-9 pr-12 pb-11 pl-10">
                        <div className='safeDiv flex align-middle justify-start gap-24'>
                            <p className="titlePara">fintech</p>
                            <p className="number">3</p>
                        </div>
                        <p className='para'>From mobile payments to internet
                            banking, an increased number of
                            consumers are adopting fintech solutions
                            today, and therefore there are a lot of
                            exciting career options in this space.</p>
                    </div>
                    <div>
                        <img src={require("../../assets/3rd.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 3 end  */}
                {/* Cards 4  */}
                <div className='cards flex revCard  flex-row-reverse justify-center align-top'>
                    <div className="leftSection w-1/2 pt-9 pr-12 pb-11 pl-10">
                        <div className='safeDiv flex align-middle justify-start gap-24'>
                            <p className="titlePara">health</p>
                            <p className="number">4</p>
                        </div>
                        <p className='para'>The increase in patients has led to the
                            decrease in the relative number of doctors
                            per patient which results in a vicous cycle
                            where ignored or delayed diagnostics of an
                            ailment makes the patient more
                            dependent on doctor's check-up. Some
                            also cannot afford to visit a doctor.</p>
                    </div>
                    <div>
                        <img src={require("../../assets/safeguard.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 4 end  */}
                {/* Cards 5  */}
                <div className='cards flex justify-center align-top'>
                    <div className="leftSection w-1/2 pt-9 pr-12 pb-11 pl-10">
                        <div className='safeDiv flex align-middle justify-start gap-24'>
                            <p className="titlePara">business</p>
                            <p className="number">5</p>
                        </div>
                        <p className='para'>As technology is evolving, Business are
                            accelerating their investments in
                            innovation and digital advancements.
                            Today, in this fast trending world, many
                            innovative ideas have turned into
                            significant business adventures. Here, we
                            are looking forward to our next Facebook,
                            Uber or Zomato.</p>
                    </div>
                    <div>
                        <img src={require("../../assets/3rd.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 5 end  */}
                {/* Cards 6  */}
                <div className='cards flex revCard  flex-row-reverse justify-center align-top'>
                    <div className="leftSection w-1/2 pt-9 pr-12 pb-11 pl-10">
                        <div className='safeDiv flex align-middle justify-start gap-24'>
                            <p className="titlePara">Woman security</p>
                            <p className="number">6</p>
                        </div>
                        <p className='para'>Everything you know about Women Safety
                            is set to change. From self-driving cars to
                            ride-hailing to micro-mobility, we are in the
                            process of completely reinventing how
                            people move. And while we do know that
                            everything is about to change, we still
                            need to figure out how.</p>
                    </div>
                    <div>
                        <img src={require("../../assets/safeguard.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 6 end  */}
                {/* Cards 7  */}
                <div className='cards flex justify-center align-top'>
                    <div className="leftSection w-1/2 pt-9 pr-12 pb-11 pl-10">
                        <div className='safeDiv flex align-middle justify-start gap-24'>
                            <p className="titlePara">Environment</p>
                            <p className="number">7</p>
                        </div>
                        <p className='para'>We are advancing in technology at a very
                            rapid rate. But this development has made
                            our nature suffer. It is considered more
                            important to expand cities than to save
                            trees.</p>
                    </div>
                    <div>
                        <img src={require("../../assets/3rd.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 7 end  */}
                {/* Cards 8  */}
                <div className='cards flex revCard  flex-row-reverse justify-center align-top'>
                    <div className="leftSection w-1/2 pt-9 pr-12 pb-11 pl-10">
                        <div className='safeDiv flex align-middle justify-start gap-24'>
                            <p className="titlePara">education</p>
                            <p className="number">8</p>
                        </div>
                        <p className='para'>A large part of our population is still not
                            able to recieve proper education due to
                            lack of resources. Education is important
                            for everyone,but only a few have access to
                            it. Children of poor families tend to move
                            frequently, which disrupts their education.</p>
                    </div>
                    <div>
                        <img src={require("../../assets/safeguard.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 8 end  */}
            </div>
        </div>
    )
}

export default Cards
