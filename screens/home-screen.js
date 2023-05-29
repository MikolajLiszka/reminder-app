import React from 'react';
import { View, Button } from 'react-native';
import EventForm from '../components/EventForm';

const HomeScreen = ({ navigation, addEvent }) => {
  return (
    <View>
      <Button
        title="Przejdź do listy wiadomości"
        onPress={() => navigation.navigate('Posts')}
      />
      <EventForm addEvent={addEvent} />
    </View>
  );
};

export default HomeScreen;
