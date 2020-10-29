import React, {useState} from 'react';
import Header from 'component/header/Header';
import PhotoList from 'container/photolist/PhotoList';
import Footer from 'component/footer/Footer';
import Viewer from 'component/viewer/Viewer';
import './main.css';
import 'assets/css/keyframs.css';
import API from '../../axios';
import { addPhoto } from '../../action/viewer';
import { useDispatch } from 'react-redux';


function Main() {
    const dispatch = useDispatch();
    let [image, setImage] = useState(null);

    API.get("/api/v1/photo/img").then((res) => {
        console.log(res.data.length);
        for (var i = 0; i < res.data.length; i++) {
            dispatch(addPhoto('title', 'desc', 'http://localhost:3000/directory/photo/' + res.data[i]));
        }
    });

    const onChange = (e) => {
        setImage(e.target.files);
    };

    const onClick = async () => {
        const formData = new FormData();
        for (var i = 0; i < image.length; i++) {
            formData.append('file', image[i]);
        }

        await API.post("/api/v1/photo/img", formData).then((res) => {
            for (var i = 0; i < image.length; i++) {
                dispatch(addPhoto('title', 'desc', 'http://localhost:3000/' + res.data[i]));
            }
        });
    };

    return <div id="Main" style={mainStyle}>
                <Viewer/>
                <div id="photoInfo" style={infoStyle}>
                    <input type="file" multiple accept="image/*" onChange={onChange} />
                    <input type="submit" onClick={onClick}/>
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
