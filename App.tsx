import React from 'react';
import {Home, Job} from '@src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navbar} from '@src/components';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => <Navbar title="BROWSE JOBS" />}}
        />
        <Stack.Screen
          name="Job"
          component={Job}
          options={{header: () => <Navbar title="JOB" />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
