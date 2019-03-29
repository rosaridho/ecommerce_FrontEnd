import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

class ShowCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="kotak2">
        <img
          src={this.props.gambar}
          width="25%"
          style={{ float: "left", paddingRight: "10px" }}
        />
        <h5 style={{ float: "left", paddingRight: "50px" }}>
          Nama Barang : {this.props.nama}
        </h5>
        <h5>Jumlah Barang : {this.props.jumlah} </h5>
        <h5 style={{ float: "left", paddingRight: "200px" }} />
        <h5>Harga Total per transaksi : {this.props.hargaBayar} </h5>

      </div>
    );
  }
}
export default ShowCart;
