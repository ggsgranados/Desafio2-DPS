import React from 'react';
import Peliculas from '../screens/Peliculas';
import Series from '../screens/Series';
import Proximamente from '../screens/Proximamente';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

const Tab=createBottomTabNavigator();

export default function Navigation(){
return(

<Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Peliculas') {
            iconName = focused
              ? 'film'
              : 'film-outline';
          } else if (route.name === 'Series') {
            iconName = focused ? 'tv' : 'tv-outline';
          }
          else if (route.name === 'Proximamente') {
            iconName = focused ? 'play-forward-circle' : 'play-forward-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
>
    
 <Tab.Screen name="Peliculas" component={Peliculas} options={{title:'Peliculas'}}/>
 <Tab.Screen name="Series" component={Series} options={{title:'Series'}}/>
 <Tab.Screen name="Proximamente" component={Proximamente} options={{title:'Proximamente'}}/>
  
 </Tab.Navigator>
);
}
