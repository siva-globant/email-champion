import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Campaigns,
  Contacts,
  Dashboard,
  ManageCampaigns,
  ManageContacts,
  Templates,
} from '@screens';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Screen
        name="dashboard"
        options={{ title: 'Dashboard' }}
        component={Dashboard}
      />
      <Stack.Screen
        name="contacts"
        options={{ title: 'Contacts' }}
        component={Contacts}
      />
      <Stack.Screen
        name="contacts-manage"
        options={{ title: 'Manage Contacts' }}
        component={ManageContacts}
      />
      <Stack.Screen
        name="templates"
        options={{ title: 'Templates' }}
        component={Templates}
      />
      <Stack.Screen
        name="campaigns"
        options={{ title: 'Campaigns' }}
        component={Campaigns}
      />
      <Stack.Screen
        name="campaigns-manage"
        options={{ title: 'Manage Campaigns' }}
        component={ManageCampaigns}
      />
    </Stack.Navigator>
  );
};
