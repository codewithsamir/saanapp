import React from 'react';
import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import FlatCard from './components/FlatCard';
import Elevatedcard from './components/Elevatedcard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <Elevatedcard />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
