import React from "react";
import Styles from "./style.module.scss";

export default function ReverseTrustSection({
  image,
  heading,
  pera,
  rightcurveimg,
}) {
  return (
    <div className={Styles.TrustSectionContainer}>
      <div className={Styles.TrustTypography}>
        <h2 style={{ textAlign: "right" }}>{heading}</h2>
        <p style={{ textAlign: "right" }}>{pera}</p>
      </div>
      <div className={Styles.TrustImg}>
        <img src={image} />
        <img src={rightcurveimg} className={Styles.TrustRightCurve} />
      </div>
    </div>
  );
}
