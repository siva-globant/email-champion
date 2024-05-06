import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

const ModuleStatisticsCard = props => {
  const { navigate } = useNavigation();
  const { count, moduleName, to } = props;
  return (
    <View>
      <Text>
        {count} {moduleName}
      </Text>
      <Button title={`View ${moduleName}`} onPress={() => navigate(to)} />
    </View>
  );
};
export const Dashboard = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dashboard</Text>
      <ModuleStatisticsCard count={25} moduleName="Contacts" to="contacts" />
      <ModuleStatisticsCard count={5} moduleName="Campaigns" to="Campaigns" />
      <ModuleStatisticsCard count={3} moduleName="Templates" to="templates" />
    </View>
  );
};
