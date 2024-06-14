import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlatCard = () => {
  return (
    <View>
      <Text style={Styles.headingText}>flat card</Text>
      <View style={Styles.container}>
        <View style={[Styles.card , Styles.cardone]}>
            <Text>Red</Text>
        </View>
        <View style={[Styles.card , Styles.cardtwo]}>
            <Text>blue</Text>
        </View>
        <View style={[Styles.card , Styles.cardthree]}>
            <Text>green</Text>
        </View>
     
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
    paddingHorizontal:10,
      },
  container:{
    flex:1,
    flexDirection:'row',
 padding:10,

  },
  card:{
    width:100,
    height:100,
    borderRadius:10,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:3,
    
  },
  cardone:{
    backgroundColor:'red'
  },
  cardtwo:{
    backgroundColor:'blue'
  },
  cardthree:{
    backgroundColor:'green'
  },
});

export default FlatCard;
