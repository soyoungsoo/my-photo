import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CHOOSE_PHOTO, nextPhoto, prevPhoto} from '../../../src/action/viewer';
import './viewer.css';
import 'assets/css/keyframs.css';
import $ from "jquery";

function Viewer() {
    const dispatch = useDispatch();
    const viewer = useSelector(state => state.viewer);
    const viewerEl = useRef(null);
    const iconCloseEl = useRef(null);
    const iconPrev = useRef(null);
    const iconNext = useRef(null);

    if (viewer.type == CHOOSE_PHOTO) {
        if (window.innerWidth <= 768) {
            viewerEl.current.style.zIndex = 2;
            // iconCloseEl.current.style.zIndex = 2;
            iconCloseEl.current.style.display = 'block';
            iconPrev.current.style.display = 'flex';
            iconNext.current.style.display = 'flex';
            $('#viewer').animate({opacity: 1}, 300);
        } else {
            $('#viewer').stop().animate({opacity: 0}, 1, function () {
                $('#viewer').animate({opacity: 1}, 800);
            });
        }
    }

    const onClickClose = () => {
        viewerEl.current.style.zIndex = 1;
        iconCloseEl.current.style.display = 'none';
        iconPrev.current.style.display = 'none';
        iconNext.current.style.display = 'none';
    };

    const onClickPrev = () => {
        dispatch(prevPhoto(viewer.currentIndex));
    };

    const onClickNext = () => {
        dispatch(nextPhoto(viewer.currentIndex));
    };

    let slide = null;
    if (viewer.photo.length != 0) {
        slide = <div className="slide-image"
                         style={{backgroundImage: `url(${'http://localhost:3000/directory/photo/' + viewer.photo[viewer.currentIndex].url})`}}>
            <div className="caption">
                <h2>{viewer.photo[viewer.currentIndex].title}</h2>
                <p>{viewer.photo[viewer.currentIndex].desc}</p>
            </div>
        </div>;
    }

    return <div id="viewer" ref={viewerEl}>
                <div className="inner">
                    <i className="xi-angle-left xi-2x icon-prev" ref={iconPrev} onClick={onClickPrev}></i>
                    <img className="icon-close" ref={iconCloseEl} src={require('assets/images/icon/close.svg')} onClick={onClickClose}/>
                    <i className="xi-angle-right xi-2x icon-next" ref={iconNext} onClick={onClickNext}></i>
                </div>
                <div className="slider">
                    {slide}
                </div>
            </div>;
}
export default Viewer;
