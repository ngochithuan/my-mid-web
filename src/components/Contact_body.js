import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Contact_body = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tyv6xih', 'template_hb4tf5b', form.current, {
        publicKey: '1xoBs8JUy46rw8VKx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          const form = document.getElementById("contact-form");
          form.reset();
          alert("Sent gmail to Decor Dream Team");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Something went wrong!");
        },
      );
  };
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Drop us a message</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form shadow p-4">
              <h2 className="text-center mb-3">Contact Us</h2>
              <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button type="submit" value="Send" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="map shadow" style={{ height: "100%" }}>
              <img src="/contact.png" alt="Contact" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
        <div className="footer text-center mt-4 p-3 bg-light">
          <p>
            <strong>Address:</strong> 19 Nguyen Huu Tho, Tan Phong Ward, District 7, HCM City, Vietnam
          </p>
          <p>
            <strong>Phone:</strong> +1235 2355 98
          </p>
          <p>
            <strong>Email:</strong> ngochithuan.dev@gmail.com
          </p>
          <p>
            <strong>Website:</strong> decordream.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact_body;
