import React from 'react'
import { View, StyleSheet } from 'react-native';

//this is made to be a container of style


function VideoLayout(props){
    return(
        <View style={styles.container}>
            <View style={styles.video}>
                {props.video}
            </View>
            <View style={styles.overlayLoader}>
                {
                    props.loading &&
                    props.loader
                }
            </View>
            {props.controls}
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        paddingTop: '56.25%'
    },

    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'black'
    },

    overlayLoader: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

});



export default VideoLayout;