import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import Image from "next/image";
import Seo from "../src/components/Seo";

import aboutNew1 from "../public/assets/img/circle-image-gallery/about-new-1.png";
import aboutNew4 from "../public/assets/img/circle-image-gallery/about-new-4.png";
import aboutNew3 from "../public/assets/img/circle-image-gallery/about-new-3.png";
import aboutNew2 from "../public/assets/img/circle-image-gallery/about-new-2.png";
import serviceNew1 from "../public/assets/img/img-title-box/service-new-1.png";
import serviceNew2 from "../public/assets/img/img-title-box/service-new-2.png";
import serviceNew3 from "../public/assets/img/img-title-box/service-new-3.png";
import doctorNew1 from "../public/assets/img/doctors/doctor-new.png";
import doctorNew2 from "../public/assets/img/doctors/doctor-new-2.png";
import doctorNew3 from "../public/assets/img/doctors/doctor-new-3.png";
import doctorNew4 from "../public/assets/img/doctors/doctor-new-4.png";
import faqNew from "../public/assets/img/section-img/faq-new.png";

const About = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Layouts footer={2}>
      <Seo pageTitle="About Us" />
      <PageBanner
        title={"About"}
        pageTitleImage={
          "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1920&auto=format&fit=crop"
        }
      />
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
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <Image
                        className="animate-float-bob-y"
                        src={aboutNew3}
                        alt="About RS Care"
                      />
                    </div>
                    <div
                      className="single-img wow fadeInLeft"
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
                    Learn More <i className="far fa-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== About Section End ======--> */}

      <div className="wcu-with-doctors">
        {/* <!--====== Why Choose Section Start ======--> */}
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
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
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
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
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
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
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
        {/* <!--====== Why Choose Section End ======--> */}

        {/* <!--====== Doctor Section Start ======--> */}
        <section className="doctors-section bg-color-grey polygon-pattern-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Professional Team</span>
                  <h2 className="title">Meet Our Experience Team Members</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center doctors-loop">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
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
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
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
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="doctor-photo">
                    <Image src={doctorNew3} alt="Roger K. Jackson" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>
                          Roger <br /> K. Jackson
                        </a>
                      </Link>
                    </h5>
                    <span className="specialty">Addiction Counselor</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="doctor-photo">
                    <Image src={doctorNew4} alt="Raymudo M. Drake" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>
                          Raymudo <br /> M. Drake
                        </a>
                      </Link>
                    </h5>
                    <span className="specialty">Therapist</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== Doctor Section End ======--> */}
      </div>

      {/* <!--====== FAQ Section Start ======--> */}
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="faq-image text-center text-lg-left mb-md-50">
                <Image src={faqNew} alt="Frequently Asked Questions" />
              </div>
            </div>
            <div className="col-lg-6 col-md-9 col-sm-11">
              <div className="faq-content pl-xl-5">
                <div className="section-heading mb-30">
                  <span className="tagline">How Can We help</span>
                  <h2 className="title">
                    Flexible & Responsive to Changing Needs
                  </h2>
                </div>
                <p>
                  We understand that every individual&apos;s journey to recovery
                  is unique. Our flexible approach adapts to your changing
                  needs, ensuring you receive the most effective support at
                  every stage of your rehabilitation.
                </p>
                <Accordion
                  defaultActiveKey="collapseOne"
                  className="accordion-style-two mt-30"
                >
                  <div
                    className={
                      toggle === 1
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseOne"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 1 ? 0 : 1)}
                      >
                        <span>Advanced Therapy and Expert Counselors</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseOne">
                      <div className="accordion-content">
                        <p>
                          We utilize evidence-based therapeutic modalities
                          combined with the expertise of certified counselors to
                          address the root causes of addiction and promote
                          lasting healing.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 2
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseTwo"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 2 ? 0 : 2)}
                      >
                        <span>Decades of Experience in Addiction Recovery</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseTwo">
                      <div className="accordion-content">
                        <p>
                          With over 10 years of dedicated service, our team has
                          helped thousands of individuals reclaim their lives.
                          Our experience ensures you are in safe, capable hands.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 3
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseThree"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 3 ? 0 : 3)}
                      >
                        <span>24/7 Support and Medical Care</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseThree">
                      <div className="accordion-content">
                        <p>
                          Our facility provides round-the-clock medical
                          supervision and support staff to ensure your safety
                          and comfort throughout the detoxification and recovery
                          process.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default About;
