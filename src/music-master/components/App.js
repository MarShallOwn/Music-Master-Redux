import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from '../containers/Search';

const App = () => {
        return(
            <div>
                <h2>Music Master</h2>
                <Search/>
                <Artist/>
                <Tracks/>
            </div>
        )
}

export default App;