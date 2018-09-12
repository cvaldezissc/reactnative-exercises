
import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import Video from 'react-native-video';
import Layout from '../functional/player-layout';
import PlayPauseButton from '../functional/playpause-button';
import PlayerControlLayout from '../functional/player-control-layout';


export default class Player extends Component {


  state = {
      loading: true,
      paused: false,
  }  

  EXAMPLE_URL1 = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
  EXAMPLE_URL2 = "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4";



  onBuffer = ({ isBuffering }) => {
    this.setState({
        loading: isBuffering
    })
  }

  playPause =() => {
    this.setState({
        paused: !this.state.paused
    });
  }

  render() {
      return(
        <Layout
            loading={this.state.loading}
            video={
                <Video 
                    source={{uri: this.EXAMPLE_URL2}}
                    style={styles.videoPlayer}
                    resizeMode="contain"
                    onBuffer={this.onBuffer}
                    paused={this.state.paused}
                />
            }
            loader={
                <ActivityIndicator color="red" />
            }
            controls={
                <PlayerControlLayout>
                    <PlayPauseButton 
                        onPress={this.playPause}
                        paused={this.state.paused}
                    />
                    <Text>ProgressBar |</Text>
                    <Text>TimeLeft |</Text>
                    <Text>Fullscreen |</Text>
                </PlayerControlLayout>
            }
        />
        )
  }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: 100,
    },

    videoPlayer:{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
    
})



