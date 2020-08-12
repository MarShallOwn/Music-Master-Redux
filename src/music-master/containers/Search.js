import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setArtistQuery, setArtist, setTopTracks} from '../actions/musicAction';

class Search extends Component{

    componentDidMount(){
        this.searchArtist();
    }

    updateAtristQuery = event =>{
        this.props.setArtistQuery(event.target.value);
    }

    searchArtist = () =>{
        fetch(`https://spotify-api-wrapper.appspot.com/artist/${this.props.artistQuery}`)
        .then(response => response.json())
        .then(json => {
            if(json.artists.total > 0){
                const artist = json.artists.items[0];
                
                this.props.setArtist(artist);
                fetch('https://spotify-api-wrapper.appspot.com/artist/'+this.props.artist.id+'/top-tracks')
                .then(response => response.json())
                .then(json => this.props.setTopTracks(json.tracks) )
                .catch(error => {});
            }

        })
        .catch(error => {});
    }

    
    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }

    render(){
        return(
            <div>
                <input onChange={this.updateAtristQuery} onKeyPress={this.handleKeyPress} placeholder="Search for an artist" />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        artistQuery: state.musicReducer.artistQuery,
        artist: state.musicReducer.artist
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setArtistQuery: artistQuery => {
            dispatch(setArtistQuery(artistQuery));
        },
        setArtist: artist => {
            dispatch(setArtist(artist));
        },
        setTopTracks: topTracks =>{
            dispatch(setTopTracks(topTracks));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);