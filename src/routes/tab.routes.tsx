import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { ScreenA } from '../screens/ScreenA';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
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