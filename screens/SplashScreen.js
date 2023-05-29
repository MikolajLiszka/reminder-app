import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remind.me</Text>
      <Text style={styles.authors}>Autorzy: Mikołaj Liszka, Bartosz Łukaszek</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  authors: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default SplashScreen;
