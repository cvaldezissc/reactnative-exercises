/**
 * App.js
 * This class will be the entrance point to our app
 * will be done as the 1st step to load all
 */

import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Home from './src/components/container_components/home';
import Header from './src/components/function_components/header';
import SuggestionList from './src/components/container_components/suggestion-list';
import CategoryList from './src/components/container_components/category-list';
import API from './src/utils/api';
import Player from './src/components/widgets/container/player';
import {Provider} from 'react-redux';
import Loading from './src/components/function_components/loading';


import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './src/store/store';


export default class App extends Component {
  


  state = {
    suggestionList: [],
    categoriesList: []
  }


  async componentDidMount(){
    const movieList = await API.getSuggestions(10);
    initialStore.dispatch({
      type: 'GET_MOVIES_LIST',
      payload: {listOfMovies: movieList}
    });



    const categoryList = await API.getMovies();
    initialStore.dispatch({
      type: 'GET_CATEGORIES_LIST',
      payload: {listOfCategories: categoryList}
    });

  }
  
  render() {
    return (


      <Provider
        store = {store}
      >

      <PersistGate
        loading={<Loading />}
        persistor={persistor}
      >
        <Home>

          <Header />
          <Player />


          <Text >Searcher</Text>


          <CategoryList />

          <SuggestionList />
        
        </Home>
        
        </PersistGate>
      </Provider>
      
      
    );
  }
}
