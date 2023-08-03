import React from "react";
import { Typography } from "@material-ui/core";
import { StyleFooter } from "./styled";
import SubscriptionForm from "../subscribe/styled/subscribe";
import LinksComponent from "../links/styled/links";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";

// const aboutLinks = [
//   { id: 1, title: "Our story", url: "#our story" },
//   { id: 2, title: "Contact us", url: "#contact us" },
//   { id: 3, title: "Careers", url: "#careers" },
//   { id: 4, title: "Privacy policy", url: "#privacy policy" },
// ];

// const supportLinks = [
//   { id: 5, title: "Payment", url: "#payment" },
//   { id: 6, title: "Return/Exchange", url: "#return/exchange" },
//   { id: 7, title: "Shipment", url: "#shipment" },
//   { id: 8, title: "Terms&condition", url: "#terms&condition" },
// ];

function Footer() {
  // const [about, setAbout] = useState({});
  // const [support, setSupport] = useState({});
  // const fetchData = async () => {
  //   const response = await fetch("linkData.json");
  //   try {
  //     const jsonData = await response.json();
  //     // console.log("jsonDAta", jsonData);
  //     setAbout(jsonData.aboutLinks);
  //     setSupport(jsonData.supportLinks);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("support links: ", support, "aboutLInks: ", about);

  return (
    <StyleFooter>
      <footer>
        <div className="section">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 p-5 ">
              <LinksComponent links={"aboutLinks"} title={"About"} />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-5">
              <LinksComponent links={"supportLinks"} title={"Support"} />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-5">
              <Typography variant="h5">Customer care</Typography>
              &nbsp;
              <Typography variant="body2">
                Timings: 10-6PM(Mon-Sat)
                <Typography variant="body2">Call: +91 8435651560</Typography>
                E-Mail:Anime.com
              </Typography>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-5">
              <Typography variant="h5">Subscribe</Typography>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Typography variant="body2">
                Enter your email below to be the first to know about new
                collections and product launches.
              </Typography>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <SubscriptionForm />
            </div>

            <hr />

            <div className="col ">
              <div className="last-section">
                <div className="socialIcons">
                  <NavLink to="https://www.facebook.com" target="_blank">
                    <FacebookIcon />
                  </NavLink>
                  <NavLink to="https://www.instagram.com" target="_blank">
                    <InstagramIcon />
                  </NavLink>
                </div>

                <div className=" col-mid-content">
                  <Typography variant="body-1">
                    <h5>© STARTAPPSS INDIA PRIVATE LIMITED</h5>
                  </Typography>
                </div>

                <div className="col-upi-image">
                  <img
                    src="assets/assets-pic/image2.jpg"
                    alt="Your Image"
                    width={220}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </StyleFooter>
  );
}
export default Footer;
