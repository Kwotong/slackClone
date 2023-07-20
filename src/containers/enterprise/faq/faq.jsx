import React, { useState } from 'react';
import './faq.css';
import caret from '../../../assets/icon_chevron_black.svg';

function Faq() {

    const accordionData = [
        {
            question: 'Is Slack secure?',
            answer: 'Yes. You can securely discuss confidential information in Slack. Slack offers multiple ways to ensure that your information, conversations and files stay safe. Slack delivers enterprise-grade security at every layer, adhering to multiple compliance certifications, including SOC 2, SOC 3, ISO/IEC 27001 and more. Slack is GDPR-compliant and can be configured for HIPAA and FINRA compliance. It is FedRAMP Moderate authorized. <br /> In addition, Slack offers security features, like Enterprise Key Management, that allow admins fine-grained control over data encryption. You can also integrate your own security tools with Slack to get instant notification if a threat is detected. Learn more about Slack’s comprehensive security program here.'
        },
        {
            question: 'What is Enterprise Grid?',
            answer: 'Enterprise Grid is Slack’s solution for large or complex organizations. It empowers your company to work with the agility of a small company while tapping into the resources and shared knowledge of your enterprise. <br /> Enterprise Grid includes all of the security and governance functionality you’d expect in an enterprise solution but with an intuitive, consumer-like experience that drives adoption. Enterprise Grid powers the work of some of the world’s largest companies—like IBM, Condé Nast, Oracle and E-Trade—and is the only collaboration product that can support up to 500,000 people. <br />Enterprise Grid is a paid plan. Compare plan features and pricing here.'
        },
        {
            question: 'Is Slack more secure than e-mail?',
            answer: 'Yes! Unlike email, Slack is not susceptible to spam or phishing, which causes 90% of data breaches. Your Slack handle cannot be sold to advertisers or put on a mailing list. You will only ever receive Slack messages from other people inside your organization, or from trusted partners using Slack Connect. You may get notifications from apps integrated with your workspace, such as Asana, Google Docs or Jira. <br /> Slack offers enterprise-grade data protection and privacy. Granular controls allow admins to customize security for each user, so no one sees things they shouldn’t. Learn more about how Slack can securely replace email inside your company.'
        },
        {
            question: 'What is a Slack channel?',
            answer: 'Channels are where work happens in Slack. A channel is a single place for a team to share messages, tools and files. People often create channels for company announcements, customer support triage, asking for IT or HR help, and sharing social interests. <br /> Channels can be public (open to everyone at the organization) or private (invite-only). In addition, organizations on a paid Slack plan can share a channel with external partners like agencies, clients and vendors with Slack Connect. Learn more about how channels can speed up your daily work here.'
        },
        {
            question: 'How do businesses use Slack?',
            answer: 'Slack helps organizations bring their people and tools together in one place so they can stay productive and aligned from anywhere. More than 750,000 businesses use Slack every day for team messaging, file sharing and video/voice calls. You can integrate thousands of tools, like Google Drive, Zoom and Salesforce, or create custom bots or apps just for your organization. Find out more about how Slack works here.'
        },
        {
            question: 'What is Slack Connect?',
            answer: 'Slack Connect is a more secure and productive way for organizations to communicate together. It lets you move all the conversations with your external partners, clients, vendors and others into Slack, replacing email and fostering collaboration. Slack’s enterprise-grade security features and compliance standards, like Enterprise Key Management, extend to Slack Connect. Learn more about Slack Connect here.'
        },
        {
            question: 'How is Slack Connect different from Enterprise Grid?',
            answer: 'Slack Connect is a feature of Slack that enables people at up to 20 organizations to work together in a central place, without leaving their own Slack workspaces. Enterprise Grid, on the other hand, is a Slack plan that lets you connect multiple workspaces inside your company. <br /> Slack Connect is included as part of all paid Slack plans. So if your organization is on Enterprise Grid, you’re also able to use Slack Connect. Compare plans and features here.'
        },
    ]

    const [activeIndices, setActiveIndices] = useState([]);

    const toggleAccordion = (index) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter((i) => i !== index));
        }
        else {
            setActiveIndices([...activeIndices, index]);
        }
    }

    return (
        <div className='enterprise__faq section__padding' >
            <h2 className='enterprise__faq-heading'>Frequently asked questions</h2>
                {accordionData.map((item, index) => {
                    return (
                        <div className='enterprise__faq-accordion-item' key={index}>
                            <div className='enterprise__faq-accordion-head' onClick={() => toggleAccordion(index)}>
                                <h3>{item.question}</h3>
                                <img src={caret} alt='caret down' className={ activeIndices.includes(index) ? 'rotate' : ''}/>
                            </div>
                            { activeIndices.includes(index) && <p className='enterprise__faq-answer'>{item.answer}</p> }
                        </div>
                    )
                })}
        </div>
    )
}

export default Faq;