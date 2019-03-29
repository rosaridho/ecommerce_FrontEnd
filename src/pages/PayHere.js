import React, { Component } from "react";
import { Form } from "antd";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

// const myReqUrl = "http://127.0.0.1:5000/pembeli/cart/bayar/";
const myReqUrl = "http://localhost:8010/proxy/pembeli/cart/bayar/";
// const myReqUrl = "https://mridhorosa.com/pembeli/cart/bayar/";
const FormItem = Form.Item;

class PayHere extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const config = {
      headers: { Authorization: "Bearer " + this.props.api_key }
    };
    
    axios.post(myReqUrl + this.props.pembeli_username,"", config)
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
      
    <Form onSubmit={this.handleSubmit}>
      <FormItem>
        <label>
          Pembayaran:
          <div className="select-arrow">
            <select
              name="this.state.pembayaran"
              style={{ width: "100%" }}
            >
              <option></option>
              <option>Credit Card</option>
              <option>Bank Transfer</option>
              <option>Internet Banking</option>
              <option>E-Wallet</option>
            </select>
          </div>
        </label>
      </FormItem>
   
      <div id="kotak4">
      <button id="myPay" type="submit" value="Pay">
        <p>Bayar</p>
      </button>
      </div>
      </Form>
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
)(withRouter(PayHere));
