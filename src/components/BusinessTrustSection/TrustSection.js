import React from "react";
import Styles from "./style.module.scss";

export default function TrustSection({ image, heading, pera, curveimg }) {
  return (
    <div className={Styles.TrustSectionContainer}>
      <div className={Styles.TrustImg}>
        <img src={image} />
        <img src={curveimg} className={Styles.TrustCurve} />
      </div>
      <div className={Styles.TrustTypography}>
        <h2>{heading}</h2>
        <p>{pera}</p>
      </div>
    </div>
  );
}
