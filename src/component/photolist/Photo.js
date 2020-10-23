import React from 'react';
import './photo.css';

function Photo({img_src}) {
    return <article className="thumbnail">
                <img src={img_src}/>
            </article>;
}

export default Photo;
