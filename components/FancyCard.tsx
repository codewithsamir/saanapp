import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1684379149861-27b6bbe04400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
          }}
          style={styles.cardimage}
          resizeMode="cover"
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardtitle}>tourist location</Text>
          <Text style={styles.cardlabel}>JANAKPUR DHAM</Text>
          <Text style={styles.carddescription}>
            some thing great here some thing great here some thing great here
            some thing great here
          </Text>
          <Text style={styles.cardfooter}>this is footer</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1684379149861-27b6bbe04400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
          }}
          style={styles.cardimage}
          resizeMode="cover"
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardtitle}>tourist location</Text>
          <Text style={styles.cardlabel}>JANAKPUR DHAM</Text>
          <Text style={styles.carddescription}>
            some thing great here some thing great here some thing great here
            some thing great here
          </Text>
          <Text style={styles.cardfooter}>this is footer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 450,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,

    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardimage: {
    height: 220,
    marginBottom: 8,
    marginBottom: 8,
  },
  cardbody: {
    padding: 5,
    flex: 1,
    flexGrow: 1,
  },
  cardtitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardlabel: {
    color: '#000000',
    fontSize: 18,
  },
  carddescription: {
    color: '#000000',
    fontSize: 16,
    marginTop: 10,

    fontSize: 18,
  },
  cardfooter: {
    color: '#000000',
    color: '#000000',
    fontSize: 14,
  },
});
