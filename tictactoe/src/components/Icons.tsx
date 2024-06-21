import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
// import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
type Iconprops = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: Iconprops) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={60} color={'#f7cd2e'} />;
      break;
    case 'cross':
      return <Icon name="times" size={60} color={'#38cc77'} />;
      break;
      default:
        return <Icon name="pencil" size={40} color={'#0d0d0d'}  />;
        break;
  }

};



export default Icons;
