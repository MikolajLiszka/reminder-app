import React, { useState } from 'react';
import { View, TextInput, DatePicker, Switch, Button, Text} from 'react-native';


const EventForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState(new Date());
    const [reminderEnabled, setReminderEnabled] = useState(false);
  
    const handleSaveEvent = () => {
        // Twój kod do zapisu wydarzenia

        // Przykładowe operacje:
  
        // Wyświetl nazwę wydarzenia
        console.log('Nazwa wydarzenia:', eventName);

        // Wyświetl opis wydarzenia
        console.log('Opis wydarzenia:', eventDescription);

        // Wyświetl datę wydarzenia
        console.log('Data wydarzenia:', eventDate);

        // Wyświetl status przypomnienia
        console.log('Przypomnienie:', reminderEnabled ? 'Włączone' : 'Wyłączone');

        // Dodatkowa logika zapisu do bazy danych, serwera, itp.
    };
  
    return (
      <View>
        <TextInput
        //   style={styles.input}
          placeholder="Nazwa wydarzenia"
          value={eventName}
          onChangeText={text => setEventName(text)}
        />
        <TextInput
        //   style={styles.input}
          placeholder="Opis wydarzenia"
          value={eventDescription}
          onChangeText={text => setEventDescription(text)}
        />
        <DatePicker
        //   style={styles.datePicker}
          date={eventDate}
          onDateChange={date => setEventDate(date)}
        />
        <View>
          <Text>Przypomnienie</Text>
          <Switch
            value={reminderEnabled}
            onValueChange={value => setReminderEnabled(value)}
          />
        </View>
        <Button title="Zapisz" onPress={handleSaveEvent} />
      </View>
    );
  };

export default EventForm;
  