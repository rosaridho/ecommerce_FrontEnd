import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store.js";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ShowProduk from "./ShowProduk.js";
import Search from "../components/search.js";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

let myReqUrl = "";
// const mySearchUrl = "http://127.0.0.1:5000/pembeli/produk/search";
const mySearchUrl = "http://localhost:8010/proxy/pembeli/produk/search";
// const mySearchUrl = "https://mridhorosa.com/pembeli/produk/search";

class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduk: [],
      username: "",
      isLogin: false,
      KATEGORIDATA: ""
    };
  }

  componentDidMount = () => {
    const self = this;
    let KATEGORIS = [];
    let KATEGORI = "";
    let SUBKATEGORI = "";
    
    let { KATEGORIDATA } = this.props.match.params;

    console.log(KATEGORIDATA);
    KATEGORIS = KATEGORIDATA.split(/\s*\-\s*/g);
    KATEGORI = KATEGORIS[0];
    SUBKATEGORI = KATEGORIS[1];

    if (SUBKATEGORI === undefined) {
      myReqUrl = "http://localhost:8010/proxy/pembeli/produk/" + KATEGORI + "?rp=9&p=1";
      
      axios
        .get(myReqUrl)
        .then(function(response) {
          var allData = response.data.Produk.filter(
            allData => allData.produk_kategori === KATEGORI
          );
          self.setState({ listProduk: allData });
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      myReqUrl =
        "http://localhost:8010/proxy/pembeli/produk/" +
        KATEGORI +
        "/" +
        SUBKATEGORI +
        "?rp=9&p=1";
      // alert(myReqUrl)
      axios
        .get(myReqUrl)
        .then(function(response) {
          var allData = response.data.Produk.filter(
            allData => allData.produk_kategori === KATEGORI
          );
          allData = response.data.Produk.filter(
            allData => allData.produk_subkategori === SUBKATEGORI
          );
          self.setState({ listProduk: allData });
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  /* ========================function======================= */

  handleInputChange = e => {
    console.log("event", e.target.value);
    let value = e.target.value;
    this.setState(
      {
        search: value
      },
      () => {
        this.searchProduk(value);
      }
    );
  };

  searchProduk = async keyword => {
    console.log("searchProduk", keyword);
    const self = this;
    // alert(mySearchUrl + "?keyword=" + keyword + "&rp=9&p=1");
    if (keyword.length > -1) {
      try {
        const response = await axios.get(
          mySearchUrl + "?keyword=" + keyword + "&rp=9&p=1"
        );
        console.log(response.data.Produk);
        var allData = response.data.Produk;
        self.setState({ listProduk: allData });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { listProduk, username, islogin, KATEGORI } = this.state;
    return (
      <div id="container">
        {/* Search */}

            <Search
              title="Cari"
              placeholder="type here..."
              doSearch={this.handleInputChange}
              keyword={this.state.search}
              doClickSearch={this.handleInputClickSearch}
            />

        {/* Search */}
        <div className="container-fluid" style={{ padding: "0" }}>
            <div className="row">
              <div className="col-md-12 col-sm-12 offset-md-0">
                <div id="subtitleProduk">
                  <h1>Produk Kategori </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="produkHome2">
            <div className="container-fluid">
              <div className="row">
                {listProduk.map((item, key) => {
                  return (
                    <ShowProduk
                      key={key}
                      produkID={item.produk_id}
                      nama={item.produk_nama}
                      hargaAwal={item.produk_harga}
                      deskripsi={item.produk_deskripsi}
                      gambar={item.produk_gambar}
                      stok={item.produk_stok}
                      hargaAkhir={item.produk_hargaDiskon}
                      tanggalPost={item.produk_tanggalPost}
                      kategori={item.produk_kategori}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(
  "is_login, email, full_name",
  actions
)(withRouter(Kategori));

// export default Kategori;
