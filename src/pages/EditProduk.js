import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store.js";
import { Form } from "antd";
import axios from "axios";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const FormItem = Form.Item;

class EditProduk extends Component {
  state = {
    penjual_id: "",
    produk_nama: "",
    produk_harga: "",
    produk_deskripsi: "",
    produk_gambar: "",
    produk_stok: "",
    produk_kategori: "",
    produk_subkategori: "",
    produk_statusPromo: "",
    produk_diskon: "",
    produk_tanggalPost: "",
    produk_Jumlahdibeli: ""
  };

  handleproduk_idChange = event => {
    this.setState({ produk_id: event.target.value });
  };

  handlepenjual_idChange = event => {
    this.setState({ penjual_id: event.target.value });
  };

  handleproduk_namaChange = event => {
    this.setState({ produk_nama: event.target.value });
  };
  handleproduk_hargaChange = event => {
    this.setState({ produk_harga: event.target.value });
  };
  handleproduk_deskripsiChange = event => {
    this.setState({ produk_deskripsi: event.target.value });
  };
  handleproduk_gambarChange = event => {
    this.setState({ produk_gambar: event.target.value });
  };

  handleproduk_stokChange = event => {
    this.setState({ produk_stok: event.target.value });
  };

  handleproduk_kategoriChange = event => {
    this.setState({ produk_kategori: event.target.value });
  };

  handleproduk_subkategoriChange = event => {
    this.setState({ produk_subkategori: event.target.value });
  };

  handleproduk_statusPromoChange = event => {
    this.setState({ produk_statusPromo: event.target.value });
  };

  handleproduk_diskonChange = event => {
    this.setState({ produk_diskon: event.target.value });
  };

  handleproduk_tanggalPostChange = event => {
    this.setState({ produk_tanggalPost: event.target.value });
  };

  handleproduk_JumlahdibeliChange = event => {
    this.setState({ produk_Jumlahdibeli: event.target.value });
  };




  handleSubmit = event => {
    event.preventDefault();

    var variables = document.getElementById("myForm");

    this.state.produk_id = variables[0].value;
    this.state.penjual_id = variables[1].value;
    this.state.produk_nama = variables[2].value;
    this.state.produk_harga = variables[3].value;
    this.state.produk_deskripsi = variables[4].value;
    this.state.produk_gambar = variables[5].value;
    this.state.produk_stok = variables[6].value;
    this.state.produk_kategori = variables[7].value;
    this.state.produk_subkategori = variables[8].value;
    this.state.produk_statusPromo = variables[9].value;
    this.state.produk_diskon = variables[10].value;
    this.state.produk_tanggalPost = variables[11].value;
    


      const obj = {
        produk_id: this.state.produk_id,
        penjual_id: this.state.penjual_id,
        produk_nama: this.state.produk_nama,
        produk_harga: this.state.produk_harga,
        produk_deskripsi: this.state.produk_deskripsi,
        produk_gambar: this.state.produk_gambar,
        produk_stok: this.state.produk_stok,
        produk_kategori: this.state.produk_kategori,
        produk_subkategori: this.state.produk_subkategori,
        produk_statusPromo: this.state.produk_statusPromo,
        produk_diskon: this.state.produk_diskon,
        produk_hargaDiskon: this.state.produk_hargaDiskon,
        produk_tanggalPost: this.state.produk_tanggalPost,
        produk_Jumlahdibeli: this.state.produk_Jumlahdibeli
        };
    
        const config = {
          headers: 
          // [ 
            {Authorization: "Bearer " + this.props.api_keyPenjual},
            // {"Content-Type": "application/json"}
            // { 'X-Requested-With' : "http://127.0.0.1:5000"}
          // ]
        };

        // const heroku = "https://cors-anywhere.herokuapp.com/"
        const urgentUrl =  'http://localhost:8010/proxy/penjual/produk/' + this.props.penjual_id 
        
        axios
        // .put(myReqUrl + this.props.pembeli_id, obj, config)
        .put(urgentUrl, obj, config)
        .then(res => {
          console.log(res.data);
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
      };



  render() {
    
    return (
      <section className="content signup">
        <div className="headerForm">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 offset-md-0">
                <div id="myLogoBlack2">
                  <p>WAWE</p>
                  <p style={{ fontSize: "30px" }}>WArunggaWE</p>
                  <h4>Silahkan Edit Data Produk Jualan Anda</h4>
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
                      Produk ID:{" "}
                      <input
                        type="number"
                        name="this.state.produk_id"
                        onChange={this.handleproduk_idChange}
                      />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Penjual ID:{" "}
                      <input
                        type="number"
                        name="this.state.penjual_id"
                        onChange={this.handlepenjual_idChange}
                      />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Nama Produk:{" "}
                      <input
                        type="text"
                        name="this.state.produk"
                        onChange={this.handleproduk_namaChange}
                      />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Harga:{" "}
                      <input
                        type="number"
                        name="this.state.produk_harga"
                        onChange={this.handleproduk_hargaChange}
                      />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                    Produk Deskripsi:{" "}
                      <input
                        type="text"
                        name="this.state.produk_deskripsi"
                        onChange={this.handleproduk_deskripsiChange}
                      />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                    Link Gambar:{" "}
                      <input
                        type="text"
                        name="this.state.produk_gambar"
                        onChange={this.handleproduk_gambarChange}
                      />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                    Jumlah Stok Tersedia:{" "}
                      <input
                        type="number"
                        name="this.state.produk_stok"
                        onChange={this.handleproduk_stokChange}
                      />
                    </label>
                  </FormItem>


                  <FormItem>
                    <label>
                      Kategori Produk:{" "}
                      <div className="select-arrow">
                        <select
                          id="national"
                          name="this.state.produk_kategori"
                          onChange={this.handleproduk_kategoriChange}
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
                      Subkategori Produk:{" "}
                      <div className="select-arrow">
                        <select
                          name="this.state.produk_subkategori"
                          onChange={this.handleproduk_subkategoriChange}
                          style={{ width: "100%" }}
                        >
                        <option></option>
                          <option>Umum</option>
                          <option>Elektro</option>
                          <option>Sipil</option>
                          <option>Mesin</option>
                          <option>Kimia</option>
                        </select>
                      </div>
                    </label>
                  </FormItem>


                  <FormItem>
                    <label>
                    Status Discount=(1) Tidak=(0):{" "}:{" "}
                      <div className="select-arrow">
                        <select
                          id="national"
                          name="this.state.produk_statusPromo"
                          onChange={this.handleproduk_statusPromoChange}
                          style={{ width: "100%" }}
                        >
                          <option></option>
                          <option>1</option>
                          <option>0</option>
                     
                        </select>
                      </div>
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Persentase discount:{" "}
                      <input
                        type="number"
                        name="this.state.produk_diskon"
                        onChange={this.handleproduk_diskonChange}
                      />
                    </label>
                  </FormItem>

                  <FormItem>
                    <label>
                      Tanggal post produk:{" "}
                      <input
                        type="text"
                        name="this.state.produk_tanggalPost"
                        onChange={this.handleproduk_tanggalPostChange}
                      />
                    </label>
                  </FormItem>

              

                  <button id="myEdit" type="submit">
                    Edit Data Produk
                  </button>
                </Form>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    );
  }
}

export default connect(
  [
    "is_loginPenjual",
    "penjual_id",
    "api_keyPenjual",
    "penjual_username"
  ], 
  actions
)(withRouter(EditProduk));

