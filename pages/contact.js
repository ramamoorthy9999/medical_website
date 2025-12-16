import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import AppointmentForm from "../src/components/AppointmentForm";
import Seo from "../src/components/Seo";

const Contact = () => {
  return (
    <Layouts footer={2}>
      <Seo pageTitle="Contact Us" />
      <PageBanner
        title={"Contact Us"}
        pageTitleImage={
          "https://images.unsplash.com/photo-1423666639041-f14d05105305?q=80&w=1920&auto=format&fit=crop"
        }
      />
      {/*====== Page Title End ======*/}
      {/*====== Contact Info Section Start ======*/}
      <section className="section-gap contact-top-wrappper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="contact-info-wrapper">
                <div className="row text-center text-md-start">
                  <div className="col-12 mb-40">
                    <div className="single-contact-info border-0 p-0">
                      <h3 className="info-title mb-4">
                        <i className="fal fa-map-marker-alt" /> Addresses
                      </h3>
                      <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                          <div className="single-contact-info h-100">
                            <h5 className="mb-3">Head Office</h5>
                            <p>
                              4/510F, near SAMAYAPURATHU AMMAN KOIL EAST,
                              Andavar Nagar, Namakkal, Tamil Nadu 637002
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="single-contact-info h-100">
                            <h5 className="mb-3">Branch 1</h5>
                            <p>
                              4/167C, TRICHY ROAD, AVS COMPLEX, N Pudupatti,
                              Namakkal-637020
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="single-contact-info h-100">
                            <h5 className="mb-3">Branch 2</h5>
                            <p>
                              No. 167, Sundarraj Nagar 2nd Street, Near Sundara
                              Vinayagar Alayam, Subramaniyapuram, Trichy - 20.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-contact-info h-100">
                      <h3 className="info-title">
                        <i className="fal fa-phone" /> Get In Touch
                      </h3>
                      <ul>
                        <li>
                          <span>Phone Number</span>
                          <a href="tel:+917010768196">+91-70107-68196</a>
                        </li>
                        <li>
                          <span>Email Address</span>
                          <a href="mailto:ramamoorthy9999@gmail.com">
                            ramamoorthy9999@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-contact-info h-100">
                      <h3 className="info-title">
                        <i className="fal fa-comments" /> Follow Us
                      </h3>
                      <p>
                        Connect with us on social media for updates and support.
                      </p>
                      <p className="social-icon">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Contact Info Section End ======*/}
      {/*====== Contact Form Start ======*/}
      <section className="contact-form-area">
        <div className="contact-map">
          <iframe
            src="https://maps.google.com/maps?q=RS%20Care%20Foundation%2C%20Namakkal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>
        <AppointmentForm />
      </section>
    </Layouts>
  );
};
export default Contact;
