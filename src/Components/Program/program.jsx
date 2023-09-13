import React from 'react'
import './program.css'
import { programsData } from '../../data/programsData'
import Rightarrow from '../../assets/rightArrow.png'

export default function program() {
    return (
        <div className="programs" id="programs">
            {/* header */}
            <div className="program-header">
                <span className="stroke-text">Explore Our </span>
                <span>Programs </span>
                <span className="stroke-text">To Shape You</span>
            </div>

            {/* {differet programs} */}
            <div className="program-categories">
                {programsData.map(program => {
                    return (
                        <div className="category">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>

                            <div className="join-now">
                                <span>Join Now</span>
                                <img src={Rightarrow}></img>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
