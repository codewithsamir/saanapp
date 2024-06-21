import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcard() {
  return (
    <View>
      <Text style={styles.headingText} >Elevatedcard</Text>

      <ScrollView horizontal={true}    showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>scroll </Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>more... </Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>❤🤦‍♀️ </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
    paddingHorizontal:10,
      },
      container:{
        padding:8,
      },
      card:{
        width:100,
        height:100,
        borderRadius:4,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:8,

      },
      cardElevated:{
        backgroundColor:'gray',
        elevation:4,
        shadowOffset:{
width:10,
height:10
        },
        shadowColor:'red',
        shadowOpacity:.5,
        shadowRadius:5,
      }
})