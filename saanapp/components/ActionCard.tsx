import {Image, StyleSheet, Text, View,TouchableOpacity, Linking} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={[styles.actioncard, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in javascript 21 - ES12
          </Text>
         
        </View>
        <Image source={{
            uri:'https://images.unsplash.com/photo-1718070360743-d7103c38b266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'
          }}
          style={styles.cardimage} />
          <View style={styles.bodycontainer}>
            <Text numberOfLines={3} style={styles.bodytext}>
                Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.Lorem ipsum dolo sit ametr.
                </Text>
          </View>
          <View style={styles.footercontainer}>
       <TouchableOpacity
       activeOpacity={0.6}
        // onPress={()=>openWebsite('https://unsplash.com/')}
        >
        <Text style={styles.sociallink}>readmore....</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>openWebsite('https://www.youtube.com/watch?v=eL5qYJ7y68k&t=55s')}>
        <Text style={styles.sociallink}>Follow me</Text>
       </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight:'bold',
    paddingHorizontal:8,

  },
  actioncard:{
    width:350,
    height:450,
    borderRadius:10,
    overflow: 'hidden',
    marginHorizontal:16,
    marginVertical:12,
  },
  elevatedCard: {
    backgroundColor:'crimson',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:"#333",
    shadowOpacity:.5,
  },

  headingContainer: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    color:"white",
    fontSize:16,
    fontWeight:'600'
  },
  cardimage:{
    height:200,
    
  },
  bodycontainer:{
    
  },
  bodytext:{
    color:'white',
  },
  footercontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:20,
    
  },
  sociallink:{
    fontSize:16,
    textTransform:'capitalize',
    color:'black',
    backgroundColor:'white',
    padding:10,
    borderRadius:8,
    elevation:4,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:"gray",
    fontWeight:'bold'
  }
});
