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



export default class App extends Component {
  


  state = {
    suggestionList: [],
    categoriesList: []
  }


  async componentDidMount(){
    const variable = await API.getSuggestions(10);
    const categories = await API.getMovies();

    console.log(categories);

    this.setState({
      suggestionList: variable,
      categoriesList: categories
    })
  }
  
  render() {
    return (

      <Home>

        <Header />
        <Player />




        <Text >Searcher</Text>
        <Text >Categories</Text>


        <CategoryList 
          list={this.state.categoriesList}
        />

        <SuggestionList 
          list={this.state.suggestionList}
        />
      
      </Home>
      
    );
  }
}
