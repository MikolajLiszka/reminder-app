// import React from 'react';
// import { Button, View } from 'react-native';
// import EventForm from '../components/EventForm';

// const HomeScreen = ({ navigation }) => {
//     return (
//       <View>
//         <Button
//           title="Przejdź do listy wiadomości"
//           onPress={() => navigation.navigate("Posts")}
//         />
//         <EventForm />
//       </View>
//     );
//   };

import React from 'react';
import { View, Button } from 'react-native';
import EventForm from '../components/EventForm';

const HomeScreen = ({ navigation }) => {
  const handleNavigatePosts = () => {
    navigation.navigate('Posts');
  };

  return (
    <View>
      <Button
        title="Przejdź do listy wiadomości"
        onPress={handleNavigatePosts}
      />
      <EventForm />
    </View>
  );
};

export default HomeScreen;

