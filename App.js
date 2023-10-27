import React from 'react'
import Loginscreen from './components/Loginscreen';
import Registerscreen from './components/Registerscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './components/Homescreen';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Loginscreen} />
        <Stack.Screen name="register" component={Registerscreen} />
        <Stack.Screen name="home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App