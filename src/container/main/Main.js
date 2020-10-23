import React from 'react';

import Header from 'component/header/Header';
import PhotoList from 'container/photolist/PhotoList';
import Footer from 'component/footer/Footer';
import Viewer from 'component/viewer/Viewer';

function Main() {
    return <div id="Main" style={mainStyle}>
                <Viewer/>
                <div id="info" style={infoStyle}>
                    <Header/>
                    <PhotoList/>
                    <Footer/>
                </div>
            </div>;
}

const mainStyle = {
    display: "flex"
};

const infoStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    overflowX: "hidden",
    overflowY: 'scroll',
    width: "22.5em",
    height: "100%"
};

export default Main;
