import React from 'react';
import HeaderLeftCorner from '../../../assets/vector/header-left-corner.svg'
import Styles from './style.module.scss'
import TopNavbar from '../../../components/common/header/TopNavbar';
import BannerImage from '../../../assets/banner_woman.svg'
import BannerImage2 from '../../../assets/banner_img.svg'
import { Button } from 'bootstrap';
import EclipseLeft from '../../../assets/vector/eclipse-left.svg'
import EclipseRight from '../../../assets/vector/eclipse-right.svg'
import Sperator from '../../../assets/vector/banner-sperator.svg'
import MainEclipse from '../../../assets/vector/mainsection-image.svg'
import PartnerCollection from '../../../assets/vector/partner-collection.svg'
import PartnerRoyal from '../../../assets/vector/partner-royal.svg'
import AboutLeftCorner from '../../../assets/vector/header-left-corner.svg'
import AboutRightCorner from '../../../assets/vector/header-right-corner.svg'
import HeadingBar from '../../../assets/vector/heading-bar.svg'

function Homepage(props) {
    return (
        <div className={Styles.Wrapper}>
            <TopNavbar />
            <section className={Styles.BannerSection}>
                <div className={Styles.Container}>
                    <div className={Styles.BannerContent}>
                        <div className={Styles.BannerLeft}>
                            <h2>We help Elevating brands in the digital age.</h2>
                            <h1>Your <span>Success</span></h1>
                            <h1>Our <span>Journey</span></h1>
                            <div className={Styles.BannerBtn}>
                                <button>Get Qoute</button>
                            </div>
                            <img src={EclipseLeft} className={Styles.EclipseLeft} />
                            <img src={EclipseRight} className={Styles.EclipseRight} />
                        </div>
                        <div className={Styles.BannetRight}>
                            <div className={Styles.BannerImageContainer}>
                                <img src={BannerImage} className={Styles.BannerImage1} />
                                <img src={BannerImage2} className={Styles.BannerImage2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={Styles.SectionBottom}>
                <img src={Sperator} />
            </div>


            <section className={Styles.MainSection}>
                <img src={MainEclipse} className={Styles.MainEclipse} />
                <div className={Styles.MainContent}>
                    <img src={PartnerRoyal} className={Styles.PartnerRoyal} />
                    <div className={Styles.Container}>
                        <div className={Styles.Partners}>

                            <h1>Our proud partners</h1>
                            <div className={Styles.PartnerCollection}>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={Styles.AboutUsSection}>
                <img src={Sperator} className={Styles.AboutUsSperator} />

                <div className={Styles.Container}>
                    <div className={Styles.AboutUsContent}>

                        <img src={AboutLeftCorner} className={Styles.topLeftCorner} />
                        <img src={AboutRightCorner} className={Styles.topRightCorner} />

                        <div className={Styles.AboutUsHeading}>
                            <h1>
                                About Us
                            </h1>
                            <img src={HeadingBar} className={Styles.HeadingBar} />

                        </div>
                        
                        <div className={Styles.AboutUsBottom}>
                            <p>AAA Consulting is a leading Online Reputation Management and Digital Marketing company based in Delhi, India. With the team of Best Digital Marketing professionals, We help the companies to build, repair, manage and promote the Clients.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Homepage;