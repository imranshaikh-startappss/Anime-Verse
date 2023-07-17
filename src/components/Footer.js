import React from "react";

function Footer() {
  return (
   <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 ">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h4>About</h4>
                  <ul>
                    <li>
                      <a href="#">Our story</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="#">Payments</a>
                    </li>
                    <li>
                      <a href="#">Returns/Exchange</a>
                    </li>
                    <li>
                      <a href="#">Shipment</a>
                    </li>
                    <li>
                      <a href="#">Terms & conditions</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-4">
                  <h4>Services</h4>
                  <span>Timings:10 AM - 6PM(Mon-Sat)<br></br>
                   Call: +91 8435651560<br></br>
                   E-Mail: Anime.com</span>
                </div>

                
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                © NEWBRAVE VENTURE PRIVATE LIMITED

                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

   </>
  );
}

export default Footer;
