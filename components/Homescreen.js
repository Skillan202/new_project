import React, {useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useState} from 'react';
import {useRoute} from '@react-navigation/native';
function Homescreen({navigation}) {
  const route = useRoute();
  const currentPass = route.params.password;
  const currentEmail = route.params.email;
  const [on, SetOn] = useState(false);
  const setData = () => {
    SetOn(true);
  };
  return (
    <View style={tw`flex-1 flex flex-col p-4 justify-between`}>
      <View style={tw`flex flex-row justify-between w-screen`}>
        <View style={tw`flex flex-col `}>
          <Text style={tw`font-bold text-xl text-black pb-1`}>
            Welcome user
          </Text>
          <Text style={tw`font-light text-md text-gray-500 italic pb-3`}>
            "Customer is the king"
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('login');
          }}>
          <View
            style={tw`w-20 h-10 bg-black text-white flex flex-row justify-center items-center text-center rounded-md shadow-md `}>
            <Text style={tw`text-white font-semibold text-sm`}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      {on && (
        <View
          style={tw`h-50 w-90 shadow-sm rounded-sm flex flex-col items-center justify-center`}>
          <Text style={tw`font-bold text-lg text-black pb-8`}>
            User Credentials
          </Text>
          <Text style={tw`font-light text-md text-black pb-2`}>
            User Email address : {currentEmail}
          </Text>
          <Text style={tw`font-light text-md text-black pb-4`}>
            User secret password : {currentPass}
          </Text>
        </View>
      )}
      <TouchableOpacity onPress={setData}>
        <View
          style={tw`w-screen h-15 bg-black text-white flex flex-row justify-center items-center text-center rounded-md shadow-md `}>
          <Text style={tw`text-white font-semibold text-lg`}>
            Show user details
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Homescreen;
