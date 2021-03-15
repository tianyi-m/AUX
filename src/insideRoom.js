import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import Header from './header';
import Footer from './footer';
import Button from './button';
// props i.e.: {username: "John Smith"}
function InsideRoom(props){

  const[currMusicName, setCurrMusicName] = useState("BACKEND")
  const[currMusician, setCurrMusician] = useState("BACKEND")
  const[listenersNum, setListenersNum] = useState(123)
  const[likesNum, setLikesNum] = useState(0)

  return(
    //Body
    <View style={styles.container}>
      <Header roomName="BACKEND"/>
      <View mainContent={styles.body}>
        <Text style={styles.bodyText}>You are listening to...</Text>
        <View style={styles.imageBox}><Image source={{uri:'https://wallpapercave.com/wp/wp5986989.jpg'}} style={styles.mainImage}/></View>
        <Text style={styles.bodyText}>{currMusicName} by {currMusician}</Text>
      </View>
      <View style={styles.sideToSide}>
        <Info listenersNum={listenersNum} likesNum={likesNum}/>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => setLikesNum(likesNum+1)}>
        <LikeButton/>
        </TouchableHighlight>
      </View>
      <Footer {...props}/>
    </View>
    )
}

function Info(props){
  return(
    <View style={styles.info}>
      <Text style={styles.bodyText}>{props.listenersNum} listeners </Text>
      <Text style={styles.bodyText}>{props.likesNum} likes</Text>
    </View>
    )
}

function LikeButton(props){
  return(
    <View style={styles.likeBox}>
      <Text style={styles.likeText}>
        Like
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'#121212',
  },

  body:{
    alignItems:'center',
    justifyContent: 'flex-start',
  },

  bodyText: {
    fontSize:20,
    color:'#f9f9f9',
    textAlign:'center',
  },

  imageBox:{
    width:'90%', 
    height:350,
    alignItems:'center',
    margin:20,
  },

  mainImage:{
    backgroundColor:'#f9f9f9',
    width:'100%', 
    height:'100%',
    borderRadius:30,
  },

  sideToSide: {
    marginTop:35,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:40,
    width: '80%',
  },

  info:{
    alignItems:'center',
    justifyContent: 'center',
  },

  likeBox:{
    width: 100,
    height: 50,
    backgroundColor:'#292929',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30
  },

  likeText:{
    color:'#f9f9f9',
    textAlign:'center',
    justifyContent:'center',
  }
});


export default InsideRoom;
