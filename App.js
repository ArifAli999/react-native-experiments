import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View, Animated, TouchableOpacity, SafeAreaView } from 'react-native';


const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);


export default function App() {

  return (
    <SafeAreaView className='flex min-h-screen bg-black  '>

      <View className='flex flex-row items-center justify-between w-full mb-4 p-6'>
        <View className='flex p-4 rounded-full bg-purple-400/60 border border-purple-600'></View>
        <View className='text-base text-white font-bold px-4 py-2 bg-green-400 rounded-full'><Text className='text-green-800 font-bold '>PRO</Text></View>
      </View>

      <View className='flex mt-2 mb-6 p-6'>
        <Text className='text-base text-white font-thin'>current balance</Text>
        <View className='flex flex-row items-center justify-between w-full mt-1.5'>
          <Text className='text-4xl text-white font-normal'>$2,000.81</Text>
        </View>
      </View>


      <View className='border-t border-stone-800 bg-white w-full flex items-center justify-between flex-row py-4'>
        <Text className='text-base text-black font-normal  pl-6'>recent activity</Text>
        <Text className='text-base text-black font-bold  pr-6'>...</Text>
      </View>


      <View className='flex flex-col items-center w-full '>

        <View className='flex flex-row  border  border-l-0 border-r-0 w-full  px-4 py-2 justify-between items-center p-6'>
          <Text className='text-base text-white font-light'>
            Acne Inc
          </Text>
          <Text className='text-base text-green-300 font-light'>+ $150.55</Text>
        </View>
        <View className='flex flex-row  border  border-l-0 border-r-0 w-full border-stone-800 px-4 py-2 justify-between items-center p-6'>
          <Text className='text-base text-white font-light'>
            Acne Inc
          </Text>
          <Text className='text-base text-red-300 font-light'>- $150.55</Text>
        </View>
        <View className='flex flex-row  border  border-l-0 border-r-0 w-full  px-4 py-2 justify-between items-center p-6'>
          <Text className='text-base text-white font-light'>
            Acne Inc
          </Text>
          <Text className='text-base text-red-300 font-light'>- $50.00</Text>
        </View>
        <View className='flex flex-row  border  border-l-0 border-r-0 w-full border-stone-800 px-4 py-2 justify-between items-center p-6'>
          <Text className='text-base text-white font-light'>
            Acne Inc
          </Text>
          <Text className='text-base text-green-300 font-light'>+ $150.55</Text>
        </View>
      </View>
      <View className='flex  bottom-0 absolute border-t border-t-zinc-600   justify-between w-full  p-4 mb-0 min-h-[80px] '>
        <View className='flex flex-row items-center justify-between w-full '>
          <Text className='text-base text-white font-normal'>HSBC 54551249</Text>
          <Text className='text-base text-white font-bold'>...</Text>
        </View>
      </View>
      <StatusBar style="" hidden />
    </SafeAreaView>
  );
}


