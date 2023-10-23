import React from 'react';
import Styles from './style.module.scss'
import SideLine from '../../../assets/vector/service-side-line.svg'
import Arrow from '../../../assets/vector/right-arrow.svg'
import ServiceFlower from '../../../assets/vector/service-flower.svg'

export default function ServiceCard({image,label}) {
    return (
        <div className={Styles.CardContainer}>
            <img src={image}/>
            <div className={Styles.CardBottom}>
                    <img src={SideLine} className={Styles.SideLine}/>
                    <h2>{label}</h2>
                    <img src={Arrow} className={Styles.Arrow}/>
            </div>
            <img src={ServiceFlower} className={Styles.ServiceFlower}/>
        </div>
    );
}
