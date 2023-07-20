import React from 'react';
import './blog.css';
import Article from '../../../components/article/article';
import forrester from '../../../assets/promo-forrester-02.jpeg';
import fast from '../../../assets/fastly.jpeg';
import connect from '../../../assets/connect.jpeg';

function Blog () {
    return(
        <div className='enterprise__blog section__padding'>
            <h2 className='enterprise__blog-heading'>Explore more about working in Slack</h2>
            <div className='enterprise__blog-article-container'>
                <Article 
                IMG={forrester} 
                title='Forrester runs the numbers on the business value of Slack' 
                category='Report'
                more='Learn More'
                />
                <Article 
                IMG={fast} 
                title='How Fastly uses Slack to wow enterprise customers' 
                category='Customer Stories'
                more='Read Stories'
                />
                <Article 
                IMG={connect} 
                title='Slack Connect: A better way to work with people outside your company' 
                category='Resources'
                more='Read Now'
                />
            </div>
        </div>
    )
}

export default Blog;