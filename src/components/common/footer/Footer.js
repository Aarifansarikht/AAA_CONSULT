import React from 'react';
import Styles from './style.module.scss'
import FooterLeftCorner from '../../../assets/vector/footer-left-corner.svg'
import FooterRightCorner from '../../../assets/vector/footer-right.svg'
import { Form, Link } from 'react-router-dom';
import BrandLogo from '../../../assets/logo/brand-logo.svg'
import Facebooklogo from '../../../assets/social_icon/facebook.svg'
import LinkedinLogo from '../../../assets/social_icon/linkedin.svg'
import MailLogo from '../../../assets/social_icon/mail.svg'
import XLogo from '../../../assets/social_icon/x.svg'
import AddressIcon from '../../../assets/vector/address-icon.svg'

export default function Footer(props) {
    return (
        <section className={Styles.FooterSection}>
            <div className={Styles.Container}>
                <div className={Styles.FooterContent}>
                    <div className={Styles.FooterMain}>

                        <div className={Styles.FooterTop}>
                            <div className={Styles.FooterHead}>
                                <div className={Styles.FooterHeadLeft}>
                                    <Link to={"/"}>
                                        <img src={BrandLogo} className={Styles.BrandLogo} />
                                    </Link>
                                </div>
                                <div className={Styles.SocialIcon}>
                                    <img src={LinkedinLogo} />
                                    <img src={XLogo} />
                                    <img src={Facebooklogo} />
                                    <img src={MailLogo} />
                                </div>
                            </div>
                            <div className={Styles.FooterHeadBottom}>
                                <div className={Styles.HeadBottomLeft}>
                                    <p>AAA Consulting is a Consulting firm that is tech-empowered for multidisciplinary solutions. Instituted by highly professional solutions providers, we lead the industry for customized strategies for every client as per their goals and requirements.</p>
                                </div>
                                <div className={Styles.HeadBottomRight}>
                                    
                                    <form>
                                        <div className={Styles.FormContainer}>
                                            <input type='email' placeholder='Your e-mail here' />
                                            <button type='submit'>
                                                Contact me
                                            </button>
                                        </div>
                                    </form>
                                    <div className={Styles.Address}>
                                        <img src={AddressIcon} />
                                        <p>509, Aggarwal Millennium Tower 1, Netaji Subhash Place, New Delhi.<span>info@aaaconsulting.in</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.FooterBottom}>
                            <h1>Building Business with Trust</h1>
                            <div className={Styles.ListItems}>
                                <div className={Styles.LeftList}>
                                    <ul>
                                        <li>
                                            <Link to={''}>
                                                Online Reputation Management
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                Search Engine Optimization
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                Digital Marketing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                Social Media Consulting
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                Software Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                Intelligent Medical Diagnosis
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={Styles.RightList}>
                                    <ul>
                                        <li>
                                            <Link to={''}>
                                                Mobile Application Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                Website Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                Market Research
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                Cloud Computing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''}>
                                                AI, Data & Insights
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={FooterLeftCorner} className={Styles.FooterLeftCorner} />
                    <img src={FooterRightCorner} className={Styles.FooterRightCorner} />

                </div>
            </div>
        </section>
    );
}
