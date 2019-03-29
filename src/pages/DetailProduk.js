import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store.js";
import axios from "axios";
import { Form } from "antd";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const FormItem = Form.Item;
// const myReqUrl = "http://127.0.0.1:5000/pembeli/produkAll/beli/";
const myReqUrl = "http://localhost:8010/proxy/pembeli/produkAll/beli/";
// const myReqUrl = "https://mridhorosa.com//pembeli/produkAll/beli/";


class DetailProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: ""
    };
  }


  handlejumlahChange = event => {
    this.setState({ jumlah: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    const obj = {
      produk_id: this.props.produkID,
      produk_jumlahBeli: this.state.jumlah,
      produk_tanggalBeli: date,
      transaksi_status: "true",
    };

    const config = {
      headers: { Authorization: "Bearer " + this.props.api_key }
    };

    
    
    axios.post(myReqUrl +  this.props.pembeli_username , obj, config)
    .then(res => {
      console.log(res.data);
      window.location.reload();
    })
    .catch(function(error) {
      console.log(error);
    });

    
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-sm-12 offset-md-0">
          <div className="card" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              src={this.props.gambar}
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">{this.props.nama}</h4>
              <div className="priceShow">
                <p
                  className="card-text"
                  style={{ float: "left", paddingRight: "20px" }}
                >
                  Rp. {this.props.hargaAwal}
                </p>
                <p
                  className="card-text"
                  style={{
                    textDecoration: "line-through",
                    color: "red",
                    display: "block"
                  }}
                >
                  Rp. {this.props.hargaAkhir}
                </p>
              </div>
              <p className="card-text" style={{ clear: "left" }}>
                Some example text some example text.
              </p>
             

              <Form onSubmit={this.handleSubmit} id="myBuy">
                  <FormItem>
                    <label>
                     Jumlah yang dibeli:{" "}
                      <input
                        type="text"
                        name="this.state.jumlah"
                        onChange={this.handlejumlahChange}
                      />
                    </label>
                  </FormItem>
                  <button id="mySubmit2" type="submit" className="btn btn-primary">
                    Masukkan ke keranjang
                  </button>
                </Form>


            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-6 col-12">
          <div id="learn-title">
            <h1>Nama Produk: {this.props.nama}</h1>
            <h1>Harga: Rp. {this.props.hargaAwal}</h1>
            <h1>Harga Akhir: Rp. {this.props.hargaAkhir}</h1>
            <h1>Stock sisa:{this.props.stok} </h1>
            <h1>Tanggal Publish: {this.props.tanggalPost}</h1>
            <h1>Deskripsi lengkap:</h1>
            <h2>{this.props.deskripsi}</h2>
          </div>
        </div>
      </div>
    );
  }
}





DetailProduk.propTypes = {
  nama : PropTypes.string,
  hargaAwal : PropTypes.number,
  hargaAkhir : PropTypes.number,
  stok : PropTypes.number,
  image : PropTypes.string,
  deskripsi : PropTypes.string,
  tanggalPost : PropTypes.string
}



export default connect(
  [
    "is_login",
    "pembeli_username",
    "pembeli_password",
    "api_key"
  ],
  actions
)(withRouter(DetailProduk));