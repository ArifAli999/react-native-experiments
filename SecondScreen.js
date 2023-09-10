import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';


const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);


export default function SecondScreen() {
    const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 1
    const scaleAnim = useRef(new Animated.Value(1)).current; // Initial value for scale: 1

    // Function to handle button press
    const handlePress = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 1.5, // Adjust this value to control the zoom level
                duration: 4000,
                useNativeDriver: true
            })
        ]).start();
    };
    return (
        <View className='flex min-h-screen bg-black items-center '>
            <AnimatedImageBackground

                source={require('./assets/splash.jpeg')}
                className='flex min-h-screen w-full items-center mb-20  object-cover justify-end'
                style={{
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }]
                }}
            >
                <TouchableOpacity onPress={handlePress}>
                    <View className='text-white flex items-center justify-center text-center z-50 px-4 py-4   border border-red-800 min-w-[150px] rounded-full mb-20'
                    >
                        <Text className='text-white font-light'>explore</Text>
                    </View>
                </TouchableOpacity>

            </AnimatedImageBackground>


            <StatusBar style="" hidden />
        </View>
    );
}


