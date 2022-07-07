import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { ScreenA } from '../screens/ScreenA';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='screenA'
        component={ScreenA}
      />
    </Navigator>
  );
};