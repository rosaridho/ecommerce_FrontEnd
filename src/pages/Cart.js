import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import ShowCart from "./ShowCart.js";
import PayHere from "./PayHere.js";


const Cart = props => {
  console.log("is_login", props.is_login);

  if (!props.is_login) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <div className="album background" id="level-0">
        <div className="container-fluid">
          <div className="headerCart">
            <div className="row">
              <div className="col-md-6 col-sm-12 offset-md-0">
                <h1>Cart</h1>
                <h4>Periksa kembali belanja Anda.</h4>

                <div className="flex-container">
                  <div id="kotak1">
                    <h3>Detail Belanja</h3>
                  </div>

                  <div id="kotak2head">
                    <h5>{props.pembeli_namaLengkap}</h5>
                  </div>

                  {props.listCart.map((item, key) => {
                  
                    return (
                      <ShowCart
                        key={key}
                        gambar={item.produk_gambar}
                        nama={item.produk_nama}
                        harga={item.produk_harga}
                        jumlah={item.produk_jumlahBeli}
                        status={item.produk_statusPromo}
                        tanggal={item.produk_tanggalBeli}
                        hargaBayar={item.produk_hargaBayar}
                      />
                    );
                  })}

                 
                </div>
              </div>

              <div className="col-md-6 col-sm-12 offset-md-0">
                <h1>Ringkasan Belanja</h1>
                <h4>Cek kembali Total Harga dan Metoda Pembayaran</h4>
                <div className="flex-container">
                  <div id="kotak1">
                    <h3>Detail Belanja</h3>
                  </div>

                  {/*  ini cart tambah url */}
                  <div id="kotak2">
                    <h5 style={{ float: "left", paddingRight: "150px" }}>
                      Total Harga Barang: Rp. {props.cartTotalByr}
                    </h5>
               
                    <h5 style={{ float: "left", paddingRight: "150px" }}>
                      Total Qty Barang : {props.cartTotalQty} pcs(s)
                    </h5>
                 
                  </div>
                  <div id="kotak3">
    
                      <PayHere
                        nama={props.pembeli_username}
                      />
                  
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
    "listTransaksi",
    "cartTotalQty",
    "cartTotalByr",
    "listCart"
  ],
  actions
)(withRouter(Cart));
