import React from "react";
import HeaderLeftCorner from "../../../assets/vector/header-left-corner.svg";
import Styles from "./style.module.scss";
import TopNavbar from "../../../components/common/header/TopNavbar";
import BannerImage from "../../../assets/banner_woman.svg";
import BannerImage2 from "../../../assets/banner_img.svg";
import { Button } from "bootstrap";
import EclipseLeft from "../../../assets/vector/eclipse-left.svg";
import EclipseRight from "../../../assets/vector/eclipse-right.svg";
import Sperator from "../../../assets/vector/banner-sperator.svg";
import MainEclipse from "../../../assets/vector/mainsection-image.svg";
import PartnerCollection from "../../../assets/vector/partner-collection.svg";
import PartnerRoyal from "../../../assets/vector/partner-royal.svg";
import AboutLeftCorner from "../../../assets/vector/header-left-corner.svg";
import AboutRightCorner from "../../../assets/vector/header-right-corner.svg";
import HeadingBar from "../../../assets/vector/heading-bar.svg";
import Footer from "../../../components/common/footer/Footer";
import OurServiceBack from "../../../assets/vector/service-back.svg";
import ServiceImg1 from "../../../assets/ServiceImages/serviceimg1.svg";
import ServiceImg2 from "../../../assets/ServiceImages/serviceimg2.svg";
import ServiceImg3 from "../../../assets/ServiceImages/serviceimg3.svg";
import ServiceImg4 from "../../../assets/ServiceImages/serviceimg4.svg";
import BigFlowerRoyal from "../../../assets/vector/big-royal-flower.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import TrustSection from "../../../components/BusinessTrustSection/TrustSection";
import ReverseTrustSection from "../../../components/BusinessTrustSection/ReverseTrustSection";

import TrustImg1 from "../../../assets/BusinessTrustImg/trust-img1.svg";
import TrustImg2 from "../../../assets/BusinessTrustImg/trust-img2.svg";
import TrustImg3 from "../../../assets/BusinessTrustImg/trust-img3.svg";
import TrustImg4 from "../../../assets/BusinessTrustImg/trust-img4.svg";
import TrustImg5 from "../../../assets/BusinessTrustImg/trust-img5.svg";
import TrustCurve from "../../../assets/BusinessTrustImg/trust-curve.svg";
import TrustCurveRight from "../../../assets/BusinessTrustImg/trust-right-curve.svg";
function Homepage(props) {
  return (
    <div className={Styles.Wrapper}>
      <TopNavbar />
      <section className={Styles.BannerSection}>
        <img src={EclipseLeft} className={Styles.EclipseLeft} />
        <img src={EclipseRight} className={Styles.EclipseRight} />
        <div className={Styles.Container}>
          <div className={Styles.BannerContent}>
            <div className={Styles.BannerLeft}>
              <h2>We help Elevating brands in the digital age.</h2>
              <h1>
                Your <span>Success</span>
              </h1>
              <h1>
                Our <span>Journey</span>
              </h1>
              <div className={Styles.BannerBtn}>
                <button>Get Qoute</button>
              </div>
            </div>
            <div className={Styles.BannetRight}></div>
          </div>
        </div>
        <div className={Styles.BannerImageContainer}>
          <img src={BannerImage} className={Styles.BannerImage1} />
          <img src={BannerImage2} className={Styles.BannerImage2} />
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
              <div className={Styles.PartnerCollection}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.AboutUsSection}>
        <img src={Sperator} className={Styles.AboutUsSperator} />

        <div className={Styles.AboutUsContainer}>
          <div className={Styles.AboutUsContent}>
            <img src={AboutLeftCorner} className={Styles.topLeftCorner} />
            <img src={AboutRightCorner} className={Styles.topRightCorner} />
            <div className={Styles.Container}>
              <div className={Styles.AboutUsHeading}>
                <h1>About Us</h1>
                <img src={HeadingBar} className={Styles.HeadingBar} />
              </div>

              <div className={Styles.AboutUsBottom}>
                <p>
                  AAA Consulting is a leading Online Reputation Management and
                  Digital Marketing company based in Delhi, India. With the team
                  of Best Digital Marketing professionals, We help the companies
                  to build, repair, manage and promote the Clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.OurServiceSection}>
        <img src={Sperator} className={Styles.ServiceSperator} />
        <div className={Styles.OurServicesContent}>
          <div className={Styles.Container}>
            <h1>Our Services</h1>
            <div className={Styles.ServiceCard}>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  680: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay]}
                loop
              >
                <SwiperSlide>
                  <ServiceCard
                    image={ServiceImg1}
                    label={"Software Development"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ServiceCard
                    image={ServiceImg2}
                    label={"Digital Marketing"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ServiceCard
                    image={ServiceImg3}
                    label={"AI-Powered Data Insight"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ServiceCard
                    image={ServiceImg4}
                    label={"Intelligent Diagnose"}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <div className={Styles.WhoWeAreSection}>
        <div className={Styles.BigRoyalFlower}>
          <img src={BigFlowerRoyal} alt="" />
        </div>
        <div className={Styles.Container}>
          <div className={Styles.LeftContainer}>
            <h1>Who we are?</h1>
            <p>
              <strong>Welcome to AAA Consulting</strong> – where expertise and
              innovation unite! We're a leading tech-powered consulting firm
              with specialists in Reputation Management, SEO, Digital Marketing,
              and PR. Dedicated to customized solutions, we help businesses
              thrive online through strategic insights, security management, and
              expert threat handling. Join us for a transformative journey to
              success!
            </p>
          </div>
          <div className={Styles.RightContainer}>
            <button>Get Quote</button>
          </div>
        </div>
      </div>
      <section className={Styles.TrustSection}>
        <div className={Styles.Container}>
          <div className={Styles.TrustContent}>
            <div className={Styles.TrustTop}>
              <h1>Building Business with Trust</h1>
              <img src={HeadingBar} alt="" />
            </div>
            <div className={Styles.TrustBottom}>
              <TrustSection
                image={TrustImg1}
                heading={"Credibility"}
                pera={
                  "At AAA Consultancy, we don’t just provide solutions; we craft strategies. Our innovative approach to problem-solving, coupled with a deep understanding of individual client needs, enables us to deliver bespoke solutions that are both creative and pragmatic. We invest time to understand your challenges, and through collaborative efforts, we devise strategies that are not just effective but also sustainable."
                }
                curveimg={TrustCurve}
              />
              <ReverseTrustSection
                image={TrustImg2}
                heading={"Positive Brand Image"}
                pera={
                  "AAA Consultancy stands as a paragon of expertise in the consultancy realm. Our team of seasoned professionals, experts in their respective fields, brings a wealth of knowledge and experience to every project. With us, you’re not just getting a service; you're getting guidance rooted in extensive know-how and a passion for excellence. We transform challenges into opportunities, ensuring your brand’s journey is guided by wisdom and insight. "
                }
                rightcurveimg={TrustCurveRight}
              />
              <TrustSection
                image={TrustImg3}
                heading={"Increased Revenue"}
                pera={
                  "AAA Consultancy accelerates revenue growth for clients by enhancing brand image, driving customer loyalty, and attracting new business opportunities. Through tailored strategies, innovative marketing, and operational optimization, we ensure sustained growth. Our focus on credibility opens doors to partnerships and investments, expanding market reach. With AAA Consultancy, clients achieve rapid, sustainable revenue increase."
                }
                curveimg={TrustCurve}
              />
              <ReverseTrustSection
                image={TrustImg4}
                heading={"Build Trust"}
                pera={
                  "AAA Consultancy builds trust through a combination of expertise, transparency, and reliability. Our team consists of seasoned professionals dedicated to delivering exceptional results. We prioritize clear communication, keeping clients informed at every step. By consistently meeting and exceeding expectations, demonstrating integrity in all interactions, and delivering tangible, reliable solutions, we establish lasting trust with our clients."
                }
                rightcurveimg={TrustCurveRight}
              />
              <TrustSection
                image={TrustImg5}
                heading={"Improved Positive Content"}
                pera={
                  "AAA Consultancy enhances positive content through strategic creation and engagement. We craft compelling narratives, optimize online presence, and actively engage with the audience. Through proactive reputation management, we address any negativity promptly, ensuring a consistently positive image for our clients."
                }
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Homepage;
