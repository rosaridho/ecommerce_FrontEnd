import React, { Component } from "react";
import axios from "axios";

import "../styles/App.css";
import "../styles/bootstrap.min.css";

import DetailProduk from "./DetailProduk.js";

let myReqUrl = "";

class Produk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduk: [],
      username: "",
      isLogin: false
    };
  }

  componentDidMount = () => {
    const self = this;
    const { ID } = this.props.match.params;
    console.log(ID);

    // myReqUrl = "http://127.0.0.1:5000/pembeli/produk/" + ID;
    myReqUrl = "http://localhost:8010/proxy/pembeli/produk/" + ID;
    // myReqUrl = "https://mridhorosa.com/pembeli/produk/" + ID;
    // alert(myReqUrl)
    axios
      .get(myReqUrl)
      .then(function(response) {
        var allData = response.data.Produk;
        self.setState({ listProduk: allData });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { listProduk} = this.state;
    return (
      <div id="container">
        <br />
        <br />
        <div className="container-fluid" style={{ padding: "0" }}>
          <div className="contentMargin" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 offset-md-0">
                <div id="subtitleProduk">
                  <h1>Produk {listProduk.produk_nama} detail</h1>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="container-fluid">
            <DetailProduk
              produkID={listProduk.produk_id}
              nama={listProduk.produk_nama}
              hargaAwal={listProduk.produk_harga}
              deskripsi={listProduk.produk_deskripsi}
              gambar={listProduk.produk_gambar}
              stok={listProduk.produk_stok}
              hargaAkhir={listProduk.produk_hargaDiskon}
              tanggalPost={listProduk.produk_tanggalPost}
            />
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
export default Produk;
