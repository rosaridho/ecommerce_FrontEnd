import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store.js";
import { withRouter } from "react-router-dom";
import engineerCor from "../images/engineer.jpg";
import doctorCor from "../images/doctor.jpg";
import programmerCor from "../images/programmer.jpeg";
import smartFarmCor from "../images/smartFarm.jpg";
import chemCor from "../images/chem.jpg";
import kitchenCor from "../images/kitchen.jpg";
import photographyCor from "../images/photography.jpg";
import artistCor from "../images/artist.jpg";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import ShowProduk from "./ShowProduk.js";
import Search from "../components/search.js";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
// 
// const myReqUrl_Not = "http://127.0.0.1:5000/pembeli/produk?rp=50&p=1";
// const mySearchUrl_Not = "http://127.0.0.1:5000/pembeli/produk/search";
// const mySearchUrl_Login = "http://127.0.0.1:5000/pembeli/produkAll/search/";
// let mySearchUrl = "";
//
// const myReqUrl_Not = "http://localhost:8010/proxy/pembeli/produk?rp=50&p=1";
// const mySearchUrl_Not = "http://localhost:8010/proxy/pembeli/produk/search";
// const mySearchUrl_Login = "http://localhost:8010/proxy/pembeli/produkAll/search/";
// let mySearchUrl = "";

// coba remote
const myReqUrl_Not = "https://mridhorosa.com/pembeli/produk?rp=50&p=1";
const mySearchUrl_Not = "https://mridhorosa.com/pembeli/produk/search";
const mySearchUrl_Login = "https://mridhorosa.com/pembeli/produk/search/";
let mySearchUrl = "";

// const myReqUrl_Login = "http://127.0.0.1:5000/pembeli/produkAll/";

//
// let myReqUrl = "";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduk: [],
      username: "",
      isLogin: false,
      search: ""
    };
  }

  componentDidMount = () => {
    const self = this;
    
    // alert(myReqUrl_Not)

    axios
      .get(myReqUrl_Not)
      .then(function(response) {
        console.log(response);
        var allData = response.data.Produk;
        self.setState({ listProduk: allData });
      })
      .catch(function(error) {
        console.log(error);
      });
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
    
    
    if (keyword.length > -1) {
      
      if (this.props.is_login) {
  
        const config = {
          headers: { Authorization: "Bearer " + this.props.api_key }
        };
       
        try {
          const response = 
          await axios
          .get(
            mySearchUrl_Login + this.props.pembeli_username + "?keyword=" + keyword + "&rp=9&p=1"  , config
          );
          console.log(response.data.Produk);
          var allData = response.data.Produk;
          self.setState({ listProduk: allData });
        } catch (error) {
          console.log(error);
        }
      } else {
        mySearchUrl = mySearchUrl_Not + "?keyword=" + keyword + "&rp=9&p=1"
        try {
          const response = 
          await axios
          .get(
            mySearchUrl
          );
          console.log(response.data.Produk);
          var allData = response.data.Produk;
          self.setState({ listProduk: allData });
        } catch (error) {
          console.log(error);
        }
      };
    }
  };

  /**================================================================ */
   
  render() {
    const { listProduk } = this.state;

    return (
      <div id="container-fluid">
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
          <div className="contentMargin">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
              <hr />
            </div>
            <div className="col-md-12 col-sm-12 col-12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="engineer"
                  src={engineerCor}
                  alt="First slide"
                  style={{ height: "250px", width: "100%" }}
                />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "30px" }}>Engineer</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="doctor"
                  src={doctorCor}
                  alt="Second slide"
                  style={{ height: "250px", width: "100%" }}
                />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "30px" }}>Doctor</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="programmer"
                  src={programmerCor}
                  alt="Third slide"
                  style={{ height: "250px", width: "100%" }}
                />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "30px" }}>Programmer</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="farmer"
                  src={smartFarmCor}
                  alt="Fourth slide"
                  style={{ height: "250px", width: "100%" }}
                />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "30px" }}>Farmer</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="Chemist"
                  src={chemCor}
                  alt="Fifth slide"
                  style={{ height: "250px", width: "100%" }}
                />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "30px" }}>Chemist</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="chef"
                  src={kitchenCor}
                  alt="Sixth slide"
                  style={{ height: "250px", width: "100%" }}
                />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "30px" }}>Chef</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="chef"
                  src={photographyCor}
                  alt="Sixth slide"
                  style={{ height: "250px", width: "100%" }}
                />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "30px" }}>Photographer</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="chef"
                  src={artistCor}
                  alt="Sixth slide"
                  style={{ height: "250px", width: "100%" }}
                />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "30px" }}>Artist</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
          </div>
         

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-2 col-1 offset-md-0">
                <div id="subtitleProduk">
                  <h1>Produk Produk Kami</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="produkHome">
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
  [
  "is_login",
  "pembeli_username",
  "api_key"
  ],
  actions
)(withRouter(Home));