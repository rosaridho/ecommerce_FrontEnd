import React, { Component } from "react";
import { Form } from "antd";
import axios from "axios";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

// const myReqUrl = "http://127.0.0.1:5000/pembeli/register";
const myReqUrl = "http://localhost:8010/proxy/pembeli/register";
// const myReqUrl = "https://mridhorosa.com/pembeli/register";
const FormItem = Form.Item;

class Daftar extends Component {
  state = {
    namaLengkap: "",
    email: "",
    confEmail: "",
    pass: "",
    confPass: "",
    username: "",
    gender: "",
    provinsi: "",
    pekerjaan: "",
    avatar:""
  };

  handlenamaLengkapChange = event => {
    this.setState({ namaLengkap: event.target.value });
  };
  handleemailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlepassChange = event => {
    this.setState({ pass: event.target.value });
  };
  handleusernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlegenderChange = event => {
    this.setState({ gender: event.target.value });
  };
  handleprovinsiChange = event => {
    this.setState({ provinsi: event.target.value });
  };

  handlepekerjaanChange = event => {
    this.setState({ pekerjaan: event.target.value });
  };

  handleavatarChange = event => {
    this.setState({ avatar: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    var variables = document.getElementById("myForm");

    this.state.namaLengkap = variables[0].value;
    this.state.email = variables[1].value;
    this.state.confEmail = variables[2].value;
    this.state.pass = variables[3].value;
    this.state.confPass = variables[4].value;
    this.state.username = variables[5].value;
    this.state.gender = variables[6].value;
    this.state.provinsi = variables[7].value;
    this.state.pekerjaan = variables[8].value;
    this.state.avatar = variables[9].value;


    // 
    if (
        this.state.namaLengkap === "" ||
        this.state.email === "" ||
        this.state.confEmail === "" ||
        this.state.pass === "" ||
        this.state.confPass === "" ||
        this.state.username === "" ||
        this.state.gender === "" ||
        this.state.provinsi === "" ||
        this.state.pekerjaan === ""
      ) {
        alert("Anda harus mengisi semua data registrasi");
        return false;
      } else {
        if (this.state.pass !== this.state.confPass) {
          alert("Password konfirmasi harus sama");
          return false;
        }
        if (this.state.email !== this.state.confEmail) {
          alert("Email konfirmasi harus sama");
          return false;
        }
        // additional features
        // username at least 6 letters
        var username_length = this.state.username.length;
        if (username_length < 7) {
          alert("Username harus lebih dari 6 karakter");
          return false;
        }
        // password at least 6 letters
        var pass_length = this.state.pass.length;
        if (pass_length < 7) {
          alert("Password harus lebih dari 6 karakter");
          return false;
        }
        // // regex email
        var pattern = /\S+@\S+\.\S+/;
        var regexResult = pattern.test(this.state.email);
        if (regexResult !== true) {
          alert("Masukkan data email yang benar");
          return false;
        } else {
        //   
        const obj = {
            pembeli_email: this.state.email,
            pembeli_password: this.state.pass,
            pembeli_username: this.state.username,
            pembeli_namaLengkap: this.state.namaLengkap,
            pembeli_gender: this.state.gender,
            pembeli_lokasiKota: this.state.provinsi,
            pembeli_pekerjaan: this.state.pekerjaan,
            pembeli_avatar: this.state.avatar
          };
      
          const head = {
            "Content-Type": "application/json"
          };
      
          axios.post(myReqUrl, obj, head).then(res => {
            console.log(res);
            console.log(res.data);
          });
        };
        }
        alert("Registrasi Berhasil! Selamat Bergabung! :)")
        window.location.reload();
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
                  <h4>Hi Daftarkan akun Anda (PEMBELI)</h4>
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
                      Nama Lengkap Pembeli:{" "}
                      <input
                        type="text"
                        name="this.state.namaLengkap"
                        onChange={this.handlenamaLengkapChange}
                      />
                    </label>
                  </FormItem>
                  <FormItem>
                    <label>
                      Email:{" "}
                      <input
                        type="text"
                        name="this.state.email"
                        onChange={this.handleemailChange}
                      />
                    </label>
                  </FormItem>
                  <FormItem>
                    <label>
                      Konfirmasi Email:{" "}
                      <input type="text" name="this.state.confEmail" />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Password:{" "}
                      <input
                        type="text"
                        name="this.state.pass"
                        onChange={this.handlepassChange}
                      />
                    </label>
                  </FormItem>
                  <FormItem>
                    <label>
                      Konfirmasi Password:{" "}
                      <input type="text" name="this.state.confPass" />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Username:{" "}
                      <input
                        type="text"
                        name="this.state.username"
                        onChange={this.handleusernameChange}
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
                          onChange={this.handlegenderChange}
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
                          onChange={this.handleprovinsiChange}
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
                      Pekerjaan:{" "}
                      <div className="select-arrow">
                        <select
                          name="this.state.pekerjaan"
                          onChange={this.handlepekerjaanChange}
                          style={{ width: "100%" }}
                        >
                        <option></option>
                          <option>Arsitek</option>
                          <option>Bidan</option>
                          <option>Dokter</option>
                          <option>Fotografer</option>
                          <option>Petani</option>
                          <option>Nelayan</option>
                          <option>Koki</option>
                          <option>Model</option>
                          <option>Programmer</option>
                          <option>Seniman</option>
                          <option>Teknik</option>
                          <option>Wartawan</option>
                        </select>
                      </div>
                    </label>
                  </FormItem>
                  <FormItem>
                    <label>
                      Link Profile Avatar:{" "}
                      <input
                        type="text"
                        name="this.state.avatar"
                        onChange={this.handleavatarChange}
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

export default Daftar;