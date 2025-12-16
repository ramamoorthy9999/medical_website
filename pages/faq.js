import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";

const Faq = () => {
  const [active, setActive] = useState("collapse1");
  const active_ = (value) => (value === active ? "active-accordion" : "");
  const [video, setVideo] = useState(false);
  return (
    <Layouts>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Help & FAQ"} bgnone />
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="faq-page-content pr-xl-4">
                <h3 className="faq-title">Frequently Asked Questions</h3>
                <p className="mb-35">
                  Find answers to common questions about our admission process,
                  treatment programs, and what to expect during your stay at RS
                  Care Foundation.
                </p>
                <Accordion
                  defaultActiveKey="collapse1"
                  className="accordion"
                  id="accordionFaq"
                >
                  <div className={`accordion-item ${active_("1")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse1"
                        onClick={() => setActive("1")}
                        data-toggle="collapse"
                      >
                        <span>What types of addictions do you treat?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse1">
                      <div className="accordion-content">
                        <p>
                          We specialize in treating alcohol and drug addictions,
                          including opioids, stimulants, benzodiazepines, and
                          more. Our comprehensive programs also address
                          co-occurring mental health disorders (dual diagnosis)
                          to ensure holistic recovery.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("2")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse2"
                        onClick={() => setActive("2")}
                        data-toggle="collapse"
                      >
                        <span>How long does the treatment program last?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse2">
                      <div className="accordion-content">
                        <p>
                          Treatment duration varies based on individual needs.
                          We offer various programs ranging from medical detox
                          (5-10 days) to residential rehabilitation (30, 60, or
                          90 days). Our team will assess your situation to
                          recommend the appropriate length of stay.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("3")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse3"
                        onClick={() => setActive("3")}
                        data-toggle="collapse"
                      >
                        <span>Do you offer family therapy?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse3">
                      <div className="accordion-content">
                        <p>
                          Yes, we believe family involvement is crucial for
                          long-term recovery. We offer family counseling
                          sessions to educate loved ones about addiction,
                          rebuild trust, and create a supportive home
                          environment for post-treatment life.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("4")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse4"
                        onClick={() => setActive("4")}
                        data-toggle="collapse"
                      >
                        <span>What happens after treatment?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse4">
                      <div className="accordion-content">
                        <p>
                          Recovery doesn&apos;t end when you leave our facility.
                          We provide a robust aftercare plan that may include
                          outpatient therapy, alumni support groups, and
                          continued counseling to help you maintain sobriety and
                          prevent relapse.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("5")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse5"
                        onClick={() => setActive("5")}
                        data-toggle="collapse"
                      >
                        <span>Is medical detox safe?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse5">
                      <div className="accordion-content">
                        <p>
                          Yes, our detox program is medically supervised 24/7.
                          Our clinical team uses evidence-based protocols to
                          manage withdrawal symptoms safely and comfortably,
                          minimizing risks and ensuring a smooth transition to
                          the next phase of treatment.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("6")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse6"
                        onClick={() => setActive("6")}
                        data-toggle="collapse"
                      >
                        <span>
                          There Is No Such Thing As A CSS Absolute Unit
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse6">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("7")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse7"
                        onClick={() => setActive("7")}
                        data-toggle="collapse"
                      >
                        <span>Primer On CSS Container Queries</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse7">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("8")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse8"
                        onClick={() => setActive("8")}
                        data-toggle="collapse"
                      >
                        <span>
                          Newly Supported, Modern CSS Pseudo-Class Selectors
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse8">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("9")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse9"
                        onClick={() => setActive("9")}
                        data-toggle="collapse"
                      >
                        <span>
                          Useful VS Code Extensions For Front-End Developers
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse9">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("10")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse10"
                        onClick={() => setActive("10")}
                        data-toggle="collapse"
                      >
                        <span>
                          There Is No Such Thing As A CSS Absolute Unit
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse10">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("11")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse11"
                        onClick={() => setActive("11")}
                        data-toggle="collapse"
                      >
                        <span>Primer On CSS Container Queries</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse11">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("11")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse11"
                        onClick={() => setActive("11")}
                        data-toggle="collapse"
                      >
                        <span>
                          Newly Supported, Modern CSS Pseudo-Class Selectors
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse11">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="faq-sidebar">
                <div className="search-widget mb-50">
                  <h3 className="search-title">Frequently Asked Questions</h3>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="search" placeholder="Search Here" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="video-widget">
                  <img src="assets/img/section-img/faq-video.jpg" alt="Image" />

                  <a
                    href="#"
                    className="video-popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setVideo(true);
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Faq;
