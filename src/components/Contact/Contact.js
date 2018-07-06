import React, { Component } from 'react';
import '../../main.css';
import './Contact.css';

class Contact extends Component {
    render(){
        return (
            <div className="contact">
                <div className="contact_wrapper content_font-size_4m">
                    주소 : 남양주시 화도읍<br/>
                    메일 : najaeng@naver.com<br/><br/>
                </div>
            </div>
        )
    }
}


export default Contact;