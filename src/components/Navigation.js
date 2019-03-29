import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store.js";
import "../styles/App.css";

class Navigation extends Component {
  /*===============================init============================= */

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      username: "",
      pass: "",
      token: ""
    };
  }
  /*===============================function============================= */

  refreshPage() {
    // window.location.reload();
  }

  /*===============================function============================= */

  render() {
    return (
      <header>
        <div
          className="container-fluid"
          style={{ position: "relative", zIndex: "25" }}
        >
          <div className="row">
            <nav className="navbar navbar-inverse" style={{ margin: "0" }}>
              <div className="col-md-1 col-sm-12 offset-md-0">
                <div className="width2">
                  <div
                    className="navbar-header"
                    style={{ paddingTop: "10px", paddingRight: "0px" }}
                  >
                    <Link to={"/" + "home"}>
                      <div id="myLogo">
                        <p>WArunggaWE</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0">
                <div className="width3">
                  <div className="navbar-header" style={{ paddingTop: "10px" }}>
                    <Link to={"/" + "home"}>
                      <div id="myLogo">
                        <p>Home</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0" style={{padding:"0"}}>
                <div className="width4">
                  <div className="dropdown" >
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Kategori
                    </button>
                    <ul className="dropdown-menu">
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Arsitek"}>Arsitek</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Arsitek"}>Umum</Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Fotografer"}>Fotografer</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Fotografer"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Kesehatan"}>Kesehatan</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Kesehatan"}>Umum</Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Koki"}>Koki</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Koki"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Model"}>Model</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Model"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Nelayan"}>Nelayan</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Nelayan"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Petani"}>Petani</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Petani"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Programmer"}>Programmer</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Programmer"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Seniman"}>Seniman</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Seniman"}>Umum</Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Seniman-Musik"}>
                              Musik
                            </Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Seniman-Pematung"}>
                              Pematung
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Teknik"}>Teknik</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Teknik"}>Umum</Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Teknik-Elektro"}>
                              Elektro
                            </Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Teknik-Mesin"}>
                              Mesin
                            </Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Teknik-Kimia"}>
                              Kimia
                            </Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Teknik-Sipil"}>
                              Sipil
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/kategori/" + "Wartawan"}>Wartawan</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/kategori/" + "Wartawan"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="col-md-1 col-sm-12 offset-md-0">
                <div className="width4">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Popular
                    </button>
                    <ul className="dropdown-menu">
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/populdar/" + "Arsitek"}>Arsitek</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Arsitek"}>Umum</Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Fotografer"}>Fotografer</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Fotografer"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Kesehatan"}>Kesehatan</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Kesehatan"}>Umum</Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Koki"}>Koki</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Koki"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Model"}>Model</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Model"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Nelayan"}>Nelayan</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Nelayan"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Petani"}>Petani</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Petani"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Programmer"}>Programmer</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Programmer"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Seniman"}>Seniman</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Seniman"}>Umum</Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Seniman-Musik"}>
                              Musik
                            </Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Seniman-Pematung"}>
                              Pematung
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Teknik"}>Teknik</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Teknik"}>Umum</Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Teknik-Elektro"}>
                              Elektro
                            </Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Teknik-Mesin"}>
                              Mesin
                            </Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Teknik-Kimia"}>
                              Kimia
                            </Link>
                          </li>
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Teknik-Sipil"}>
                              Sipil
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="dropdown-submenu"
                        onClick={this.refreshPage}
                      >
                        <Link to={"/popular/" + "Wartawan"}>Wartawan</Link>
                        <ul className="dropdown-menu">
                          <li onClick={this.refreshPage}>
                            <Link to={"/popular/" + "Wartawan"}>Umum</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0">
                <div id="iconprofile" >
                  <Link
                    to={"/" + "signinPenjual"}
                    className="btn btn-default"
                    role="button"
                    
                  >
                    <i className="fas fa-sign-in-alt fa-1x">Login Penjual</i>
                  </Link>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0">
                <div id="iconlogin">
                  <Link
                    to={"/" + "signin"}
                    className="btn btn-default"
                    role="button"
                  >
                    <i className="fas fa-sign-in-alt fa-1x">Login Pembeli</i>
                  </Link>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0">
                <div id="iconlogout">
                  <Link
                    to="/signin"
                    onClick={() => this.props.postSignut()}
                    className="btn btn-default"
                    role="button"
                  >
                    <i className="fas fa-sign-out-alt fa-1x">Logout</i>
                  </Link>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0">
                <div id="iconprofile">
                  <Link
                    to={"/" + "profilePenjual"}
                    className="btn btn-default"
                    role="button"
                  >
                    <i className="fas fa-user fa-1x">Data Penjual</i>
                  </Link>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0">
                <div id="iconprofile">
                  <Link
                    to={"/" + "profile"}
                    className="btn btn-default"
                    role="button"
                  >
                    <i className="fas fa-user fa-1x">Data Pembeli</i>
                  </Link>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0">
                <div id="iconcart">
                <Link
                    to={"/" + "cart"}
                    className="btn btn-default"
                    role="button"
                  >
                   <i className="fas fa-shopping-cart fa-1x">Cart</i>
                  </Link>
                </div>
              </div>

              
              <div className="col-md-1 col-sm-12 offset-md-0">
                <div id="icondaftar">
                  <Link
                    to={"/" + "daftarPenjual"}
                    className="btn btn-default"
                    role="button"
                  >
                    <i className="fas fa-users fa-1x">DaftarSeller</i>
                  </Link>
                </div>
              </div>

              <div className="col-md-1 col-sm-12 offset-md-0">
                <div id="icondaftar">
                  <Link
                    to={"/" + "daftar"}
                    className="btn btn-default"
                    role="button"
                  >
                    <i className="fas fa-users fa-1x">Daftar</i>
                  </Link>
                </div>
              </div>

            </nav>
            <div id="headerRow0">
              <footer className="container-fluid">
                <div className="row">
                  <div className="col-md-12 col-sm-12 offset-md-0" />
                </div>
              </footer>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(
  "is_login",
  "pembeli_username",
  "pembeli_password",
  "pembeli_token",
  actions
)(withRouter(Navigation));
