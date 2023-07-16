import React from 'react';
import './teams.css';
import officeBuilding from '../../../assets/emoji-office-building.png';
import skyline from '../../../assets/emoji-skyline.png';
import chart from '../../../assets/emoji-chart-upward-trend.png';
import handshake from '../../../assets/emoji-handshake.png';
import lock from '../../../assets/emoji-lock.png';
import woman from '../../../assets/emoji-woman-technologist.png';

function Teams() {
    return(
        <div className='slack__teams section__padding'>
            <h2>Teams large and small rely on Slack</h2>
            <p>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
            <div className='slack__teams-btn_container'>
                <button className='purple-btn'>Meet Slack for Enterprise</button>
                <button className='transparent-btn-purple'>Talk to sales</button>
            </div>
            <div className='slack__teams-stats_container'>
                <div className='slack__teams-stats'>
                    <h2>85%</h2>
                    <p>of users say Slack has improved communication*</p>
                </div>
                <div className='slack__teams-stats'>
                    <h2>86%</h2>
                    <p>feel their ability to work remotely has improved*</p>
                </div>
                <div className='slack__teams-stats'>
                    <h2>88%</h2>
                    <p>feel more connected to their teams*</p>
                </div>
            </div>
            <div className='slack__teams-emoji-top left'>
                <img src={officeBuilding} alt='office building' />
            </div>
            <div className='slack__teams-emoji-top right'>
                <img src={skyline} alt='skyline' />
            </div>
            <div className='slack__teams-emoji-middle left'>
                <img src={chart} alt='chart' />
            </div>
            <div className='slack__teams-emoji-middle right'>
                <img src={handshake} alt='handshake' />
            </div>
            <div className='slack__teams-emoji-bottom left'>
                <img src={lock} alt='lock' />
            </div>
            <div className='slack__teams-emoji-bottom right'>
                <img src={woman} alt='woman' />
            </div>
        </div>
    )
}

export default Teams;