import React from "react";

import { StyleFooter } from "./styled";

import SubscriptionForm from "../subscribe/styled/subscribe";
import LinksComponent from "../links/styled/links";

const aboutLinks = [
  { id: 1, title: "Our story", url: "#our story" },
  { id: 2, title: "Contact us", url: "#contact us" },
  { id: 3, title: "Careers", url: "#careers" },
  { id: 4, title: "Privacy policy", url: "#privacy policy" },
];

const supportLinks = [
  { id: 5, title: "Payment", url: "#payment" },
  { id: 6, title: "Return/Exchange", url: "#return/exchange" },
  { id: 7, title: "Shipment", url: "#shipment" },
  { id: 8, title: "Terms&condition", url: "#terms&condition" },
];

function Footer() {
  return (
    <StyleFooter>
      <footer>
        <div className="section">
          <div className="row">
            <div className="col p-5 ">
              <LinksComponent links={aboutLinks} title={"About"} />
            </div>

            <div className="col p-5">
              <LinksComponent links={supportLinks} title={"Support"} />
            </div>

            <div className="col p-5">
              <h5>Customer care</h5>
              <br></br>
              <span>
                Timings:10-6PM(Mon-Sat)<br></br>
                Call: +91 8435651560<br></br>
                E-Mail: Anime.com
              </span>
            </div>

            <div className="col p-5">
              <h5>Subscribe</h5>
              <br></br>
              <span>
                Enter your email below to be the first to know about new
                collections and product launches.
              </span>
              <br></br>
              <br></br>

              <SubscriptionForm />
            </div>
          </div>
          <hr />
          <div className="mt-4">
            <p className="main-hero-para text-center w-100">
              © STARTAPPSS INDIA PRIVATE LIMITED
            </p>
          </div>
        </div>
      </footer>
    </StyleFooter>
  );
}

export default Footer;
