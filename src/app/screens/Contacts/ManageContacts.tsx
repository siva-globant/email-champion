import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export const ManageContacts = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ManageContacts Form</Text>
      <Button title="Goto Contacts" onPress={() => navigate('contacts')} />
    </View>
  );
};
