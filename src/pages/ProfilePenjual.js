import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ShowProdukPenjual from "./ShowProdukPenjual.js";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import Table from "react-bootstrap/Table";

const ProfilePenjual = props => {
  console.log("is_loginPenjual", props.is_loginPenjual);

  if (!props.is_loginPenjual) {
    return <Redirect to={{ pathname: "/signinPenjual" }} />;
  } else {
    return (
      <div className="container-fluid">
        <div className="headerCart">
          <div className="row">
            <div className="col-md-5 col-sm-6 offset-md-0">
              <h1>Profile Anda</h1>
              <div id="flexProfile">
                <div className="flex-container">
                  <div id="kotak1Prof">
                    <h3>Profile: {props.penjual_namaLengkap}</h3>
                  </div>

                  <div id="kotak2head">
                    <h3>Lihat dan ubah profile</h3>
                  </div>
                  <div id="kotak2Prof">
                    <img
                      src={props.penjual_avatar}
                      width="50%"
                      style={{ float: "left", paddingRight: "10px" }}
                    />
                    <h5>Nama Lengkap Penjual : {props.penjual_namaLengkap}</h5>
                    <h5>username : {props.penjual_username}</h5>
                    <h5>Email : {props.penjual_email}</h5>
                    <h5>Gender : {props.penjual_gender}</h5>
                    <h5>Tempat Tinggal : {props.penjual_lokasiKota}</h5>
                    <h5> Penjual ID : {props.penjual_id}</h5>
                  </div>
                  <div id="kotak2Prof">
                    <Link to={"/" + "tambahProduk"}>
                      <button id="myEdit" type="submit">
                        Tambah Data Produk
                      </button>
                    </Link>
                    <Link to={"/" + "editProduk"}>
                      <button id="myEdit" type="submit">
                        Edit Data Produk
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-sm-6 offset-md-0">
              <h1>Produk Anda di Toko kami</h1>
              <div id="flexProfile">
                <div className="flex-container">
                  <div id="kotak1Prof">
                    <h3>Detail Produk Penjual</h3>
                  </div>
                  <div id="kotak2trans">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Produk ID</th>
                          <th scope="col">Nama Produk</th>
                          <th scope="col">Harga Produk</th>
                          <th scope="col">Jumlah Stok</th>
                          <th scope="col">Kategori</th>
                          <th scope="col">Subkategori</th>
                          <th scope="col">Diskon(%)</th>
                          <th scope="col">Jumlah dibeli</th>
                        </tr>
                      </thead>
                      {props.listProdukPenjual.map((item, key) => {
                        return (
                          <ShowProdukPenjual
                            key={key}
                            produk_id={item.produk_id}
                            produk_nama={item.produk_nama}
                            produk_harga={item.produk_harga}
                            produk_stok={item.produk_stok}
                            produk_kategori={item.produk_kategori}
                            produk_subkategori={item.produk_subkategori}
                            produk_diskon={(item.produk_diskon)*100}
                            produk_Jumlahdibeli={item.produk_Jumlahdibeli}
                          />
                        );
                      })}
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(
  [
    "is_loginPenjual",
    "penjual_email",
    "penjual_username",
    "penjual_namaLengkap",
    "penjual_gender",
    "penjual_lokasiKota",
    "penjual_avatar",
    "listProdukPenjual",
    "penjual_id"
  ],
  actions
)(withRouter(ProfilePenjual));
