import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EastIcon from "@mui/icons-material/East";
import { StyleFooter } from "./styled";
import TextField from "@mui/material/TextField";
import {Ullist} from "../footer/styled/index.js";
import SubscriptionForm from "../subscribe/styled/subscribe";



function Footer() { 
  return (
    <StyleFooter>
      <footer>
        <div className="section">
          <div className="row">
            <div className="col ">
              <div className="row">
                <div className="col p-5 ">
                  <h5>About</h5>
                  
                  <Ullist className=" ullist ">
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
                  </Ullist>
                </div>

                <div className="col p-5">
                  <h5>Support</h5>
              
                  <Ullist className="ullist">
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
                  </Ullist>
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

                  <SubscriptionForm/>
{/* 
                  <div>
                    <MailOutlineIcon />
                    <TextField className="mail"
                      id="standard-basic"
                      variant="standard"
                      placeholder="Enter your email"
                    />

                    <EastIcon />
                  </div> */}
                </div>
              </div>
              <hr />
              <div className="mt-4">
                <p className="main-hero-para text-center w-100">
                  © STARTAPPSS INDIA PRIVATE LIMITED
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </StyleFooter>
  );
}

export default Footer;
