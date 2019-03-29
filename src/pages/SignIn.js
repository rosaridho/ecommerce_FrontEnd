import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store.js";
import loginPict from "../images/loginpict.jpg";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

class SignIn extends Component {
    
    doLogin = () =>{
    const self = this

    this.props.postLogin()
    .then(()=>{
      this.props.postLogin2();
    })
    .then(()=>{
      this.props.postLogin3();
    })
    .then(()=>{
      this.props.postLogin4();
    })
    .then(()=>{
      console.log("this", this);
      self.props.history.replace("./profile");
  });
  };

  render() {

    console.log("signin", this.props);
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
                      <p style={{ fontSize: "15px" }}>(Pembeli)</p>
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
                  name="pembeli_username"
                  placeholder="Pembeli Username"
                  onChange={e => this.props.setField(e)}
                />
              </div>
              <div style={{textAlign:"center", paddingBottom:"5px"}}>
                <input
                  type="password"
                  name="pembeli_password"
                  placeholder="Pembeli Password"
                  onChange={e => this.props.setField(e)}
                />
              </div>
              <div className="buttonSign" style={{textAlign:"center"}}>
                <button onClick={() => this.doLogin()}>Sign in</button>
              
                <p>
                  Belum punya akun?
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
    "is_login, pembeli_username, pembeli_password",
    actions
) (withRouter(SignIn));
