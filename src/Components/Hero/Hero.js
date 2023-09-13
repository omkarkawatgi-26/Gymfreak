import React from 'react'
import './Hero.css'
import Header from '../../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import hearts from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'


const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                {/* header part */}

                <Header></Header>

                {/* best add component */}

                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: '238px' }}
                        whileInView={{ left: '9px' }}
                        transition={{ ...transition, type: 'tween' }}>
                    </motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                {/* hero-heading */}

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>

                    <div>
                        <span>Ideal Body</span>

                    </div>

                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>

                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140}
                                start={100}
                                delay={4}
                                preFix="+"></NumberCounter>
                        </span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span> <NumberCounter end={978}
                            start={938}
                            delay={4}
                            preFix="+"></NumberCounter></span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span> <NumberCounter end={50}
                            start={10}
                            delay={4}
                            preFix="+"></NumberCounter></span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/* {hero-button} */}
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={hearts}></img>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero-images */}
                <img src={hero_image} alt="" className="hero-image"></img>
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back"></motion.img>

                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories">
                    <img src={calories} alt=""></img>
                    <div>
                        <span>Calories Burned</span><span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
