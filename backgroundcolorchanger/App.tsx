

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.heading}>Color Generating App</Text>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  const [colorName, setColorName] = useState("orange")

const generatecolor = ()=>{
  const numvalue = "0123456789ABCDEF";
  
  let  color = "#"

  for(let i=0;i<6;i++){
color += numvalue[Math.floor(Math.random() * numvalue.length )]
  }
  setColorName(color)
  
}
  return (
 <View style={[styles.container]}>
  <Text style={styles.heading}>Color Generating App</Text>
  <StatusBar backgroundColor={colorName}/>
  <View>
    <View style={[styles.squareshape , {backgroundColor:colorName}]}>
     
    </View>
  </View>
  <Text style={styles.title}>
 colorName is : {colorName}
 </Text>
<TouchableOpacity onPress={generatecolor}>
<View  style={styles.btn}>
<Text style={styles.textbtn}>Change Color</Text>
</View>
</TouchableOpacity>
 </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#2c6f6e",
  },
  title:{
    fontSize:20,
    backgroundColor:"#fff",
    color:'black',
    padding:8,
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:"darkblue",
    shadowOpacity:.5,
  },
  heading:{
    color:"#fff",
    fontSize:30,
   marginBottom:100,
   fontWeight:"bold",
  },
  btn:{
    padding:20,
    backgroundColor:"red",
    borderRadius:10,
  
    marginTop:20,
    elevation:1,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:"gray"
  },
  textbtn:{
    fontSize:20,
    textTransform:"uppercase"
  },
  squareshape:{
    width:200,
    height:200,
    backgroundColor:"red",
    marginBottom:50,
    elevation:20,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:"red"

  }
});

export default App;
