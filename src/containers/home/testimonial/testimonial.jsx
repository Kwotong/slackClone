import React from 'react';
import './testimonial.css'
import arrow from '../../../assets/lSBmc7tyNDRW9.svg';
import IBM from '../../../assets/IBM_08.mp4';

function Testimonial () {
    return(
        <div className='slack__testimonial'>
            <div className='slack__testimonial-top'>
                <div className='slack__testimonial-video'>
                    <video src={IBM} />
                </div>
                <div className='slack__testimonial-content'>
                    <p className='slack__testimonial-text'>“Whether you’re a small or large organization, executing anything from a discrete modernization program to a digital transformation initiative, Slack is an incredibly powerful tool in the hybrid world.”</p>
                    <p className='slack__testimonial-name'>Jennifer Quinlan</p>
                    <p className='slack__testimonial-role'>Managing Partner, IBM iX Americas Leader - Customer and Experience Transformation, IBM</p>
                    <div className='slack__testimonial-readmore'>
                        <p>See more customer stories</p>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
            </div>
            <p className='slack__testimonial-bottom_text'>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the U.S., UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
        </div>
    )
}

export default Testimonial;