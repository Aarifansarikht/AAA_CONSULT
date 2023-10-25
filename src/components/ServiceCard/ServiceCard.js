import React from 'react';
import Styles from './style.module.scss'

import ServiceFlower from '../../assets/vector/service-flower.svg'
import {FaArrowRight} from 'react-icons/fa6'
export default function ServiceCard({image,label}) {
    return (
        <div className={Styles.CardContainer}>
            <img src={image} className={Styles.CardBackground}/>
            <div className={Styles.CardBottom}> 
                    <h2>{label}</h2>
                    <FaArrowRight style={{color:'#fbce8a',position:'absolute',bottom:'0px',right:'0.5rem'}} size={20}/>
            </div>
            <img src={ServiceFlower} className={Styles.ServiceFlower}/>
        </div>
    );
}
