import React from 'react';
import './feature.css';
import video1 from '../../assets/speed.webm';
import video2 from '../../assets/flexibility.webm';
import video3 from '../../assets/connectedness.webm';
import arrow from '../../assets/lSBmc7tyNDRW9.svg';

function Feature() {
    return (
        <div className='slack__feature'>
            <div className='slack__feature-container'>
                <div className='slack__feature_video'>
                    <video src={video1} />
                </div>
                <div className='slack__feature_description'>
                    <h2>Bring your team together</h2>
                    <p>At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</p>
                    <div className='slack__feature-readmore'>
                        <p>Learn more about channels</p>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
            </div>
            <div className='slack__feature-container'>
                <div className='slack__feature_description'>
                    <h2>Choose how you want to work</h2>
                    <p>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.</p>
                    <div className='slack__feature-readmore'>
                        <p>Learn more about flexible communication</p>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
                <div className='slack__feature_video'>
                    <video src={video2} />
                </div>
            </div>
            <div className='slack__feature-container'>
                <div className='slack__feature_video'>
                    <video src={video3} max-width='687' max-height='400' />
                </div>
                <div className='slack__feature_description'>
                    <h2>Move faster with your tools in one place</h2>
                    <p>With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</p>
                    <div className='slack__feature-readmore'>
                        <p>Learn more about the Slack platform</p>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;