import React, { Component } from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import Layout from '../function_components/category-list-layout';
import Empty from '../function_components/empty';
import HorizontalSeparator from '../function_components/horizontal-separator';
import CategoryItem from '../function_components/category-item';
import { connect } from 'react-redux';


class CategoryList extends Component {

    keyExtractor =(item) => item.id.toString();
    renderEmpty = ()=> <Empty emptyText="There are no categories" />
    renderSeparator = () => <HorizontalSeparator />
    renderItem =({item}) => {
        return (
            <CategoryItem {...item}/>
        );
    }

    render() {
        return (
            <Layout
                title="Possible Categories"
            >
                <FlatList 
                    horizontal={true}
                    keyExtractor={this.keyExtractor}
                    data={this.props.obtainedListOfCategories}
                    renderItem={ this.renderItem }
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </Layout>
            
        )
    }
}


function mapStateToProps(state){
    //debugger;
    return {
        obtainedListOfCategories: state.listOfCategories
    }
}


export default connect(mapStateToProps)(CategoryList);
