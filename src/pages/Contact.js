import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <section className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52912.28956520811!2d-6.80295935!3d34.0177464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b9194140af1%3A0x13366c999246615c!2z2LXZiNmF2LnYqSDYrdiz2KfZhg!5e0!3m2!1sar!2sma!4v1677029248433!5m2!1sar!2sma"
                width="100%"
                height="450"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                title="Rabat"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
