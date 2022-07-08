import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { ScreenA } from '../screens/ScreenA';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='home'
        options={{
          headerShown: false
        }}
        component={Home}
      />

      <Screen
        name='screenA'
        options={{
          title: 'Tela A',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'violet'
          },
          headerTintColor: '#FFF'
        }}
        component={ScreenA}
      />
    </Navigator>
  );
};