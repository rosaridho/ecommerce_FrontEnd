import createStore from "unistore";
import axios from "axios";

const initialState = {
  api_key: "",
  pembeli_email: "",
  pembeli_password: "",
  pembeli_username: "",
  pembeli_namaLengkap: "",
  pembeli_gender: "",
  pembeli_lokasiKota: "",
  pembeli_pekerjaan: "",
  pembeli_avatar: "",
  is_login: false,
  listTransaksi: [],
  listProdukPenjual: [],
  listCart:[],
  cartTotalQty:"",
  cartTotalByr:"",
  jumlah:"",
  pembayaran:"",
  pembeli_id: "",
  penjual_username:"",
  penjual_password:"", 
  is_loginPenjual: false,
  api_keyPenjual:"",
  penjual_id:"",
  penjual_avatar:""
};

// const myReqUrl = "http://127.0.0.1:5000/pembeli/login";
// const myDataUrl = "http://127.0.0.1:5000/pembeli/";
// const myTransUrl = "http://127.0.0.1:5000/pembeli/transaksi/";
// const myCartUrl = "http://127.0.0.1:5000/pembeli/cart/";

// const myReqUrlPenjual = "http://127.0.0.1:5000/penjual/login";
// const myDataUrlPenjual = "http://127.0.0.1:5000/penjual/";

const myReqUrl = "http://localhost:8010/proxy/pembeli/login";
const myDataUrl = "http://localhost:8010/proxy/pembeli/";
const myTransUrl = "http://localhost:8010/proxy/pembeli/transaksi/";
const myCartUrl = "http://localhost:8010/proxy/pembeli/cart/";

const myReqUrlPenjual = "http://localhost:8010/proxy/penjual/login";
const myDataUrlPenjual = "http://localhost:8010/proxy/penjual/";



// const myReqUrl = "https://mridhorosa.com/pembeli/login";
// const myDataUrl = "https://mridhorosa.com/pembeli/";
// const myTransUrl = "https://mridhorosa.com/pembeli/transaksi/";
// const myCartUrl = "https://mridhorosa.com/pembeli/cart/";

// const myReqUrlPenjual = "https://mridhorosa.com/penjual/login";
// const myDataUrlPenjual = "https://mridhorosa.com/penjual/";

const myCrudPenjual = "http://127.0.0.1:5000/penjual/produk/";


export const store = createStore(initialState);

export const actions = store => ({
  setField: (state, e) => {
    return { [e.target.name]: e.target.value };
  },

  postLogout: state => {
    return { is_login: false };
  },

  postLogoutPenjual: state => {
    return { is_loginPenjual: false };
  },

  postLogin: async state => {
    const data = {
      pembeli_username: state.pembeli_username,
      pembeli_password: state.pembeli_password
    };
    await axios
      .post(myReqUrl, data)
      .then(response => {
        console.log("postLogin response", response.data);
        store.setState({
          is_login: true,
          pembeli_username: state.pembeli_username,
          pembeli_password: state.pembeli_password,
          api_key: response.data.Token
        });
      })
      .catch(error => {
        console.log(error);
      });
  },

  postLoginPenjual: async state => {
    const data = {
      penjual_username: state.penjual_username,
      penjual_password: state.penjual_password
    };
    await axios
      .post(myReqUrlPenjual, data)
      .then(response => {
        console.log("postLogin response", response.data);
        store.setState({
          is_loginPenjual: true,
          penjual_username: state.penjual_username,
          penjual_password: state.penjual_password,
          api_keyPenjual: response.data.Token
        });
      })
      .catch(error => {
        console.log(error);
      });
  },

  postLogin2: async state => {
    const config = {
      headers: { Authorization: "Bearer " + state.api_key }
    };
    await axios
      .get(myDataUrl + state.pembeli_username, config)
      .then(response => {
        console.log(response);
        store.setState({
          pembeli_email: response.data.Data_Pembeli.pembeli_email,
          pembeli_username: response.data.Data_Pembeli.pembeli_username,
          pembeli_namaLengkap: response.data.Data_Pembeli.pembeli_namaLengkap,
          pembeli_gender: response.data.Data_Pembeli.pembeli_gender,
          pembeli_lokasiKota: response.data.Data_Pembeli.pembeli_lokasiKota,
          pembeli_pekerjaan: response.data.Data_Pembeli.pembeli_pekerjaan,
          pembeli_avatar: response.data.Data_Pembeli.pembeli_avatar,
          pembeli_id: response.data.Data_Pembeli.pembeli_id,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  postLogin2Penjual: async state => {
    const config = {
      headers: { Authorization: "Bearer " + state.api_keyPenjual }
    };
    await axios
      .get(myDataUrlPenjual + state.penjual_username, config)
      .then(response => {
        console.log(response);
        store.setState({
          penjual_email: response.data.Data_Penjual.penjual_email,
          penjual_username: response.data.Data_Penjual.penjual_username,
          penjual_namaLengkap: response.data.Data_Penjual.penjual_namaLengkap,
          penjual_gender: response.data.Data_Penjual.penjual_gender,
          penjual_lokasiKota: response.data.Data_Penjual.penjual_lokasiKota,
          penjual_id: response.data.Data_Penjual.penjual_id,
          penjual_avatar: response.data.Data_Penjual.penjual_avatar,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  postLogin3: async state => {
    const config = {
      
      headers: { Authorization: "Bearer " + state.api_key }
    };
    await axios
      .get(myTransUrl + state.pembeli_username + "?rp=40", config)
      .then(response => {
        console.log(response);
        var allTransaction = response.data.Transaksi
        store.setState({
        listTransaksi: allTransaction
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  postLogin3Penjual: async state => {
    const config = {
      
      headers: { Authorization: "Bearer " + state.api_keyPenjual }
    };
    // alert(state.penjual_id)
    const getProdukUrl = "http://localhost:8010/proxy/" + "penjual/produk/" + state.penjual_id + "?rp=40"
    await axios
      .get(getProdukUrl, config)
      .then(response => {
        console.log(response);
        var allTransaction = response.data.Produk
        store.setState({
        listProdukPenjual: allTransaction
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  postLogin4: async state => {
    const config = {
      
      headers: { Authorization: "Bearer " + state.api_key }
    };
    await axios
      .get(myCartUrl + state.pembeli_username, config)
      .then(response => {
        console.log(response);
        var allCart = response.data
        store.setState({
        listCart: allCart.Cart,
        cartTotalByr: allCart.totalBayar,
        cartTotalQty : allCart.totalProduk
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    }
});
