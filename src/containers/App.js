import React, { Component } from 'react';

import Content from './Content';
import Header from './Header';
import Footer from './Footer';

import "@babel/polyfill";

import "./../../sass/style.scss"

class App extends Component{

    render(){
        return(
            <div className="container">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }

}

export default App;