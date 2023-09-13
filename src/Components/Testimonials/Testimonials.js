import { react, useState } from 'react';

import './Testimonials.css'
import { testimonialsData } from '../../../src/data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

export default function Testimonials() {

    const [selected, setselected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = { type: 'spring', duration: 3 };
    return (
        <div className="Testimonials" id='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>Say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}>
                    {testimonialsData[selected].review}
                </motion.span>

                <span>
                    <span style={{ color: 'var(--orange' }}>
                        {testimonialsData[selected].name}
                    </span>
                    - {testimonialsData[selected].status}
                </span>

            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>

                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}

                    src={testimonialsData[selected].image} alt=""></motion.img>

                <div className="arrows">
                    <img src={leftArrow} alt=""
                        onClick={() => {
                            selected === 0 ?
                                setselected(tLength - 1) :
                                setselected((prev) => prev - 1)
                        }}></img>
                    <img src={rightArrow} alt=""
                        onClick={() => {
                            selected === tLength - 1 ?
                                setselected(0) :
                                setselected((prev) => prev + 1)
                        }}></img>
                </div>
            </div>
        </div>
    )
}