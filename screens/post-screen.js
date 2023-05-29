import React from 'react';
import { View, Text, Button } from 'react-native';

const PostsScreen = ({ events, navigation, deleteEvent }) => {
  return (
    <View>
      <Text>Lista wiadomości</Text>
      {events.map((event, index) => (
        <View key={index}>
          <Text>{event.name}</Text>
          <Button title="Edytuj" onPress={() => navigation.navigate('Edit', { eventIndex: index, eventData: { ...event, date: event.date.getTime() } })} />
          <Button title="Usuń" onPress={() => deleteEvent(index)} />
        </View>
      ))}
    </View>
  );
};

export default PostsScreen;
