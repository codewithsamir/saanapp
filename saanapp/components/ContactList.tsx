import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts = [
        {
          id: 1,
          name: "John Doe",
          status: "Active",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        },
        {
          id: 2,
          name: "Jane Smith",
          status: "Inactive",
          image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        },
        {
          id: 3,
          name: "Alice Johnson",
          status: "Active",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        },
        {
          id: 4,
          name: "Bob Brown",
          status: "Active",
          image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        },
        {
          id: 5,
          name: "Emily Williams",
          status: "Inactive",
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        },
        {
          id: 6,
          name: "Michael Jones",
          status: "Active",
          image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
        },
        {
          id: 7,
          name: "Olivia Davis",
          status: "Inactive",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        },
        {
          id: 8,
          name: "William Wilson",
          status: "Active",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        },
        {
          id: 9,
          name: "Sophia Taylor",
          status: "Active",
          image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
        },
        {
          id: 10,
          name: "James Martinez",
          status: "Inactive",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        },
      ];
      
      
      

  return (
    <View>
         <Text style={styles.headingText}>Contact Lists</Text>
  <ScrollView style={styles.container} scrollEnabled = {false}>
  {contacts.map(({id,name,image,status})=> 
      (<View key={id} style={styles.usercard}>
        <Image source={{uri: image}}  style={styles.cardimage}/>
<View style={styles.cardinfo}>
<Text style={styles.headingText} style={styles.username}>{name}</Text>
<Text style={styles.headingText} style={styles.userstatus}>{status}</Text>
</View>
      </View>))}
  </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal:8,
    
      },
    container:{
     paddingBottom:40,
     paddingTop:20,
     paddingHorizontal:10,
    },
    usercard:{
        // borderColor: 'red',
        // borderWidth: 1,
        margin:5,
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        padding:5,
        borderRadius:10,
        backgroundColor:'purple',
        
    
    },
    cardinfo:{
        marginLeft:15,
        
    },
    cardimage:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'red',
    }
    , 
    username:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff'
    },
    userstatus:{
        fontSize:14,
        
    },
});
