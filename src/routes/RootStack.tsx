import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="auth">
      <Stack.Screen name="auth" component={AuthStack} />
      <Stack.Screen name="app" component={AppStack} />
    </Stack.Navigator>
  );
};
