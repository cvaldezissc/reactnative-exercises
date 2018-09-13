import React from 'react'
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';

//this is made to be a container of style


function Loading(props){
    return(
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../../assets/img/mainlogo.png')}
            /> 
            <ActivityIndicator 

            />
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 200,
        height: 80,
        marginBottom: 10,
        resizeMode: 'contain'
    },


});



export default Loading;