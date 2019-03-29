import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";


class ShowProduk extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="col-md-4 col-sm-12 offset-md-0">
        <div className="card" style={{ width: "300px", marginBottom:"20px" }}>
          <a href={(this.props.gambar)}>
            <img
              className="card-img-top"
              src={(this.props.gambar)}
              alt="Card image"
              style={{ width: "100%" }}
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">{this.props.nama}</h4>
            <div className="priceShow">
              <p
                className="card-text"
                style={{ float: "left", paddingRight: "20px" }}
              >
                Rp. {this.props.hargaAkhir}
              </p>
              <p
                className="card-text"
                style={{
                  textDecoration: "line-through",
                  color: "red",
                  display: "block"
                }}
              >
                Rp. {this.props.hargaAwal}
              </p>
            </div>
            <p className="card-text" style={{ clear: "left" }}>
              {this.props.deskripsi}
            </p>
            <Link 
            to={"/" + this.props.produkID}>
            <button type="button" className="btn btn-primary" style={{ marginLeft: "35%" }}>
            See Details
            </button>
            </Link>
   
          </div>
        </div>
      </div>
    );
  } 
}

ShowProduk.propTypes = {
  gambar : PropTypes.string, 
  nama : PropTypes.string,
  hargaAwal : PropTypes.number,
  hargaAkhir : PropTypes.number,
  deskripsi : PropTypes.string
} 

export default ShowProduk;
