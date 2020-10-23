import React from 'react';
import Photo from "component/photolist/Photo";
import './photoList.css';

function PhotoList() {
    const images = [
        {src: require('assets/images/thumbs/01.jpg')},
        {src: require('assets/images/thumbs/02.jpg')},
        {src: require('assets/images/thumbs/03.jpg')},
        {src: require('assets/images/thumbs/04.jpg')},
        {src: require('assets/images/thumbs/05.jpg')},
        {src: require('assets/images/thumbs/06.jpg')},
        {src: require('assets/images/thumbs/07.jpg')},
        {src: require('assets/images/thumbs/08.jpg')},
        {src: require('assets/images/thumbs/09.jpg')},
        {src: require('assets/images/thumbs/10.jpg')},
        {src: require('assets/images/thumbs/11.jpg')},
        {src: require('assets/images/thumbs/12.jpg')},
    ];

    return <section id="thumbnails">
                {
                    images.map((image, index) =>
                        <Photo key={index} img_src={image.src}/>
                    )
                }
            </section>;
}

export default PhotoList;
