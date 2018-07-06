import React, { Component } from 'react';
import '../../main.css';
import './Init.css';

class Init extends Component {
    render(){
        return (
            <div className="init content_style">
                <div className="init_wrapper content_font-size_4m">
                    안녕하세요 ,<br/>
                    프론트엔드 개발자 <span className="skill_name">김나정 </span>입니다 .<br/>이 홈페이지는<br/>
                    <span className="skill_name">HTML5 / CSS3 / JavaScript / React.JS</span> 를<br/>사용하여 만들었습니다 .<br/>
                    방문해 주셔서 감사합니다 .
                </div>
            </div>
        )
    }
}

export default Init;