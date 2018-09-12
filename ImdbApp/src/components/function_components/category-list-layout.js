import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, } from 'react-native';


function CategoryListLayout(props){
    return(
              
        <ImageBackground
            style={styles.container}
            source={require('../../assets/img/background_categories.png')}
        >
            
                <Text style={styles.title}>{props.title}</Text>
                {props.children}

        </ImageBackground>
        

    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 30,
        paddingHorizontal: 10

    },

    title:{
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})



export default CategoryListLayout;