import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home-screen';
import PostsScreen from './screens/post-screen';
import EditEventScreen from './screens/EditEventScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const editEvent = (index, event) => {
    const newEvents = [...events];
    newEvents[index] = event;
    setEvents(newEvents);
  };

  const deleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} addEvent={addEvent} />}
        </Stack.Screen>
        <Stack.Screen name="Posts">
          {props => <PostsScreen {...props} events={events} deleteEvent={deleteEvent} />}
        </Stack.Screen>
        <Stack.Screen name="Edit">
          {props => <EditEventScreen {...props} editEvent={editEvent} />}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
