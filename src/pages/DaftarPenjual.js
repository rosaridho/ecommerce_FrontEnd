import React, { Component } from "react";
import { Form } from "antd";
import axios from "axios";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

// const myReqUrl = "http://127.0.0.1:5000/penjual/register";
const myReqUrl = "http://localhost:8010/proxy/penjual/register";
// const myReqUrl = "https://mridhorosa.com/penjual/register";
const FormItem = Form.Item;

class DaftarPenjual extends Component {
  state = {
    penjual_email: "",
    penjual_password: "",
    penjual_username: "",
    penjual_namaLengkap: "",
    penjual_gender: "",
    penjual_lokasiKota: "",
    penjual_avatar: "",
  };

  handlepenjual_emailChange = event => {
    this.setState({ penjual_email: event.target.value });
  };
  handlepenjual_passwordChange = event => {
    this.setState({ penjual_password: event.target.value });
  };
  handlepenjual_usernameChange = event => {
    this.setState({ penjual_username: event.target.value });
  };
  handlepenjual_namaLengkapChange = event => {
    this.setState({ penjual_namaLengkap: event.target.value });
  };
  handlepenjual_genderChange = event => {
    this.setState({ penjual_gender: event.target.value });
  };
  handlepenjual_lokasiKotaChange = event => {
    this.setState({ penjual_lokasiKota: event.target.value });
  };

  handlepenjual_avatarChange = event => {
    this.setState({ penjual_avatar: event.target.value });
  };


  handleSubmit = event => {
    event.preventDefault();

    const obj = {
      penjual_email: this.state.penjual_email,
      penjual_password: this.state.penjual_password,
      penjual_username: this.state.penjual_username,
      penjual_namaLengkap: this.state.penjual_namaLengkap,
      penjual_gender: this.state.penjual_gender,
      penjual_lokasiKota: this.state.penjual_lokasiKota,
      penjual_avatar: this.state.penjual_avatar
      };
  
      const head = {
        "Content-Type": "application/json"
      };
  
      axios.post(myReqUrl, obj, head).then(res => {
        console.log(res);
        console.log(res.data);
      });
  
    }


  render() {
    console.log("signup", this.props);
    return (
      <section className="content signup">
        <div className="headerForm">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 offset-md-0">
                <div id="myLogoBlack2">
                  <p>WAWE</p>
                  <p style={{ fontSize: "30px" }}>WArunggaWE</p>
                  <h4>Hi Daftarkan akun Anda (PENJUAL)</h4>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
        <br />

        <div id="contentForm">
          {/* <div className="container-fluid"> */}
            <div className="row">
              <div className="col-md-4 col-sm-6 offset-md-0" />
              <div className="col-md-4 col-sm-6 offset-md-0">
                <Form onSubmit={this.handleSubmit} id="myForm">
                  <FormItem>
                    <label>
                      Nama Lengkap Penjual:{" "}
                      <input
                        type="text"
                        name="this.state.penjual_namaLengkap"
                        onChange={this.handlepenjual_namaLengkapChange}
                      />
                    </label>
                  </FormItem>
                  <FormItem>
                    <label>
                      Email:{" "}
                      <input
                        type="text"
                        name="this.state.penjual_email"
                        onChange={this.handlepenjual_emailChange}
                      />
                    </label>
                  </FormItem>


                  <FormItem>
                    <label>
                      Password:{" "}
                      <input
                        type="text"
                        name="this.state.penjual_password"
                        onChange={this.handlepenjual_passwordChange}
                      />
                    </label>
                  </FormItem>


                  <FormItem>
                    <label>
                      Username:{" "}
                      <input
                        type="text"
                        name="this.state.penjual_username"
                        onChange={this.handlepenjual_usernameChange}
                      />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Gender:{" "}
                      <div className="select-arrow">
                        <select
                          id="national"
                          name="this.state.gender"
                          onChange={this.handlepenjual_genderChange}
                          style={{ width: "100%" }}
                        >
                          <option></option>
                          <option>Laki-Laki</option>
                          <option>Perempuan</option>
                     
                        </select>
                      </div>
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Tempat tinggal:{" "}
                      <div className="select-arrow">
                        <select
                          id="national"
                          name="this.state.provinsi"
                          onChange={this.handlepenjual_lokasiKotaChange}
                          style={{ width: "100%" }}
                        >
                        <option></option>
                          <option>Aceh</option>
                          <option>Bali</option>
                          <option>Bangka Belitung</option>
                          <option>Banten</option>
                          <option>Bengkulu</option>
                          <option>Gorontalo</option>
                          <option>Jakarta</option>
                          <option>Jambi</option>
                          <option>Jawa Barat</option>
                          <option>Jawa Tengah</option>
                          <option>Jawa Timur</option>
                          <option>Kalimantan Barat</option>
                          <option>Kalimantan Selatan</option>
                          <option>Kalimantan Timur</option>
                          <option>Kalimantan Utara</option>
                          <option>Kepulauan Riau</option>
                          <option>Lampung</option>
                          <option>Maluku Utara</option>
                          <option>Maluku</option>
                          <option>Nusa Tenggara Barat</option>
                          <option>Nusa Tenggara Timur</option>
                          <option>Papua Barat</option>
                          <option>Papua</option>
                          <option>Riau</option>
                          <option>Sulawesi Selatan</option>
                          <option>Sulawesi Tengah</option>
                          <option>Sulawesi Tenggara</option>
                          <option>Sulawesi Utara</option>
                          <option>Sumatera Barat</option>
                          <option>Sumatera Selatan</option>
                          <option>Sumatera Utara</option>
                          <option>Yogyakarta</option>
                        </select>
                      </div>
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Link Profile gambar:{" "}
                      <input
                        type="text"
                        name="this.state.penjual_avatar"
                        onChange={this.handlepenjual_avatarChange}
                      />
                    </label>
                  </FormItem>

                 

                  <button id="mySubmit" type="submit">
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    );
  }
}

export default DaftarPenjual;
