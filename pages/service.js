import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";

import Layouts from "../src/layouts/Layouts";
import AppointmentForm from "../src/components/AppointmentForm";
import Seo from "../src/components/Seo";

const Service = () => {
  return (
    <Layouts footer={2}>
      <Seo pageTitle="Our Services" />
      <PageBanner
        title={"Our Services"}
        pageName="Services"
        pageTitleImage={
          "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1920&auto=format&fit=crop"
        }
      />
      <section className="services-area section-gap-top-less bg-color-grey">
        <div className="container">
          <div className="row justify-content-center service-loop">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/05.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon-detox.png" alt="Icon" />
                  </div>
                  <div className="content">
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
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/06.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon-counseling.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Individual Counseling</a>
                      </Link>
                    </h4>
                    <p>One-on-one sessions to address root causes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/07.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon-rehab.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Drug Rehabilitation</a>
                      </Link>
                    </h4>
                    <p>Structured programs to overcome dependency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/08.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon-family.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Family Counseling</a>
                      </Link>
                    </h4>
                    <p>Healing relationships and building support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/09.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon-group.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Group Therapy</a>
                      </Link>
                    </h4>
                    <p>Supportive environment to share experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/10.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon-yoga.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Yoga</a>
                      </Link>
                    </h4>
                    <p>
                      Holistic practices to restore mental peace and inner
                      balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Service Area End ======--> */}

      {/* <!--====== Appointment Section Start ======--> */}
      <AppointmentForm />
      {/* <!--====== Appointment Section End ======--> */}

      {/* <!--====== Feature Section Start ======--> */}
      <section className="feature-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-6 order-lg-last">
              <div className="feature-img text-center text-lg-right">
                <img src="" alt="Doctor Consultation" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="feature-text mt-md-50">
                <div className="section-heading mb-30">
                  <span className="tagline">How Can We Help</span>
                  <h2 className="title">
                    Flexible & Responsive to Changing Needs
                  </h2>
                </div>
                <p>
                  We provide a safe, supportive, and confidential environment
                  for individuals seeking to overcome addiction. Our holistic
                  approach integrates medical treatment with psychological
                  support to ensure lasting recovery.
                </p>
                <div className="row">
                  <div className="col-lg-5 col-sm-6">
                    <div
                      className="simple-icon mt-40 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-stethoscope"></i>
                      </div>
                      <h4 className="title">Expert Specialists</h4>
                      <p>
                        Compassionate and experienced addiction specialists.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div
                      className="simple-icon mt-40 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="flaticon-checkup"></i>
                      </div>
                      <h4 className="title">Supportive Environment</h4>
                      <p>A safe, judgment-free space for your recovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Service;
