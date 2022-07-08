import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { ScreenA } from '../screens/ScreenA';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'violet',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              color={color}
              size={size}
            />
          )
        }}
      />

      <Screen
        name='screenA'
        component={ScreenA}
        options={{
          tabBarLabel: 'Novo',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="add"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Navigator>
  );
};