import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { ScreenA } from '../screens/ScreenA';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name='home'
        component={Home}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => <MaterialIcons name="home" size={22} />
        }}
      />

      <Screen
        name='screenA'
        component={ScreenA}
        options={{
          drawerLabel: 'Sair',
          drawerIcon: () => <MaterialIcons name="logout" size={22} />
        }}
      />
    </Navigator>
  );
};