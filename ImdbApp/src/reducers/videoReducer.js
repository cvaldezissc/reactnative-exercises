

function videos(state={}, action){
    switch(action.type){

        case 'GET_CATEGORIES_LIST': {
            return {...state, ...action.payload}
        }

        case 'GET_MOVIES_LIST': {
            return {...state, ...action.payload}
        }

        default:
            return state;

    }
}


export default videos;