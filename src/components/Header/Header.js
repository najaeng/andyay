import React, { Component } from 'react';

import images from '../../imgs/index.js';
import './Header.css';

var menu_display = {
    display: 'none'
};

class Header extends Component {
    constructor(){
        super();

        this.state = {
            display: false
        }
    }

    goToAbout = () => {

    }

    goToPortf = () => {
        
    }

    goToContact = () => {
        
    }

    clickMenu = () => {
        this.setState({display: true});
    }

    render(){
        menu_display = this.state.display ? {'display': 'block'} : {'display': 'none'};
        
        return(
            <div className="header">
                <div className="titleArea">
                    <span className="title" onClick={() => window.location.href = '/'}>And_Yay</span>
                </div>
                {/* mobile area */}
                <img className="menuIcon4m" src={images['menu_icon']} onClick={() => this.clickMenu()}/>
                <div className="menuArea4m" style={menu_display}>
                    <div className="menuList4m">
                        <div className="eachMenu4m" onClick={this.goToAbout()}>ABOUT ME</div>
                        <div className="eachMenu4m" onClick={this.goToPortf()}>PORTFOLIO</div>
                        <div className="eachMenu4m" onClick={this.goToContact()}>CONTACT</div>
                    </div>
                </div>

                <div className="menuArea">
                    <span className="eachMenu" onClick={this.goToAbout()}>ABOUT ME</span>
                    <span className="eachMenu" onClick={this.goToPortf()}>PORTFOLIO</span>
                    <span className="eachMenu" onClick={this.goToContact()}>CONTACT</span>
                </div>
            </div>
        );
    }   
}

export default Header;