import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store.js";
import loginPict from "../images/loginpict.jpg";

import "../styles/App.css";
import "../styles/bootstrap.min.css";

class SignInPenjual extends Component {
    
    doLogin = () =>{
    const self = this

    this.props.postLoginPenjual()
    .then(()=>{
      this.props.postLogin2Penjual();
    })
    .then(()=>{
      this.props.postLogin3Penjual();
    })
    .then(()=>{
      console.log("this", this);
      self.props.history.replace("./profilePenjual");
  });
  };

  render() {

    console.log("signinPenjual", this.props);
    return (
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
          <div style={{ color: "black" }}>
            <img
              src={loginPict}
              style={{ width: "100%", marginTop: "0px", height: "175px" }}
              alt=""
            />
            <div className="headerForm">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 col-sm-12 offset-md-0">
                    <div id="myLogoBlack2">
                      <p>WAWE</p>
                      <p style={{ fontSize: "15px" }}>WArunggaWE</p>
                      <p style={{ fontSize: "15px" }}>(Penjual)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-sm-6 offset-md-0" />
            <div className="col-md-2 col-sm-6 offset-md-0">
              <div style={{textAlign:"center", paddingBottom:"5px"}}>
                <input
                  type="text"
                  name="penjual_username"
                  placeholder="Penjual Username"
                  onChange={e => this.props.setField(e)}
                />
              </div>
              <div style={{textAlign:"center", paddingBottom:"5px"}}>
                <input
                  type="text"
                  name="penjual_id"
                  placeholder="Penjual ID"
                  onChange={e => this.props.setField(e)}
                />
              </div>
              <div style={{textAlign:"center", paddingBottom:"5px"}}>
                <input
                  type="password"
                  name="penjual_password"
                  placeholder="Penjual Password"
                  onChange={e => this.props.setField(e)}
                />
              </div>
              <div className="buttonSign" style={{textAlign:"center"}}>
                <button onClick={() => this.doLogin()}>Sign in</button>
              
                <p>
                  Belum punya akun Penjual?
                  <Link to={"/" + "daftar"}>
                    Daftar disini!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
     );
  }
}

export default connect(
    "is_loginPenjual, penjual_username, penjual_password, penjual_id",
    actions
) (withRouter(SignInPenjual));
