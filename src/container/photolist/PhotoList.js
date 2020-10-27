import React from 'react';
import Photo from "component/photo/Photo";
import './photoList.css';
import { useDispatch, useSelector } from 'react-redux';
import { choosePhoto } from '../../action/viewer';

function PhotoList() {
    const images = useSelector(state => state.viewer);
    const dispatch = useDispatch();

    const onClick = (index) => {
        dispatch(choosePhoto(index));
    };

    return <section id="thumbnails">
                {
                    images.photo.map((photo, index) =>
                        <Photo index={index} key={index} img_src={photo.url} currentIndex={images.currentIndex} onClick={() => onClick(index)}/>
                    )
                }
            </section>;
}

export default PhotoList;
