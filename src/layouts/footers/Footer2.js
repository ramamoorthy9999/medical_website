import React from "react";

const Footer2 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer template-footer-white ${
        noNewsletters ? "" : "have-cta-boxes-two"
      }`}
    >
      {!noNewsletters && (
        <div className="cta-boxes-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/cta-img/cta-boxed-2-1.jpg)",
                  }}
                >
                  <h2 className="cta-title">
                    Looking a Doctors For Health Care
                  </h2>
                  <a href="#" className="template-btn template-btn-bordered">
                    Find Doctor <i className="far fa-plus" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/cta-img/cta-boxed-2-2.jpg)",
                  }}
                >
                  <h2 className="cta-title">Make Appointment Online (24/7)</h2>
                  <a
                    href="tel:+917010768196"
                    className="template-btn template-btn-bordered"
                  >
                    Appointment <i className="far fa-plus" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/cta-img/cta-boxed-2-3.jpg)",
                  }}
                >
                  <h2 className="cta-title">Innovative Psychial Therapist</h2>
                  <a href="#" className="template-btn template-btn-bordered">
                    Find Doctor <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-inner bg-color-primary">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo-white-2.png" alt="Medibo" />
                  </div>
                  <p>
                    Sed ut perspi unde omniste natus error sit voluptatem acc
                    doloremque laudantium
                  </p>
                  <ul className="contact-list">
                    <li>
                      <a href="https://www.google.com/maps/search/?api=1&query=4/510F,+near+SAMAYAPURATHU+AMMAN+KOIL,+EAST,+Andavar+Nagar,+Namakkal,+Tamil+Nadu+637002">
                        <i className="far fa-map-marker-alt" />
                        4/510F, near SAMAYAPURATHU AMMAN KOIL, EAST, Andavar
                        Nagar, Namakkal, Tamil Nadu 637002
                      </a>
                    </li>
                    <li>
                      <a href="mailto:ramamoorthy9999@gmail.com">
                        <i className="far fa-envelope" />
                        ramamoorthy9999@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:7010768196">
                        <i className="far fa-phone" />
                        +91-70107-68196
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">Popular Services</h4>
                        <ul className="nav-links">
                          <li>
                            <a href="#">Alcohol Detox</a>
                          </li>
                          <li>
                            <a href="#">Drug Rehab</a>
                          </li>
                          <li>
                            <a href="#">Counseling</a>
                          </li>
                          <li>
                            <a href="#">Family Therapy</a>
                          </li>
                          <li>
                            <a href="#">Relapse Prevention</a>
                          </li>
                          <li>
                            <a href="#">Dual Diagnosis</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">About Us</h4>
                        <ul className="nav-links">
                          <li>
                            <a href="#">Success Story</a>
                          </li>
                          <li>
                            <a href="#">Need a Career ?</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Need Support ?</a>
                          </li>
                          <li>
                            <a href="#">Doctors</a>
                          </li>
                          <li>
                            <a href="#">Latest News</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  {/* Newsletters removed style={{ display: 'none' }} */}
                  <div className="opening-notice mt-30">
                    <h6>
                      <i className="far fa-clock" /> Opening Hours
                    </h6>
                    <p>Sun - Friday, 08:00 am - 05:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © {new Date().getFullYear()} <a href="#">RS Care Foundation</a>.
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
