import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/rscarelogo.png";

const Footer1 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`}
    >
      {!noNewsletters && (
        <div className="cta-boxed-one">
          <div className="container">
            <div
              className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
              style={{
                backgroundImage: "url(assets/img/cta-img/consultation-cta.png)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="cta-content text-center">
                    <div className="section-heading heading-white">
                      <span className="tagline">Get Free Consultations</span>
                      <h2 className="title">
                        Looking a Doctors to Get Your Services
                      </h2>
                    </div>
                    <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                      <li>
                        <Link href="/contact">
                          <a className="template-btn template-btn-white">
                            Get Free Quote <i className="far fa-plus" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="tel:+917010768196"
                          className="template-btn template-btn-bordered"
                        >
                          Get Appointment <i className="far fa-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-inner bg-color-grey">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-4 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <a>
                        <Image
                          src={logo}
                          alt="RS Care Foundation"
                          width={70}
                          height={70}
                        />
                      </a>
                    </Link>
                  </div>
                  <ul className="contact-list">
                    <li>
                      <a href="https://www.google.com/maps/search/?api=1&query=4/510F,+near+SAMAYAPURATHU+AMMAN+KOIL,+EAST,+Andavar+Nagar,+Namakkal,+Tamil+Nadu+637002">
                        <i className="far fa-map-marker-alt" />
                        4/510F, near SAMAYAPURATHU AMMAN KOIL EAST, Andavar
                        Nagar, Namakkal, Tamil Nadu 637002
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-map-marker-alt" />
                        4/167C, TRICHY ROAD,
                        <br /> AVS COMPLEX, N Pudupatti
                        <br /> Namakkal-637020
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-map-marker-alt" />
                        No. 167, Sundarraj Nagar 2nd Street, Near Sundara
                        Vinayagar Alayam, Subramaniyapuram, Trichy - 20.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
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
                  <div className="col-lg-4 col-md-6">
                    <div className="widget nav-widget">
                      <h4 className="widget-title">Quick Links</h4>
                      <ul className="nav-links">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/service">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="widget text-widget">
                      <h4 className="widget-title">Contact Us</h4>
                      <ul className="contact-list">
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
                      <ul
                        className="social-links d-flex align-items-center"
                        style={{
                          gap: "20px",
                          listStyle: "none",
                          padding: 0,
                          marginTop: "20px",
                        }}
                      >
                        <li>
                          <a href="#" style={{ color: "inherit" }}>
                            <FaFacebookF size={24} />
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ color: "inherit" }}>
                            <FaInstagram size={24} />
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ color: "inherit" }}>
                            <FaYoutube size={26} />
                          </a>
                        </li>
                      </ul>
                    </div>
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
export default Footer1;
