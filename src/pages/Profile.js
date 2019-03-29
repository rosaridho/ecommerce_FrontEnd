import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ShowTransaksi from "./ShowTransaksi.js";
import Table from "react-bootstrap/Table";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const Profile = props => {
  console.log("is_login", props.is_login);

  if (!props.is_login) {
    return <Redirect to={{ pathname: "/signin" }} />;
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
                    <h3>Profile: {props.pembeli_namaLengkap}</h3>
                  </div>

                  <div id="kotak2head">
                    <h3>Lihat dan ubah profile</h3>
                  </div>
                  <div id="kotak2Prof">
                    <img
                      src={props.pembeli_avatar}
                      width="50%"
                      style={{ float: "left", paddingRight: "10px" }}
                    />
                    <h5>Nama Lengkap Pembeli : {props.pembeli_namaLengkap}</h5>
                    <h5>username : {props.pembeli_username}</h5>
                    <h5>Password : {props.pembeli_password}</h5>
                    <h5>Email : {props.pembeli_email}</h5>
                    <h5>Gender : {props.pembeli_gender}</h5>
                    <h5>Tempat Tinggal : {props.pembeli_lokasiKota}</h5>
                    <h5>Pekerjaan : {props.pembeli_pekerjaan}</h5>
                  </div>
                  <div id="kotak2Prof">
                    <Link to={"/" + "profileEdit"}>
                      <button id="myEdit" type="submit">
                        Edit Data / Delete Akun
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-sm-6 offset-md-0">
              <h1>Transaksi Anda di Toko kami</h1>
              <div id="flexProfile">
                <div className="flex-container">
                  <div id="kotak1Prof">
                    <h3>Detail Transaksi Belanja</h3>
                  </div>
                  <div id="kotak2trans">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nama Produk</th>
                          <th scope="col">Harga Produk</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Total harga</th>
                          <th scope="col">Status Promo</th>
                          <th scope="col">Tanggal</th>
                          <th scope="col">Status Transaksi</th>
                        </tr>
                      </thead>
                      {props.listTransaksi.map((item, key) => {
                        return (
                          <ShowTransaksi
                            key={key}
                            nama={item.produk_nama}
                            harga={item.produk_harga}
                            jumlah={item.produk_jumlahBeli}
                            status={item.produk_statusPromo}
                            tanggal={item.produk_tanggalBeli}
                            hargaBayar={item.produk_hargaBayar}
                            transaksiStatus={item.transaksi_status}
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
    "is_login",
    "api_key",
    "pembeli_email",
    "pembeli_username",
    "pembeli_password",
    "pembeli_namaLengkap",
    "pembeli_gender",
    "pembeli_lokasiKota",
    "pembeli_pekerjaan",
    "pembeli_avatar",
    "listTransaksi"
  ],
  actions
)(withRouter(Profile));
