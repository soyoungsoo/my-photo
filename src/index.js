import React from 'react';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reducer from './reducer/index';
import App from './container/App'
import './index.css';

const initialState = {
    viewer:
        {
            currentIndex: 0,
            photo: [
                {
                    title: 'title',
                    desc: 'desc',
                    url: require('assets/images/fulls/01.jpg')
                },
                {
                    title: 'title2',
                    desc: 'desc2',
                    url: require('assets/images/fulls/02.jpg')
                },
                {
                    title: 'title3',
                    desc: 'desc3',
                    url: require('assets/images/fulls/03.jpg')
                },
                {
                    title: 'title4',
                    desc: 'desc4',
                    url: require('assets/images/fulls/04.jpg')
                },
                {
                    title: 'title5',
                    desc: 'desc5',
                    url: require('assets/images/fulls/05.jpg')
                },
                {
                    title: 'title6',
                    desc: 'desc6',
                    url: require('assets/images/fulls/06.jpg')
                },
                {
                    title: 'title7',
                    desc: 'desc7',
                    url: require('assets/images/fulls/07.jpg')
                },
                {
                    title: 'title8',
                    desc: 'desc8',
                    url: require('assets/images/fulls/08.jpg')
                },
                {
                    title: 'title9',
                    desc: 'desc9',
                    url: require('assets/images/fulls/09.jpg')
                },
                {
                    title: 'title10',
                    desc: 'desc10',
                    url: require('assets/images/fulls/10.jpg')
                },
                {
                    title: 'title11',
                    desc: 'desc11',
                    url: require('assets/images/fulls/11.jpg')
                },
                {
                    title: 'title12',
                    desc: 'desc12',
                    url: require('assets/images/fulls/12.jpg')
                },
            ]
        }
};

const store = configureStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// store.subscribe(render);
// render();
