import React, { useState } from 'react';
import { View, TextInput, Button, Text, Switch, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EventForm = ({ addEvent }) => {
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
    const event = {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      reminder: reminderEnabled
    };

    addEvent(event);
    setEventName('');
    setEventDescription('');
    setEventDate(new Date());
    setReminderEnabled(false);
  };

  return (
    <View>
      <TextInput
        placeholder="Event name"
        value={eventName}
        onChangeText={text => setEventName(text)}
      />
      <TextInput
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
