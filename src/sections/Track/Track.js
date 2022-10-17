import React from 'react'
import Cards from './Cards'
import Text from './Text'
import "./style.css"
import Cards1 from './Cards1'

const Tracks = () => {
    
    return (
        <div id='tracks' className='tracksContainer items-center flex max-w-[100vw] text-white bg-slate-900'>
            <Text/>
            {/* <Cards/> */}
            <Cards1 />
        </div>
    )
}

export default Tracks
