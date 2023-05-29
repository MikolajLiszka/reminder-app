import React, { useState } from 'react';
import { View, TextInput, Switch, Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || eventDate;
    setEventDate(currentDate);
    setShowDatePicker(Platform.OS === 'ios');
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSaveEvent = () => {
    // Your code to save event goes here

    // Sample operations:
    
    // Display event name
    console.log('Event name:', eventName);

    // Display event description
    console.log('Event description:', eventDescription);

    // Display event date
    console.log('Event date:', eventDate);

    // Display reminder status
    console.log('Reminder:', reminderEnabled ? 'Enabled' : 'Disabled');

    // Additional saving logic to database, server, etc.
  };
  
  return (
    <View>
      <TextInput
      // style={styles.input}
        placeholder="Event name"
        value={eventName}
        onChangeText={text => setEventName(text)}
      />
      <TextInput
      // style={styles.input}
        placeholder="Event description"
        value={eventDescription}
        onChangeText={text => setEventDescription(text)}
      />
      <Button onPress={showDatepicker} title="Select date!" />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={eventDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View>
        <Text>Reminder</Text>
        <Switch
          value={reminderEnabled}
          onValueChange={value => setReminderEnabled(value)}
        />
      </View>
      <Button title="Save" onPress={handleSaveEvent} />
    </View>
  );
};

export default EventForm;
