import React from 'react';
import './header.css';

function Header({onClickDownload, onClickDelete}){

    return <header id="header">
                <h1>사진첩</h1>
                <p>당신만의 사진첩을 만들어보세요!</p>
                <div className="icons">
                    <i className="xi-cloud-upload-o xi-2x"></i>
                    <i className="xi-cloud-download-o xi-2x" onClick={onClickDownload}></i>
                    <i className="xi-trash-o xi-2x" onClick={onClickDelete}></i>
                </div>
            </header>;
}

export default Header;
