import React from 'react';
import './photo.css';

function Photo({img_src, index}) {
    return <article className={`thumbnail ${index == 0 ? 'active' : ''}`}>
                <img src={img_src}/>
            </article>;
}

export default Photo;
