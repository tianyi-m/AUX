import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Footer from "./footer";
import Header from "./header";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RoomsList(props){

  React.useEffect(() => {
      const getAccessToken = async () => {
        try {
          const access_token = await AsyncStorage.getItem('accessToken')
          if(access_token !== null) {
            // value previously stored
            console.log(access_token);
          } else {
            console.log("access_token==null!");
          }
        } catch(e) {
          // error reading value
          console.log(e);
        }
      }
      getAccessToken();
    }, );

  return(
    <View style={styles.container}>
        <Header roomName="TEST"/>
          <RoomsContainer {...props}/>
      <Footer {...props}/>
      </View>
    )
}

function Rooms(props){
  return (
  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={() => props.navigation.navigate("InsideRoom")}>

    <View style={styles.roomsStyle}>
      <Text style={styles.roomsName}>{props.roomName}</Text> 
      <View style={styles.interaction}>
        <View style={styles.nPeople}>     
          <Image source={{uri:"https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg"}} style={styles.people}/>
          <Text style={styles.peopleText}>{props.likesNum} </Text>
        </View>
        <View style={styles.nThumbsUp}>
          <Image source={{uri:"https://emojis.wiki/emoji-pics/twitter/thumbs-up-twitter.png"}} style={styles.likes}/>
          <Text style={styles.likesText}>{props.thumbsUpNum}</Text>
        </View>   
      </View>
    </View>
    </TouchableHighlight>
  )
}

function RoomsContainer(props){
  return(
    <ScrollView style={styles.roomsContainer}>
      <Rooms roomName="Jazz" likesNum="200" thumbsUpNum="10" {...props}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  roomsContainer:{
    marginLeft:5,
    width:'95%',
  },

  roomsStyle: {
    flexDirection:'row',
    height: 50,
    width: '100%',
    backgroundColor: "#292929",
    padding: 10,
    marginBottom: '5%',
    borderRadius:30,
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  roomsName: {
    color:'#f9f9f9',
    marginLeft: 10,
  },

  interaction:{
    width:'40%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  nPeople:{
    flexDirection:'row',
    textAlign:'center',
    width:'50%',
    alignItems:'center',
  },

  peopleText:{
    color:'#f9f9f9',
    paddingLeft:5,
  },

  nThumbsUp:{
    flexDirection:'row',
    textAlign:'center',
    width:'50%',
    alignItems:'center'
  },

  likesText:{
    color:'#f9f9f9',
    paddingLeft:5,
  },

  people: {
    width:10,
    height:10      ,
  },

  likes: {
    width: 10,
    height: 10,
  },
});


export default RoomsList;