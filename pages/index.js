import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Layouts from "../src/layouts/Layouts";
import { testimonialOne } from "../src/sliderProps";
import AppointmentForm from "../src/components/AppointmentForm";
import Image from "next/image";
import Seo from "../src/components/Seo";

import serviceNew1 from "../public/assets/img/img-title-box/service-new-1.png";
import serviceNew2 from "../public/assets/img/img-title-box/service-new-2.png";
import serviceNew3 from "../public/assets/img/img-title-box/service-new-3.png";
import aboutNew1 from "../public/assets/img/circle-image-gallery/about-new-1.png";
import aboutNew4 from "../public/assets/img/circle-image-gallery/about-new-4.png";
import aboutNew3 from "../public/assets/img/circle-image-gallery/about-new-3.png";
import aboutNew2 from "../public/assets/img/circle-image-gallery/about-new-2.png";
import iconDetox from "../public/assets/img/icon/icon-detox.png";
import iconRehab from "../public/assets/img/icon/icon-rehab.png";
import iconCounseling from "../public/assets/img/icon/icon-counseling.png";
import iconGroup from "../public/assets/img/icon/icon-group.png";
import iconFamily from "../public/assets/img/icon/icon-family.png";
import iconYoga from "../public/assets/img/icon/icon-yoga.png";
import doctorNew1 from "../public/assets/img/doctors/doctor-new.png";
import doctorNew2 from "../public/assets/img/doctors/doctor-new-2.png";
import doctorNew3 from "../public/assets/img/doctors/doctor-new-3.png";
import doctorNew4 from "../public/assets/img/doctors/doctor-new-4.png";
import branch1 from "../public/branch1.webp";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layouts>
      <Seo pageTitle="Home" />
      <>
        {/*====== Hero Area Start ======*/}
        <section className="p-0" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="container-fluid p-0">
            <video
              src="/trust.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </section>
        {/*====== Hero Area End ======*/}
        {/*====== Why Choose Section Start ======*/}
        <section className="wcu-section section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline">Why Choose RS Care Foundation</span>
                  <h2 className="title">Your Trusted Partner in Recovery</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Expert Detoxification</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <Image src={serviceNew1} alt="Expert Detoxification" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Holistic Counseling</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <Image src={serviceNew2} alt="Holistic Counseling" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Lifetime Support</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <Image src={serviceNew3} alt="Lifetime Support" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Why Choose Section End ======*/}
        {/*====== About Section Start ======*/}
        <section className="about-section section-gap">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
              <div className="col-lg-6 col-md-10">
                <div className="circle-image-gallery mb-md-50">
                  <div className="row">
                    <div className="col-6 gallery-left">
                      <div
                        className="single-img wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <Image src={aboutNew1} alt="About RS Care" />
                      </div>
                      <div
                        className="single-img wow fadeInRight"
                        data-wow-delay="0.4s"
                      >
                        <Image src={aboutNew4} alt="About RS Care" />
                      </div>
                    </div>
                    <div className="col-6 gallery-right">
                      <div
                        className="single-img wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <Image
                          className="animate-float-bob-y"
                          src={aboutNew3}
                          alt="About RS Care"
                        />
                      </div>
                      <div
                        className="single-img wow fadeInRight"
                        data-wow-delay="0.6s"
                      >
                        <Image src={aboutNew2} alt="About RS Care" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="about-text">
                  <div className="section-heading mb-35">
                    <span className="tagline">About RS Care Foundation</span>
                    <h2 className="title">
                      Leading Alcohol & Drug Rehabilitation Centre
                    </h2>
                    <p>Commitment to Compassionate Care and Recovery</p>
                  </div>
                  <p>
                    At RS Care Foundation, we understand the challenges of
                    addiction. Our diverse team of specialists provides
                    personalized treatment plans, including detoxification,
                    individual counseling, and group therapy, to ensure
                    sustainable recovery and a healthier future.
                  </p>
                  <Link href="/about">
                    <a className="template-btn mt-40">
                      Learn More <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}
        {/*====== Service Section Start ======*/}
        <section className="service-section bg-color-grey section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Our De-addiction Services</span>
                  <h2 className="title">
                    Comprehensive De-addiction Therapies
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center service-loop">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <Image src={iconDetox} alt="Alcohol Detox" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Alcohol Detox</a>
                    </Link>
                  </h4>
                  <p>
                    Medically supervised detoxification to safely manage
                    withdrawal symptoms.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <Image src={iconRehab} alt="Drug Rehabilitation" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Drug Rehabilitation</a>
                    </Link>
                  </h4>
                  <p>
                    Structured programs to overcome dependency and build a
                    drug-free life.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon">
                    <Image src={iconCounseling} alt="Individual Counseling" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Individual Counseling</a>
                    </Link>
                  </h4>
                  <p>
                    One-on-one sessions to address root causes and psychological
                    triggers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <Image src={iconGroup} alt="Group Therapy" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Group Therapy</a>
                    </Link>
                  </h4>
                  <p>
                    Supportive environment to share experiences and learn from
                    others.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="icon">
                    <Image src={iconFamily} alt="Family Counseling" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Family Counseling</a>
                    </Link>
                  </h4>
                  <p>
                    Healing relationships and building a supportive home
                    environment.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon">
                    <Image src={iconYoga} alt="Yoga & Meditation" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Yoga & Meditation</a>
                    </Link>
                  </h4>
                  <p>
                    Holistic practices to restore mental balance and inner
                    peace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}
        {/*====== Big Tagline Start ======*/}
        <section className="big-tagline">
          <div className="container-fluid">
            <h2 className="tagline">
              Start your journey to recovery today. We are here to support you
              every step of the way.
            </h2>
          </div>
        </section>
        {/*====== Big Tagline End ======*/}
        {/*====== Doctor Section Start ======*/}
        <section className="doctors-section section-gap">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-40">
              <div className="col-lg-5 col-md-6">
                <div className="section-heading">
                  <span className="tagline">Professional Team</span>
                  <h2 className="title">Meet Our Recovery Specialists</h2>
                </div>
              </div>
              <div className="col-auto">
                <a
                  href="tel:+917010768196"
                  className="template-btn template-btn-primary mt-sm-30 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  Make An Appointment <i className="far fa-plus" />
                </a>
              </div>
            </div>
            <div className="row doctors-loop justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div
                  className="doctor-box-one bordered-style mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <Image src={doctorNew1} alt="Dr. Lee Williamson" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Dr. Lee Williamson</a>
                      </Link>
                    </h5>
                    <span className="specialty">Psychiatrist</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="doctor-box-one bordered-style mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="doctor-photo">
                    <Image src={doctorNew2} alt="Dr. Greg Grinstead" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Dr. Greg Grinstead</a>
                      </Link>
                    </h5>
                    <span className="specialty">Clinical Psychologist</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="doctor-box-one bordered-style mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="doctor-photo">
                    <Image src={doctorNew3} alt="Roger K. Jackson" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Roger K. Jackson</a>
                      </Link>
                    </h5>
                    <span className="specialty">Addiction Counselor</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="doctor-box-one bordered-style mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="doctor-photo">
                    <Image src={doctorNew4} alt="Raymudo M. Drake" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Raymudo M. Drake</a>
                      </Link>
                    </h5>
                    <span className="specialty">Therapist</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Doctor Section End ======*/}
        {/*====== Appointment Section Start ======*/}
        <AppointmentForm />
        {/*====== Appointment Section End ======*/}
        {/*====== Testimonials Section Start ======*/}
        <section className="testimonial-section bg-color-grey section-have-half-bg">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="testimonial-one-wrap">
                  <div className="section-heading mb-50">
                    <span className="tagline">Our Testimonials</span>
                    <h2 className="title">
                      What Our Patients Say About Our Medical
                    </h2>
                  </div>
                  <Slider
                    {...testimonialOne}
                    className="testimonial-slider-one"
                  >
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            &quot;RS Care Foundation gave me my life back. The
                            supportive staff and personalized treatment helped
                            me overcome my alcohol addiction.&quot;
                          </p>
                          <div className="author-info">
                            <h5 className="name">John D.</h5>
                            <span className="title">Recovered Patient</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            &quot;I am forever grateful for the compassionate
                            care my brother received. The counselors truly
                            understand the complexities of addiction.&quot;
                          </p>
                          <div className="author-info">
                            <h5 className="name">Sarah M.</h5>
                            <span className="title">Patient&apos;s Sister</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            &quot;The holistic approach here is amazing. Yoga
                            and meditation played a huge role in my recovery
                            journey.&quot;
                          </p>
                          <div className="author-info">
                            <h5 className="name">Michael T.</h5>
                            <span className="title">1 Year Sober</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            &quot;Highly recommended for anyone struggling with
                            drug dependency. The detox process was managed
                            professionally and safely.&quot;
                          </p>
                          <div className="author-info">
                            <h5 className="name">David L.</h5>
                            <span className="title">Former Patient</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-half-bg"
            style={{
              backgroundImage:
                "url(assets/img/testimonial/testimonial-left.png)",
            }}
          />
        </section>
        {/*====== Testimonials Section End ======*/}
        {/*====== Counter Section Start ======*/}
        <section className="counter-section section-gap">
          <div className="container">
            <div className="counter-inner">
              <div className="row justify-content-between">
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      {/* <span className="counter">359</span> */}
                      <Counter end={359} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Professional Doctors</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={85} />
                      {/* <span className="counter">85</span> */}
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">Saticfied Our Clients</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={863} />
                      {/* <span className="counter">863</span> */}
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Win International Awards</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={86} />
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">4.9 Star Reviews</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Counter Section End ======*/}
        {/*====== Help Section Start ======*/}
        <section className="help-section section-gap-bottom">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-end align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="help-text-wrapper">
                  <div className="section-heading mb-20">
                    <span className="tagline">How Can We Help</span>
                    <h2 className="title">
                      Flexible &amp; Responsive to Changing Need
                    </h2>
                  </div>
                  <p>
                    We provide a safe, supportive, and confidential environment
                    for individuals seeking to overcome addiction. Our holistic
                    approach integrates medical treatment with psychological
                    support to ensure lasting recovery.
                  </p>
                  <ul className="check-list mt-35 pr-xl-4">
                    <li className="wow fadeInUp" data-wow-delay="0.3s">
                      High success rate in long-term sobriety through
                      personalized treatment plans
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                      Immediate admission and 24/7 medical support for
                      detoxification
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.5s">
                      Therapeutic programs tailored to individual needs and
                      circumstances
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                      Comprehensive aftercare support to prevent relapse and
                      maintain wellness
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="help-img text-center text-lg-right mt-md-50">
                  <Image src={branch1} alt="Recovery Support" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Help Section End ======*/}
      </>
    </Layouts>
  );
};
export default Index;
