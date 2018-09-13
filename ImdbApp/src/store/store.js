//import {createStore} from 'redux';
//import reducer from '../reducers/videoReducer';


/*const INITIAL_STATE = {
    videos: 'example element'
}

const store = createStore(
    reducer, 
    INITIAL_STATE
);


export default store;*/

// configureStore.js with redux-persist
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from '../reducers/videoReducer';
import storage from 'redux-persist/lib/storage';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: [],
// })

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor };