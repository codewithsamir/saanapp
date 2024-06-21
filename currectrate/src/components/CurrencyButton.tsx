import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'

type CurrencyButtonProps = PropsWithChildren<{
   name:string;
   flag:string; 
}>

export default function CurrencyButton(props: CurrencyButtonProps):JSX.Element {
  return (
    <View style={styles.buttoncontainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttoncontainer:{
      
        alignItems:'center'
    },
    flag:{
        fontSize:45,
        color:"#ffffff",
        marginBottom:5,
    }
    ,
    country:{
        fontSize:12,
        color:"orange"
    }
})