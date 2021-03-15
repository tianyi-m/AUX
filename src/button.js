import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

function Button(props){
  return(
    <View style={styles.button}>
      <Text style={styles.buttonText}>{props.button}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#292929',
    paddingTop:'5%',
    width: 200,
    height: 60,
    paddingBottom:'5%',
    marginBottom:'10%',
    borderRadius:30,
    alignItems:'center',
  },

  buttonText:{
    color:'#f9f9f9',
  },

  footerBox:{
    width:'100%',
  }

});

export default Button;