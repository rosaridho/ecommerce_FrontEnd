import React, { Component } from 'react';
import MainRoute from './MainRoute.js';
import { withRouter } from "react-router-dom";

import '../styles/App.css';

import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';

class AppAjax extends Component {
    postSignout = () => {
        localStorage.removeItem('is_login');
        this.props.history.push('/signin');
    };
    postSignoutPenjual = () => {
        localStorage.removeItem('is_loginPenjual');
        this.props.history.push('/signinPenjual');
    };
    render(){
        return (
            <div className="App">
            <Navigation postSignout={this.postSignout} postSignoutPenjual={this.postSignoutPenjual}/>
            <MainRoute/>
            <Footer/>
            </div>
        )
    }
}

export default withRouter(AppAjax);