import React from 'react'
import { Parallax } from 'react-parallax';
import image from '../img/banner.png'

const Paralax = () => {
    return (
        <div className='paralax'>
           
                <div className='paralaxBox'>                
                    <Parallax blur={0} bgClassName = 'paralaxImg' bgImage={"//live.staticflickr.com/65535/52396469814_c971084db8_h.jpg"} bgImageAlt="the cat" strength={200}>
                        <div className = 'paralaxBox1'></div>
                    </Parallax>
                </div>
         
        </div>
    )
}

export default Paralax