import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";

const GalleryIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [activeClass, setActiveClass] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-loop", {
        itemSelector: ".single-gallery",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setActiveClass(key);
  };
  return (
    <section className="gallery-section section-gap">
      <div className="container">
        <div className="gallery-filter mb-30">
          <ul>
            <li
              className={activeClass == "*" ? "active" : ""}
              data-filter="*"
              onClick={handleFilterKeyChange("*")}
            >
              Show All
            </li>
            <li
              className={activeClass == "therapy" ? "active" : ""}
              data-filter=".therapy"
              onClick={handleFilterKeyChange("therapy")}
            >
              Therapy
            </li>
            <li
              className={activeClass == "facilities" ? "active" : ""}
              onClick={handleFilterKeyChange("facilities")}
              data-filter=".facilities"
            >
              Facilities
            </li>
            <li
              className={activeClass == "activities" ? "active" : ""}
              onClick={handleFilterKeyChange("activities")}
              data-filter=".activities"
            >
              Activities
            </li>
            <li
              className={activeClass == "community" ? "active" : ""}
              onClick={handleFilterKeyChange("community")}
              data-filter=".community"
            >
              Community
            </li>
          </ul>
        </div>
        <div className="row gallery-loop gallery-filter-item">
          <div className="col-lg-4 col-sm-6 single-gallery therapy community">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/09.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Group Therapy <br /> Session
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery facilities therapy">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/10.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Individual <br /> Counseling
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery activities community">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/11.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Yoga & <br /> Meditation
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery therapy activities">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/12.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Art <br /> Therapy
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery facilities community">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/13.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Recreational <br /> Area
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery activities">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/14.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Outdoor <br /> Activities
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery therapy facilities">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/15.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Doctor <br /> Consultation
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery facilities community">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/16.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Community <br /> Lounge
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery therapy activities">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/17.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Music <br /> Therapy
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="read-more text-center mt-60">
          <a href="#" className="template-btn">
            View More Gallery <i className="far fa-plus"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default GalleryIsotop;
