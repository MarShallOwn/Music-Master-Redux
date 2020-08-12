import React from 'react';
import ReactDOM from 'react-dom';
import MusicMaster from './music-master/components/App';
import './index.css';
import store from './music-master/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <MusicMaster />
    </Provider>,
    document.getElementById('root'));