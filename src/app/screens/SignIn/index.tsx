import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export const SignIn = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn Form</Text>
      <Button title="Goto SignUp" onPress={() => navigate('sign-up')} />
      <Button title="Goto Dashboard" onPress={() => navigate('app')} />
    </View>
  );
};
