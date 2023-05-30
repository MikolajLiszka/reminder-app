import React from 'react';
import { View, Button } from 'react-native';
import EventForm from '../components/EventForm';

const HomeScreen = ({ navigation, addEvent }) => {
  return (
    <View>
      <Button
        title="Przejdź do listy wydarzeń"
        onPress={() => navigation.navigate('Posts')}
      />
      <Button
        title="O aplikacji"
        onPress={() => navigation.navigate('About')}
      />
      <EventForm addEvent={addEvent} />
      
      <Button
        title="Ustawienia"
        onPress={() => navigation.navigate('Settings')}
/>

    </View>
  );
};

export default HomeScreen;
