import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export const Campaigns = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Campaigns list</Text>
      <Button
        title="Manage Campaigns"
        onPress={() => navigate('campaigns-manage')}
      />
    </View>
  );
};
