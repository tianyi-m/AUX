import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

function Header(props){
    return(
        <Text style={styles.header}>{props.roomName}</Text> 
      )
  }

  const styles = StyleSheet.create({
    header: {
      fontSize:40, 
      marginTop:10,
      marginBottom:30,
      marginLeft: 20,
      color: "#f9f9f9",
      //position: 'absolute',
      //top:0,
    }
  });
  
  
  export default Header;