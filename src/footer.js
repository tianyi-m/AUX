import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Button from "./button";
import RoomsList from "./RoomsList";

function Footer(props){
    return(
      <View style={styles.footerBox}>
            <Button button="Listen" />
            <View style={styles.line}></View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => props.navigation.navigate("StartDJ")}>
              <Button button="DJ"/>
            </TouchableHighlight>
      </View>
    )
  }

  const styles = StyleSheet.create({
    footerBox:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#292929',
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: 0,
    },

    line:{
        width: 1,
        height:'100%',
        backgroundColor:'#121212',
    }

  
  });
  
  export default Footer;
  