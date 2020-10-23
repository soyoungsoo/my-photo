import React from 'react';
import './header.css';

function Header(){

    return <header id="header">
                <h1>사진첩</h1>
                <p>당신만의 사진첩을 만들어보세요!</p>
                <div className="icons">
                    <i className="xi-cloud-upload-o xi-2x"></i>
                    <i className="xi-cloud-download-o xi-2x"></i>
                    <i className="xi-file-remove-o xi-2x"></i>
                </div>
            </header>;
}

export default Header;
