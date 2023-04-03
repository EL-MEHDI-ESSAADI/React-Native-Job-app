import React from 'react';
import {Home, JobPage} from '@src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navbar} from '@src/components';
import { Job } from '@src/types';

type RootStackParamList = {
  Home: undefined;
  Job: {job: Job};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
          component={JobPage}
          options={{header: () => <Navbar title="JOB" withBack />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
