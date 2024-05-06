import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export const ManageCampaigns = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Campaigns Form</Text>
      <Button title="List Campaigns" onPress={() => navigate('campaigns')} />
    </View>
  );
};
