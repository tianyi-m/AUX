import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Footer from "./footer";
import Header from "./header";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function StartDJ(props){
  return(
    <View style={styles.container}>
        <Header roomName="START DJ"/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'#121212',
  },
});

export default StartDJ;