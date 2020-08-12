import React from 'react';
import {connect} from 'react-redux';

const Artist = props => {
   
    if(!props.artist){
        return null;
    }

    const {name,images,followers,genres} = props.artist;

    const style = {
        height: 250,
        width: 250,
        borderRadius: 1000,
        objectFit: 'cover'
    };

    return(
        <div>
            <h2>{name}</h2>
            <h2>{followers.total} Followers</h2>
            <h2>{genres.join(', ')}</h2>
            <img style={style}  src={images[0] && images[0].url} alt="artist-profile" />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        artist: state.musicReducer.artist
    }
}

const mapDispatchToProps = dispatch => {
    return{
        
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(Artist);