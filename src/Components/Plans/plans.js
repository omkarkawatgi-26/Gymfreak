import React, { useState } from 'react'
import './plans.css'
import { plansData } from "../../data/plansData"
import whitetick from '../../assets/whiteTick.png'
import { useEffect } from 'react';

export default function Plans() {

    const [hover, sethover] = useState(false);
    const [curidx, setindex] = useState(-1);


    function handelhover(id) {
        if (id === -1) {
            sethover(false);
            setindex(-1);
        }
        else {
            sethover(true);
            setindex(id);
        }
    }

    useEffect(() => {
        console.log({ hover, curidx });
    }, [hover, curidx]);

    return (
        <div className="Plans-container" id='plans'>
            <div className="blur plans-blur1"></div>
            <div className="blur plans-blur2"></div>
            <div className="program-header" style={{ gap: "2rem" }}>
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITHUS</span>
            </div>
            <div className="Plans">
                {plansData.map((plan, index) => (
                    <div className="plan" key={index} onMouseEnter={() => handelhover(index)}
                        onMouseLeave={() => handelhover(-1)}>
                        {plan.icon(hover, index === curidx)}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whitetick}
                                    ></img>
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits</span>
                        </div>

                        <button className="bt">JOIN NOW</button>
                    </div>
                )
                )}
            </div>

        </div>
    )
}
