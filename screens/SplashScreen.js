import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // początkowa wartość opacity

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1, // końcowa wartość opacity
        duration: 5000, // czas trwania animacji
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <View style={styles.container}>
      <Animated.Text style={{...styles.title, opacity: fadeAnim}}>Remind.me</Animated.Text>
      <Animated.Text style={{...styles.authors, opacity: fadeAnim}}>Autorzy: Mikołaj Liszka, Bartosz Łukaszek</Animated.Text>
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
