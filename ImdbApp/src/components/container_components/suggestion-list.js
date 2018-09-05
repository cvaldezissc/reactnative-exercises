import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../function_components/suggestion-list-layout';

export default class SuggestionList extends Component {

  baseList = [
    {key:'1', title: 'this is the title 1'},
    {key:'2', title: 'this is the title 2'},
    {key:'3', title: 'this is the title 3'},
  ];



  render() {
    return(
      <Layout title="Suggestions 4 you">
        <FlatList 
          data={this.baseList}
          renderItem={({item}) => <Text>{ item.title }</Text>}
        />
      </Layout>
    )
  }
}
