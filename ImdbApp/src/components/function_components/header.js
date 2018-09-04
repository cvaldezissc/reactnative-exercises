import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';


function Header(props){
    return(
        <View>
            <SafeAreaView>

                <View style={styles.container}>
                    <Image 
                        source={require('../../assets/img/mainlogo.png')} 
                        style={styles.imageLogo}
                    />

                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>

            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
  imageLogo:{
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },

  container:{
    //backgroundColor: 'red',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  right:{
    //backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})



export default Header;