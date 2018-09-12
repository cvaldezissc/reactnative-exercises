import React from 'react'
import { View, StyleSheet, TouchableHighlight, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

//this is made to be a container of style


function PlayPauseButton(props){
    return(
            <TouchableHighlight
                style={styles.container}
                onPress={props.onPress}
                underlayColor="red"
                hitSlop={{
                    left: 5,
                    right: 5,
                    bottom: 5,
                    top: 5,
                }}
            >

                {
                    props.paused ? <Text style={styles.button}>PLAY</Text> : <Text style={styles.button}>PAUSE</Text>
                }
                

            </TouchableHighlight>
    );
}

const styles = StyleSheet.create({

    container:{
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray',
    },

    button:{
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    }

});



export default PlayPauseButton;