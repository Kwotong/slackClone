import React from 'react';
import './details.css';
import tick from '../../../assets/boldTick.svg';

function Details() {
    return (
        <div className='pricing__details section__padding'>
            <table>
                <thead>
                    <tr>
                        <th className='pricing__details-heading'></th>
                        <th className='pricing__details-heading'>Free</th>
                        <th className='spacer'></th>
                        <th className='pricing__details-heading'>Pro</th>
                        <th className='spacer'></th>
                        <th className='pricing__details-heading'>Business+</th>
                        <th className='spacer'></th>
                        <th className='pricing__details-heading'>Enterprise Grid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>PRODUCTIVITY BASICS</th>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Message and file history</td>
                        <td>90-day access</td>
                        <td className='spacer'></td>
                        <td>Unlimited</td>
                        <td className='spacer'></td>
                        <td>Unlimited</td>
                        <td className='spacer'></td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td>Audio and video clips</td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Relevant people, channels and files in search results</td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Integrations with other apps</td>
                        <td>10</td>
                        <td className='spacer'></td>
                        <td>Unlimited</td>
                        <td className='spacer'></td>
                        <td>Unlimited</td>
                        <td className='spacer'></td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td>Workspaces</td>
                        <td>1</td>
                        <td className='spacer'></td>
                        <td>1</td>
                        <td className='spacer'></td>
                        <td>1</td>
                        <td className='spacer'></td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td>Customizable sections</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Slack huddles</td>
                        <td>1:1 only</td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Slack canvas</td>
                        <td>Channels and DMs only</td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <th>EXTERNAL COLLABORATION</th>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Work with other organizations</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Work with individuals</td>
                        <td>1:1 messaging only</td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <th>SECURITY</th>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Data encryption at rest and in transit</td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Two-factor authentication</td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>OAuth with Google</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SAML-based single sign-on (SSO)</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Slack Enterprise Key Management</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Integration with Enterprise Mobility Management (EMM)</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <th>COMPLIANCE</th>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Custom retention policies for messages and files</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Data exports for all messages</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Support for HIPAA compliance</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Data residency</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <th>ADMINISTRATION</th>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Manage channel posting permissions</td>
                        <td>Limited to #general channel only</td>
                        <td className='spacer'></td>
                        <td>Limited to #general channel only</td>
                        <td className='spacer'></td>
                        <td>Unlimited number of channels</td>
                        <td className='spacer'></td>
                        <td>Unlimited number of channels</td>
                    </tr>
                    <tr>
                        <td>Custom User Groups</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Real-time Active Directory sync with OneLogin, Okta and Ping Identity</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>User management with SCIM provisioning</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Support for integrations with Data Loss Prevention (DLP), e-Discovery, and offline backup providers</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Domain claiming</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <td>Custom Terms of Service</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                    <tr>
                        <th>SUPPORT</th>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                        <td className='spacer'></td>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Access to customer support</td>
                        <td>Standard support</td>
                        <td className='spacer'></td>
                        <td>24/7 support</td>
                        <td className='spacer'></td>
                        <td>24/7 support with four-hour first response time</td>
                        <td className='spacer'></td>
                        <td>24/7 priority support with four-hour first response time</td>
                    </tr>
                    <tr>
                        <td>99.99% guaranteed uptime SLA</td>
                        <td></td>
                        <td className='spacer'></td>
                        <td></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                        <td className='spacer'></td>
                        <td><img src={tick} alt='tick img' /></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>

                    <td></td>
                    <td>get Started</td>
                    <td className='spacer'></td>
                    <td>get Started</td>
                    <td className='spacer'></td>
                    <td>get Started</td>
                    <td className='spacer'></td>
                    <td>get Started</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Details;