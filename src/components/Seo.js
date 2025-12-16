import Head from "next/head";
import React from "react";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {pageTitle
          ? `${pageTitle} | RS Care Foundation`
          : "RS Care Foundation | Best Alcohol and Drug De-addiction Centre in India"}
      </title>
      <meta
        name="description"
        content="RS Care Foundation is a leading Alcohol and Drug De-addiction Centre in India. We provide detox, rehabilitation, and counseling services."
      />
      <meta
        name="keywords"
        content="de-addiction, alcohol rehab, drug rehab, counseling, detox, RS Care Foundation"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default Seo;
