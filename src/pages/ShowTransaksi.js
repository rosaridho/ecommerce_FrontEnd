import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";


const ShowTransaksi = props => {

  return (
      <tbody>
        <tr>
          <th scope="row"><p id="id"></p></th>
          <td>{props.nama}</td>
          <td>{props.harga}</td>
          <td>{props.jumlah}</td>
          <td>{props.hargaBayar}</td>
          <td>{props.status}</td>
          <td>{props.tanggal}</td>
          <td>{props.transaksiStatus} </td>
        </tr>
      </tbody>
    );
  } 

export default ShowTransaksi;
