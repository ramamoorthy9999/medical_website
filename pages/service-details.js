import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const ServiceDetails = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Service Details"} />
      <>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 order-lg-last">
                <div className="service-details-wrapper">
                  <div className="service-thumbnail mb-50">
                    <img
                      src="assets/img/service/service-details-1.jpg"
                      alt="Image"
                    />
                  </div>
                  <h2 className="service-title">Alcohol Detoxification</h2>
                  <p>
                    Alcohol detoxification is the first critical step in
                    overcoming alcohol addiction. Our medically supervised detox
                    program ensures that you can safely and effectively manage
                    withdrawal symptoms in a comfortable and supportive
                    environment. Our team of experienced medical professionals
                    is available 24/7 to monitor your progress and provide the
                    necessary care to ease the physical and psychological
                    challenges of detoxification.
                  </p>
                  <blockquote className="mt-30">
                    &quot;Recovery is not just about stopping the use of
                    substances; it&apos;s about reclaiming your life and
                    building a future filled with hope and purpose.&quot;
                  </blockquote>
                  <div className="mb-50 mt-50">
                    <img
                      src="assets/img/service/service-details-2.jpg"
                      alt="Image"
                    />
                  </div>
                  <p>
                    We utilize evidence-based protocols to minimize discomfort
                    and prevent complications. Following detox, we guide you
                    towards the next phase of treatment, whether it be
                    residential rehabilitation, outpatient therapy, or
                    counseling, to ensure a comprehensive path to long-term
                    sobriety.
                  </p>
                  <ul className="check-list mt-35">
                    <li>24/7 Medical Supervision and Support</li>
                    <li>Individualized Detoxification Protocols</li>
                    <li>Comfortable and Safe Environment</li>
                    <li>Seamless Transition to Rehabilitation Programs</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-10 order-lg-first">
                <div className="service-sidebar">
                  <div className="widget departments-list">
                    <h3 className="widget-title">Departments</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Alcohol Detox
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Drug Rehab
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Counseling
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Family Therapy
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Dual Diagnosis
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Relapse Prevention
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget appointment-form">
                    <h3 className="widget-title">Appointment</h3>
                    <p>
                      Consectetur adipiscing elit sed do eiusmod tempor
                      incididunt
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} action="#">
                      <div className="input-field">
                        <input type="text" placeholder="Full Name" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Departments" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Choose Doctors" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Date & Time" />
                      </div>
                      <div className="input-field">
                        <a href="tel:+917010768196" className="template-btn">
                          Appointment Now <i className="far fa-plus" />
                        </a>
                      </div>
                    </form>
                  </div>
                  <div className="widget working-schedule">
                    <h3 className="widget-title">Working Hour</h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Monday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Tuesday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Wednesday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Thursday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Friday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Saturday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Sunday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Area End ======*/}
        {/*====== Related Services Start ======*/}
        <section className="related-services bg-color-grey section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Popular Medical Services</span>
                  <h2 className="title">
                    Comprehensive De-addiction Therapies
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center service-loop">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="iconic-box mt-30">
                  <div className="icon">
                    <img src="assets/img/icon/heart.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Alcohol Detox</Link>
                  </h4>
                  <p>Medically supervised detoxification services.</p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="iconic-box mt-30">
                  <div className="icon">
                    <img src="assets/img/icon/lungs.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Drug Rehab</Link>
                  </h4>
                  <p>Structured programs to overcome dependency.</p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="iconic-box mt-30">
                  <div className="icon">
                    <img src="assets/img/icon/brain.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Counseling</Link>
                  </h4>
                  <p>Individual and group therapy sessions.</p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layouts>
  );
};
export default ServiceDetails;
