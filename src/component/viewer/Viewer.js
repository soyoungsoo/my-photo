import React from 'react';
import './viewer.css';

function Viewer() {
    return <div id="viewer">
                <div className="inner">
                    <div className="nav-next"></div>
                    <div className="nav-previous"></div>
                    <div className="toggle"></div>
                </div>
                <div className="slider">
                    <div className="slide-image">
                        <div className="caption">
                            <h2>Mattis lorem sodales</h2>
                            <p>Feugiat auctor leo massa, nec vestibulum nisl eratfaucibus, rutrum nulla.</p>
                        </div>
                    </div>
                </div>
            </div>;
}

export default Viewer;
