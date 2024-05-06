import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export const SignUp = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignUp Form</Text>
      <Button title="Goto SignIn" onPress={() => navigate('sign-in')} />
    </View>
  );
};
