import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";



const ShowTransaksi = props => {
  return (
      <tbody>
        <tr>
          <th scope="row"><p id="id"></p></th>
          <td>{props.produk_id}</td>
          <td>{props.produk_nama}</td>
          <td>{props.produk_harga}</td>
          <td>{props.produk_stok}</td>
          <td>{props.produk_kategori}</td>
          <td>{props.produk_subkategori}</td>
          <td>{props.produk_diskon}</td>
          <td>{props.produk_Jumlahdibeli} </td>
        </tr>
      </tbody>
    );
  } 

export default ShowTransaksi;
