import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const PrivacyPolicy = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Privacy Policy"} />
      <section className="privacy-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="privacy-content">
                <h3>Privacy Policy for RS Care Foundation</h3>
                <p>Last updated: December 15, 2025</p>

                <h4 className="mt-4">1. Introduction</h4>
                <p>
                  Welcome to RS Care Foundation. We are committed to protecting
                  your personal information and your right to privacy. If you
                  have any questions or concerns about this privacy notice, or
                  our practices with regards to your personal information,
                  please contact us.
                </p>

                <h4 className="mt-4">2. Information We Collect</h4>
                <p>
                  We collect personal information that you voluntarily provide
                  to us when you register on the website, express an interest in
                  obtaining information about us or our products and services,
                  when you participate in activities on the website or otherwise
                  when you contact us.
                </p>

                <h4 className="mt-4">3. How We Use Your Information</h4>
                <p>
                  We use personal information collected via our website for a
                  variety of business purposes described below. We process your
                  personal information for these purposes in reliance on our
                  legitimate business interests, in order to enter into or
                  perform a contract with you, with your consent, and/or for
                  compliance with our legal obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default PrivacyPolicy;
