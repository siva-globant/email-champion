import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp } from '@screens';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="sign-in">
      <Stack.Screen
        name="sign-in"
        options={{ title: 'SignIn' }}
        component={SignIn}
      />
      <Stack.Screen
        name="sign-up"
        options={{ title: 'SignUp' }}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};
