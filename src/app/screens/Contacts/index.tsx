import { Text, View } from 'react-native';

export const Contacts = () => {
  // const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact List</Text>
      {[1, 2, 3, 4, 5, 6, 7].map(e => (
        <Text>Post List #{e}</Text>
      ))}
    </View>
  );
};
