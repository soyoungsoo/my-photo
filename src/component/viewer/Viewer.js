import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CHOOSE_PHOTO, nextPhoto, prevPhoto} from '../../../src/action/viewer';
import './viewer.css';
import 'assets/css/keyframs.css';
import $ from "jquery";

// import ReactCSSTransitionGroup from 'react-transition-group'; // ES6


function Viewer() {
    const dispatch = useDispatch();
    const viewer = useSelector(state => state.viewer);
    const viewerEl = useRef(null);
    const iconCloseEl = useRef(null);

    if (viewer.type == CHOOSE_PHOTO) {
        if (window.innerWidth <= 768) {
            viewerEl.current.style.zIndex = 2;
            iconCloseEl.current.style.zIndex = 2;
            iconCloseEl.current.style.display = 'block';
            $('#viewer').animate({opacity: 1}, 300);
        } else {
            $('#viewer').stop().animate({opacity: 0}, 1, function () {
                $('#viewer').animate({opacity: 1}, 800);
            });
        }
    }

    const onClick = () => {
        $('#viewer').animate({opacity: 0}, 300, function () {
            viewerEl.current.style.zIndex = 1;
        });
        iconCloseEl.current.style.display = 'none';
    };

    const onClickPrev = () => {
        $('#viewer').stop().animate({opacity: 0}, 1, function () {
            $('#viewer').animate({opacity: 1}, 800);
            dispatch(prevPhoto(viewer.currentIndex));
        });
    };

    const onClickNext = () => {
        $('#viewer').stop().animate({opacity: 0}, 1, function () {
            $('#viewer').animate({opacity: 1}, 800);
            dispatch(nextPhoto(viewer.currentIndex));
        });
    };

    return <div id="viewer" ref={viewerEl}>
                <div className="inner">
                    <i className="xi-angle-left xi-2x icon-prev" onClick={onClickPrev}></i>
                    <img className="icon-close" ref={iconCloseEl} src={require('assets/images/icon/close.svg')} onClick={onClick}/>
                    <i className="xi-angle-right xi-2x icon-next" onClick={onClickNext}></i>
                </div>
                <div className="slider">
                    <div className="slide-image" style={{backgroundImage: `url(${viewer.photo[viewer.currentIndex].url})`}}>
                        <div className="caption">
                            <h2>{viewer.photo[viewer.currentIndex].title}</h2>
                            <p>{viewer.photo[viewer.currentIndex].desc}</p>
                        </div>
                    </div>
                </div>
            </div>;
}
export default Viewer;
