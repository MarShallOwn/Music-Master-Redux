const initState = {
    artistQuery: "vicetone",
    artist: null,
    topTracks: []
}

const musicReducer = (state = initState, action) =>{
    switch(action.type){
        case "SET_ARTISTQUERY":
            state = {
                ...state,
                artistQuery: action.payload
            };
            break;
        case "SET_ARTIST":
            state = {
                ...state,
                artist: action.payload
            };
            break;
        case "SET_TOPTRACKS":
            state = {
                ...state,
                topTracks: action.payload
            };

            break;
        default:
            break;
    }
    return state;
}


export default musicReducer;