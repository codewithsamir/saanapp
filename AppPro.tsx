import React from 'react';
import {View, Text, StyleSheet, useColorScheme, SafeAreaView} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkmode = useColorScheme() === 'light'
  return (
    <>
    <View style={Styles.container}>
      <Text style={isDarkmode ? Styles.whiteText : Styles.darkText}>hello samir</Text>
      <View style={Styles.border}>
<Text>hello world</Text>
    </View>
    <View>
<Text>hello world</Text>
    </View>
    </View>

    </>
  );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#222222",
        padding:20,
    },
    whiteText:{
        color:'white',
        fontSize:'50px',
    },
    darkText:{
        color:'white',
        fontWeight:'bold',
        fontSize:60
    
    },
    fontSize:{
        fontSize:'50px',
    },
    border:{
      backgroundColor:"red",
      
    }
})

export default AppPro;
