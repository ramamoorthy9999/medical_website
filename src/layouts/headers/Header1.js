import Link from "next/link";
import React, { useState } from "react";

import MobileMenu from "./MobileMenu";
import SlidePanel from "./SlidePanel";
import Image from "next/image";
import logo from "../../../public/rscarelogo.png";

const Header1 = ({ headerTopbar, position }) => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [mobileTrigger, setMobileTrigger] = useState(false);
  return (
    <header
      className={`template-header sticky-header header-one ${
        position ? position + "-header" : ""
      }`}
    >
      {headerTopbar && (
        <div className="header-topbar d-none d-md-block">
          <div className="container-fluid container-1400">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-4">
                <ul className="topbar-menu">
                  <li>
                    <Link href="/faq">Faq</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8">
                <ul className="contact-info">
                  <li>
                    <a href="#">
                      <i className="far fa-envelope" /> Email :
                      hotmail@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-phone" /> Call US : +012 (345) 6789
                    </a>
                  </li>
                  <li>
                    <div className="social-icons">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid container-1400">
        <div className="header-navigation">
          <div className="header-left">
            <div className="site-logo">
              <Link href="/">
                <a style={{ display: "block" }}>
                  <Image
                    src={logo}
                    alt="RS Care Foundation"
                    width={60}
                    height={60}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="header-center d-none d-xl-block">
            <nav className="site-menu menu-gap-left">
              <ul className="primary-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <Link href="/service">Services</Link>
                </li>
                <li>
                  <Link href="/gallery">Our Gallery</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <ul className="extra-icons">
              <li className="d-none d-xl-flex align-items-center">
                <a
                  href="tel:7010768196"
                  className="template-btn"
                  style={{
                    padding: "10px 25px",
                    fontSize: "16px",
                    backgroundColor: "transparent",
                    color: "#07294d",
                    border: "none",
                  }}
                >
                  <i className="far fa-phone" style={{ marginRight: "10px" }} />
                  +91-70107-68196
                </a>
              </li>
              <li
                className="d-none d-xl-flex align-items-center"
                style={{ marginLeft: "20px" }}
              >
                <a
                  href="tel:+917010768196"
                  className="template-btn"
                  style={{
                    padding: "10px 25px",
                    fontSize: "16px",
                    backgroundColor: "#07294d",
                    color: "#ffffff",
                    border: "1px solid #07294d",
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  Make an Appointment
                </a>
              </li>
              <li className="d-xl-none">
                <a
                  href="#"
                  className="navbar-toggler"
                  onClick={() => setMobileTrigger(true)}
                >
                  <span />
                  <span />
                  <span />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Start Off Canvas */}
      <SlidePanel
        sidebarTrigger={sidebarTrigger}
        setSidebarTrigger={() => setSidebarTrigger(false)}
      />
      {/* End Off Canvas */}
      {/* Start Mobile Panel */}
      <MobileMenu
        mobileTrigger={mobileTrigger}
        setMobileTrigger={() => setMobileTrigger(false)}
      />
      {/* Start Mobile Panel */}
    </header>
  );
};
export default Header1;
