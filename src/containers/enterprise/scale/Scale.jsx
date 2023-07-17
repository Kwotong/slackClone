import React from 'react';
import check from '../../../assets/check.svg';
import arrow from '../../../assets/lSBmc7tyNDRW9.svg';
import fox from '../../../assets/fox.png';
import scale from '../../../assets/scale.jpeg';

function Scale () {

    const scaleData = ['Get peace of mind with 99.99% uptime SLA', 'Customize Slack to your business with unlimited workspaces and channels', 'Govern all your users and teams from a single place']

    return (
        <div className='enterprise__scale section__padding'>
            <div className='enterprise__scale-content'>
                <h4>scale</h4>
                <h2>Created to meet the needs of global organizations</h2>
                {
                    scaleData.map((text, index) => {
                        return (
                        <div className='enterprise__scale-details' key={index}>
                            <div className='enterprise__scale-tick'>
                                <img src={check} alt='tick' />
                            </div>
                            <p>{text}</p>
                        </div>
                        )
                    })
                }
                <div className='enterprise__scale-readmore'>
                    <p>Learn more about Slack at scale</p>
                    <img src={arrow} alt='arrow img' />
                </div>
                <p className='enterprise__scale-quote'>“Slack has been the hammer that has helped us tear down the walls of silos. It has enabled us to position Slack as the operating system of collaboration across 194 countries and 171 offices, pulling us together like nothing else has.”</p>
                <img src={fox} alt='fox img' />
                <p><span>Jeff Dow</span>, Executive Vice President, Media and Broadcast Operations</p>
            </div>
            <div className='enterprise__scale-img'>
                <img src={scale} alt='scale img' />
            </div>
        </div>
    )
}

export default Scale;