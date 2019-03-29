import React from "react";
import { Route, Switch} from "react-router-dom";

import SignIn from '../pages/SignIn.js';
import SignInPenjual from '../pages/SignInPenjual.js';
import Profile from '../pages/Profile.js';
import ProfilePenjual from '../pages/ProfilePenjual.js';
import Home from '../pages/Home.js';
import Kategori from '../pages/kategori.js';
import Produk from '../pages/Produk.js';
import Daftar from '../pages/Daftar.js';
import Edit from '../pages/Edit.js';
import Cart from '../pages/Cart.js';
import Popular from '../pages/popular.js';
import TambahProduk from '../pages/TambahProduk.js';
import EditProduk from '../pages/EditProduk.js';
import DaftarPenjual from '../pages/DaftarPenjual.js'

const MainRoute = () => {
    return ( 
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/kategori/:KATEGORIDATA" component={Kategori} />
            <Route exact path="/daftar" component={Daftar} />
            <Route exact path="/daftarPenjual" component={DaftarPenjual} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profilePenjual" component={ProfilePenjual} />
            <Route exact path="/profileEdit" component={Edit} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/tambahProduk" component={TambahProduk} />
            <Route exact path="/editProduk" component={EditProduk} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signinPenjual" component={SignInPenjual} />
            <Route exact path="/:ID" component={Produk} />
            <Route exact path="/popular/:KATEGORIDATA" component={Popular} />
        </Switch>
    );
};

export default MainRoute;