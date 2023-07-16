import React from 'react';
import './blog.css';
import { Article } from '../../../components';
import image1 from '../../../assets/promo-state-of-work.jpg';
import image2 from '../../../assets/wtny-resource-tile.jpg';
import image3 from '../../../assets/promo-open-ai.jpg';
import image4 from '../../../assets/promo-boost-productivity.jpg';

function Blog() {
    return (
        <div className='slack__blog section__padding' >
            <h2>Take a deeper dive into a new way to work</h2>
            <div className='slack__blog-article_container'>
                <Article IMG={image1} title='The State of Work 2023' category='Report' more='READ MORE'/>
                <Article IMG={image2} title='Big things are launching. Relive the highlights of World Tour New York!' category='on-demand' more='WATCH MORE'/>
                <Article IMG={image3} title='The next big thing? AI for everyone.' category='Customer Story' more='READ MORE'/>
                <Article IMG={image4} title='Top Slack tips to boost productivity' category='Webinar' more='WATCH MORE'/>
            </div>
        </div>
    )
}

export default Blog;