/**
 * App.js
 * This class will be the entrance point to our app
 * will be done as the 1st step to load all
 */

import React, {Component} from 'react';
import { Text } from 'react-native';
import Home from './src/components/container_components/home';
import Header from './src/components/function_components/header';
import SuggestionList from './src/components/container_components/suggestion-list';

export default class App extends Component {
  render() {
    return (

      <Home>

        <Header />

        <Text >Searcher</Text>
        <Text >Categories</Text>
        <SuggestionList />
      
      </Home>
      
    );
  }
}
