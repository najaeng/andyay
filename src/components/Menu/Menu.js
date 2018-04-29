import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import About from '../About/About';
import Photo from '../Photo/Photo';
import Doodle from '../Doodle/Doodle';
import './Menu.css';

class Menu extends Component {
    render(){
        return(
            <div>
                <div className="menu-list"><Link to="/about">About Me</Link></div>
                <div className="menu-list"><Link to="/photo">Photo</Link></div>
                <div className="menu-list"><Link to="/doodle">Doodle</Link></div>
            </div>
        );
    }   
}

export default Menu;