import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Layout from '../function_components/suggestion-list-layout';
import Empty from '../function_components/empty';
import VerticalSeparator from '../function_components/vertical-separator';
import SuggestionItem from '../function_components/suggestion-item';


export default class SuggestionList extends Component {


  baseList = [
    {key:'1', title: 'this is the title 1'},
    {key:'2', title: 'this is the title 2'},
    {key:'3', title: 'this is the title 3'},
  ];


  renderEmpty = ()=> <Empty emptyText="There are no suggestions" />
  renderSeparator = () => <VerticalSeparator />
  renderItem =({item}) => {
    //here is important to pass the item element, 
    //   if not, the children element will not change its info
    return (
        <SuggestionItem {...item}/>
    );
  }
  keyExtractor =(item) => item.id.toString();



  render() {
    return(
      <Layout title="Suggestions 4 you">
        <FlatList 
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          renderItem={ this.renderItem }
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </Layout>
    )
  }
}


const styles = StyleSheet.create({

});