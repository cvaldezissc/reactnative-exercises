import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


function VerticalSeparator(props){
    return(
        <View 
            style={
                [
                    styles.container,
                    {
                        borderTopColor: (props.color) ? props.color : '#eaeaea'
                    }
            
            ]} 
        />
    );
}

const styles = StyleSheet.create({
    container:{
        borderTopWidth: 1,
    },

    text:{
        fontSize: 16,
    },

});



export default VerticalSeparator;