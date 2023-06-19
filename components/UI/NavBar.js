import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Friends from '../../screens/Friends';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: '#729B79',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }} />
        <Tab.Screen
          name="Friends"
          component={Friends}
          options={{
            title: 'Friends',
            headerStyle: {
              backgroundColor: '#729B79',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShadowVisible: false,
          }} />
        <Tab.Screen
          name="Groups"
          component={Home}
          options={{
            title: 'Groups',
            headerStyle: {
              backgroundColor: '#729B79',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShadowVisible: false,
          }} />
        <Tab.Screen
          name="Activity"
          component={Home}
          options={{
            title: 'Activity',
            headerStyle: {
              backgroundColor: '#729B79',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShadowVisible: false,
          }} />
    </Tab.Navigator>
  )
}

export default NavBar;