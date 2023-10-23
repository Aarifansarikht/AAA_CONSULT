import { React, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Styles from './style.module.scss'
import HeaderLeftCorner from '../../../assets/vector/header-left-corner.svg'
import HeaderRightCorner from '../../../assets/vector/header-right-corner.svg'
import BrandLogo from '../../../assets/logo/brand-logo.svg'
import Facebooklogo from '../../../assets/social_icon/facebook.svg'
import LinkedinLogo from '../../../assets/social_icon/linkedin.svg'
import MailLogo from '../../../assets/social_icon/mail.svg'
import XLogo from '../../../assets/social_icon/x.svg'
import ActiveIndicator from '../../../assets/vector/active-indicator.svg'

function TopNavbar(props) {
    const location = useLocation();
    const [active, setActive] = useState("")
    useEffect(() => {
        setActive(location.pathname)
    }, [location.pathname])
    return (
        <header>
            <div className={Styles.Container}>
                <div className={Styles.TopNavbarContainer}>

                    <div className={Styles.absoluteImageContainer}>
                        <img src={HeaderLeftCorner} className={Styles.topLeftCorner} />
                        <img src={HeaderRightCorner} className={Styles.topRightCorner} />

                    </div>
                    <nav>

                        <div className={Styles.NavLeft}>
                            <Link to={"/"}>
                                <img src={BrandLogo} className={Styles.BrandLogo} />
                            </Link>
                        </div>

                        <div className={Styles.NavRight}>
                            <div className={Styles.SocialIcon}>
                                <img src={LinkedinLogo} />
                                <img src={XLogo} />
                                <img src={Facebooklogo} />
                                <img src={MailLogo} />
                            </div>
                            <div className={Styles.NavItems}>
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            HOME
                                        </Link>
                                        {active === '/' && <img src={ActiveIndicator} className={Styles.ActiveIndicator} />}
                                    </li>
                                    <li>
                                        <Link to={'/about'}>
                                            ABOUT
                                        </Link>
                                        {active === '/about' && <img src={ActiveIndicator} className={Styles.ActiveIndicator} />}


                                    </li>
                                    <li>
                                        <Link to={'/services'}>
                                            SERVICES
                                        </Link>
                                        {active === '/services' && <img src={ActiveIndicator} />}


                                    </li>
                                    <li>
                                        <Link to={'/contacts'}>
                                            CONTACTS
                                        </Link>
                                        {active === '/contacts' && <img src={ActiveIndicator} />}


                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    );
}

export default TopNavbar;