import React from "react";

const About_body = () => {
  return (
    <section>
      <div className="container col-lg-10 col-xl-10 d-flex justify-content-center">
        <div className="row justify-content-center w-100 mt-3">
          <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 rounded-lg text-center p-3">
            <img src="/avatars/Thang.jpg" alt="Image 1" className="img-fluid rounded-circle w-50" />
            <h1>Nguyen Quoc Thang</h1>
            <h2>+0906395035</h2>
            <p>523H0094@student.tdtu.edu.vn</p>
          </div>
          <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 rounded-lg text-center p-3">
            <img src="/avatars/Thuan.jpg" alt="Image 2" className="img-fluid  rounded-circle w-50" />
            <h1>Ngo Chi Thuan</h1>
            <h2>+987654321</h2>
            <p>523H0102@student.tdtu.edu.vn</p>
          </div>
          <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 rounded-lg text-center p-3">
            <img src="/avatars/Duong.jpg" alt="Image 3" className="img-fluid  rounded-circle w-50" />
            <h1>Pham Ngoc Duong</h1>
            <h2>+112233445</h2>
            <p>523H0016@student.tdtu.edu.vn</p>
          </div>

        </div>
      </div>


      <div className="container col-lg-10 col-xl-10">
        <p className="bg-secondary rounded pt-3 pb-3 mb-3 text-white text-center" style={{ padding: "5px", textAlign: "center" }}>
          Explore our collection – where beautiful and high-quality decor products are carefully selected to help you express your unique style and personality. Don't just live in a space, be the one who creates the space of your own!
        </p>
      </div>

      <div className="container col-10">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 border rounded p-3">
            <div className="card h-100">
              <div className="card-body">
                <h1>Our Mission</h1>
                <p>
                  At Decor Dream, our mission is to provide quality decor items
                  that help you personalize your space. Whether you are creating
                  a cozy living room or an elegant office, our products are
                  designed to reflect your unique style and preferences.
                </p>
              </div>
              <div className="card-footer text-left">

              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 border rounded p-3">
            <div className="card h-100">
              <div className="card-body">
                <h1>Our Values</h1>
                <p>
                  We value creativity, quality, and customer satisfaction. Every
                  item we offer is carefully selected to meet our high
                  standards, ensuring that you receive the best decor for your
                  space. Your satisfaction is our priority!
                </p>
              </div>
              <div className="card-footer text-left">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_body;
