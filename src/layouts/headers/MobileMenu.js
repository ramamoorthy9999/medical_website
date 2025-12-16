import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const MobileMenu = ({ mobileTrigger, setMobileTrigger }) => {
  const router = useRouter();
  const activeMenu = router.pathname;
  return (
    <div
      className={`slide-panel mobile-slide-panel ${
        mobileTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setMobileTrigger()} />
      <div className="panel-inner">
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li className={activeMenu === "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={activeMenu === "/about" ? "active" : ""}>
              <Link href="/about">About</Link>
            </li>
            <li className={activeMenu === "/service" ? "active" : ""}>
              <Link href="/service">Services</Link>
            </li>
            <li className={activeMenu === "/gallery" ? "active" : ""}>
              <Link href="/gallery">Our Gallery</Link>
            </li>
            <li className={activeMenu === "/contact" ? "active" : ""}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <a href="#" className="panel-close" onClick={() => setMobileTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
