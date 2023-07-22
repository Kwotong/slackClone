import React, { useState } from 'react';
import './faq.css';
import { ReadMore } from '../../../components';
import caret from '../../../assets/icon_chevron_black.svg';

function Faq() {

    const accordionData = [
        {
            question: 'What are my payment options - credit card and/or invoicing?',
            answer: 'You can use your credit card to pay for any plan. If you sign up for an Annual subscription and plan to spend at least $5,000 USD, we can invoice you annually. Visit the help center for more information or Contact us to start the process.'
        },
        {
            question: 'Our team has several accounts which are not being actively used, but which we don’t want to disable. Do we still have to pay for them?',
            answer: 'Every day we check to see if everyone on your team is active. If they have been inactive for a period of time, we stop charging you for that person and add a prorated credit to your account for the time you’ve already paid. You’ll always and only be billed for what you use — fair and square!'
        },
        {
            question: 'My team has credits. How do we use them?',
            answer: 'Once your team signs up for a subscription plan, we’ll draw against your credit balance until it runs out. Only then will we start charging your subscription to your credit card. As long as you sign up for a subscription plan before the expiration date, those credits are yours to use until they’re all gone.'
        },
        {
            question: 'We need to add new users to our team. How will that be billed?',
            answer: 'We’ll make a one-time, prorated charge to your credit card to cover your new team member’s account for the remainder of the current billing period. As an example, suppose your team is on the “Pro plan,” which costs $8.75 USD per active user per month when billed monthly. You add a new team member 10 days into your billing period and there are 20 remaining days in the month. The per-day cost for each user is $8.75 USD / 30, so we will make a one-time charge of $5.83 USD ($8.75 USD / 30 days * 20 days) to your team’s credit card on file.'
        },
        {
            question: 'My team wants to cancel its subscription. How do we do that? Can we get a refund?',
            answer: 'Team Owners can change the team’s subscription level. There are two options when downgrading from a paid plan to the Free plan: You can downgrade to the Free plan immediately. If there is more than one day until your renewal date, we will prorate the remaining balance on your account and hold it for your team as a credit. You can use that credit towards a reactivation of your paid subscription in the future. We can automatically downgrade you to the Free plan at your next renewal date. Your subscription will remain active at its current level through the end of the billing period that you’ve already paid for. We do not offer refunds.'
        },
        {
            question: 'Do you offer discounts for non-profit organizations or educational institutions?',
            answer: 'Slack wants to support people in the world who are doing good things. That’s why we offer special discount pricing for qualified nonprofit organizations and educational institutions.'
        },
    ]

    const [isActive, setIsActive] = useState([]);

    const toggleAccordion = (index) => {
        if (isActive.includes(index)) {
            setIsActive(isActive.filter((i) => i !== index));
        }
        else {
            setIsActive([...isActive, index]);
        }
    }

    return (
        <div className='pricing__faq section__padding'>
            <h2 className='pricing__faq-heading'>Leading the way in enterprise security</h2>
            <p className='pricing__faq-text'>In addition to data encryption in transit and at rest, we operate comprehensive compliance and assurance programs.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ReadMore text='Learn more about security'/>
            </div>
            <h2 className='pricing__faq-heading'>Commonly asked questions</h2>
            {accordionData.map((item, index) => {
                return (
                    <div className='pricing__faq-accordion-item' key={index} >
                        <div className='pricing__faq-accordion-head' onClick={() => toggleAccordion(index)}>
                            <h3>{item.question}</h3>
                            <img src={caret} alt='caret img' className={isActive.includes(index) ? 'rotate' : ''} />
                        </div>
                        {isActive.includes(index) && <p className='pricing__faq-answer'>{item.answer}</p>}
                    </div>
                )
            })}
            <p className='pricing__faq-bottom-text'>Get more information on <span>billing at Slack.</span></p>
        </div>
    )
}

export default Faq;