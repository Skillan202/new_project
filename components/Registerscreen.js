import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useState,} from 'react';
import Rive from 'rive-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Registerscreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const existingUsers = JSON.parse(await AsyncStorage.getItem('users')) || [];

      const userExists = existingUsers.some((user) => user.email === email);
      
      if (userExists) {
        console.log('User with the same email already exists.');
      } else {
        const newUser = { email, password };
        
        existingUsers.push(newUser);
        
        await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
        
        navigation.navigate('login', {email: email, password: password}); // Navigate to the login page after registration
      }
    } catch (error) {
      console.error('Error registering user: ', error);
    }
  };

 
  
  return (
    <View
      style={tw`flex flex-1 flex-col justify-center align-center items-center bg-white `}>
      <Rive resourceName="login" style={{width: 250, height: 100}} />

      <Text style={tw`font-bold text-xl text-black mb-8`}>Register page</Text>
      <TextInput
        value={email}
        style={tw`w-70 h-16 px-3 text-white bg-black shadow-sm rounded-md mb-3 `}
        placeholder="Enter your Email"
        autoCapitalize={'none'}
        onChangeText={text => {
          setEmail(text);
          console.log('email', text);
        }}></TextInput>
      <TextInput
        value={password}
        style={tw`w-70 h-16 px-3 text-white bg-black shadow-sm rounded-md mb-5 `}
        placeholder="Enter your password"
        autoCapitalize={'none'}
        onChangeText={text => {
          setPassword(text);
          console.log(text);
        }}
        secureTextEntry={true}></TextInput>
      <TouchableOpacity onPress={handleRegister}>
        <View
          style={tw`h-16 w-70 bg-black text-center mb-3 rounded-lg flex flex-row  justify-center items-center`}>
          <Text style={tw`text-white text-md `}>Register</Text>
        </View>
      </TouchableOpacity>
      <Text
        onPress={() => {}}
        style={tw`font-md text-underline text-blue-300 mb-10`}>
        Go to login page
      </Text>
    </View>
  );
}

export default Registerscreen;
