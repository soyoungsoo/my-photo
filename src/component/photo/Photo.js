import React from 'react';
import './photo.css';
import {ViewerContext} from 'context/viewer';
import { useDispatch, useSelector } from 'react-redux';
import {addPhoto} from '../../action/viewer';
function Photo({img_src, index}) {

    const dispatch = useDispatch();
    const viewer = useSelector(state => state.viewer);
    console.log(viewer);

    // const onClick = () => {
    //     context.src = img_src;
    //     context.currentIndex = index;
    //     console.log(context);
    // };

    const onClick = (index, img_src) => {
        dispatch(addPhoto(index, img_src));
    };

    return <article className={`thumbnail ${index == viewer.currentIndex ? 'active' : ''}`} onClick={() => onClick(index, img_src)}>
                <img src={img_src}/>
            </article>;
}

export default Photo;
