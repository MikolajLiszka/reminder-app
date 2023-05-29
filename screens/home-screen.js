import { Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Przejdź do listy wiadomości"
        onPress={() => navigation.navigate("Posts")}
      />
    );
  };

export default HomeScreen;
