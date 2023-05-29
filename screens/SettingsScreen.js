import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
    const savePreference = async () => {
        try {
            await AsyncStorage.setItem('@settings', 'Twoje preferencje');
        } catch (error) {
            console.error(error);
        }
    };

    const readPreference = async () => {
        try {
            const value = await AsyncStorage.getItem('@settings');
            if (value !== null) {
                console.log(value);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ustawienia</Text>
            <Button title="Zapisz Preferencje" onPress={savePreference} />
            <Button title="Odczytaj Preferencje" onPress={readPreference} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default SettingsScreen;
