import React from 'react';
import './photo.css';

function Photo({img_src, index, onClick, currentIndex}) {

    return <article className={`thumbnail ${index == (currentIndex || 0) ? 'active' : ''}`} onClick={onClick}>
                <img src={'http://localhost:3000/directory/photo/' + img_src}/>
            </article>;
}

export default Photo;
