import React from 'react';
import Styles from './style.module.scss'
import FooterLeftCorner from '../../../assets/vector/footer-left-corner.svg'
import FooterRightCorner from '../../../assets/vector/footer-right.svg'


export default function Footer(props) {
    return (
        <section className={Styles.FooterSection}>
            <div className={Styles.Container}>
                <div className={Styles.FooterContent}>
                    <div className={Styles.FooterMain}>

                        <div className={Styles.FooterTop}>

                        </div>
                        <div className={Styles.FooterBottom}>

                        </div>
                    </div>
                    <img src={FooterLeftCorner} className={Styles.FooterLeftCorner} />
                    <img src={FooterRightCorner} className={Styles.FooterRightCorner} />

                </div>
            </div>
        </section>
    );
}
