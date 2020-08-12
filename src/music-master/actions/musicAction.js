export function setArtistQuery(artistQuery){
    return{
        type: "SET_ARTISTQUERY",
        payload: artistQuery
    }
}

export function setArtist(artist){
    return{
        type: "SET_ARTIST",
        payload: artist
    }
}

export function setTopTracks(topTracks){
    return{
        type: "SET_TOPTRACKS",
        payload: topTracks
    }
}