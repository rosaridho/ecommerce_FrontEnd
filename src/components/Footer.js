import React, { Component } from "react";

import "../styles/App.css";
import "../styles/bootstrap.min.css";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="footerRow0">
            <div className="col-md-11 col-sm-12 offset-md-0" />
            <div className="col-md-1 col-sm-12 offset-md-0" />
          </div>
        </div>

        <div className="row">
          <div id="footerRow1" style={{ width: "100", marginTop: "0px" }}>
            <div className="col-md-2 col-sm-12 col-12 offset-md-1">
              <a
                href="https://www.facebook.com/"
                className="fa fa-facebook fa-2x"
              />
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a href="https://twitter.com/" className="fa fa-twitter fa-2x" />
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a
                href="https://www.youtube.com/"
                className="fa fa-youtube fa-2x"
              />
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a
                href="https://www.instagram.com/?hl=en"
                className="fa fa-instagram fa-2x"
              />
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a
                href="https://www.linkedin.com/feed/"
                className="fa fa-linkedin fa-2x"
              />
            </div>
            
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a href="#" className="textfooter">
                {" "}
                Tentang Kami
              </a>
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a href="#" className="textfooter">
                {" "}
                FAQ
              </a>
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a href="#" className="textfooter">
                {" "}
                Panduan Pembeli
              </a>
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a href="#" className="textfooter">
                {" "}
                Panduan Penjual
              </a>
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a href="#" className="textfooter">
                {" "}
                Hubungi Kami
              </a>
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <a href="#" className="textfooter">
                {" "}
                Karir
              </a>
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-4">
              <a href="#" className="textfooter">
                muhammadridhorosa@gmail.com
              </a>
            </div>
            <div className="col-md-2 col-sm-12 col-12 offset-md-0">
              <p id="copyright"> &copy; Copyright InaTech Group 2019</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
