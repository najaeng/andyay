import React, { Component } from 'react';

import images from '../../imgs/index.js';
import './Header.css';

class Header extends Component {
    componentDidMount = () =>{
        if(this.props.isTop){

        }else if(!this.props.isTop){
            
        }
    }

    goToAbout = () => {

    }

    goToPortf = () => {
        
    }

    goToContact = () => {
        
    }

    render(){
        return(
            <div className="header">
                <div className="title_area">
                    <span className="title" onClick={() => window.location.href = '/'}>And_Yay</span>
                </div>
                <div>
                    <img className="menu_icon_4m" src={images['menu_icon']}/>
                </div>
                <div className="menu">
                    <span className="menu-list" onClick={this.goToAbout()}>ABOUT ME</span>
                    <span className="menu-list" onClick={this.goToPortf()}>PORTFOLIO</span>
                    <span className="menu-list" onClick={this.goToContact()}>CONTACT</span>
                </div>
            </div>
        );
    }   
}

export default Header;