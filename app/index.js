import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {hp, wp} from '../helpers/common'
import { LinearGradient } from 'expo-linear-gradient'
import Animated ,{ FadeInDown } from 'react-native-reanimated'
import  { theme } from '../constants/theme'
import { useRouter } from 'expo-router'

const WelcomeScreen= () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={require('../assets/images/3.png')}
                style={styles.bgImage}
                resizeMode="cover"
            />
            {/* linear gradient */}
            <Animated.View entering={FadeInDown.duration(600)} style={{flex: 1}}>
                <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'white']}
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.8 }}
                />
                {/* content */}
                <View style={styles.contentContainer}>
                    <Animated.Text
                        entering={FadeInDown.delay(400).springify()}
                        style={styles.title}>
                            Pixels
                        </Animated.Text>
                        <Animated.Text
                        entering={FadeInDown.delay(500).springify()}
                        style={styles.punchline}>
                            Every Pixel has a story
                        </Animated.Text>
                         <Pressable onPress={()=> router.push('home')} style={styles.startButton}>
                            <Text style={styles.startText}>Start Explore</Text>
                         </Pressable>   
                </View>
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        position: 'absolute',
        width: wp(100),
        height: hp(100),
    },
    gradient: {
        width: wp(100),
        height: hp(100),
        position: 'absolute',
        bottom: 0,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 14,
    },
    title: {
        fontSize: hp(7),
        color: theme.colors.neutral(0.9),
        fontWeight: theme.fontWeights.bold
    },
    punchline: {
        fontSize: hp(2),
        letterSpacing: 1,
        marginBottom: 10,
        fontWeight: theme.fontWeights.medium
    },
    startButton: {
        marginBottom: 50,
        backgroundColor: theme.colors.neutral(0.9),
        padding: 14,
        paddingHorizontal: 90,
        borderRadius: theme.radius.xl,
        bordercurve: 'continuous'
    },
    startText: {
        color: theme.colors.white,
        fontWeight: theme.fontWeights.medium,
        fontSize: hp(3),
        letterSpacing: 1
    }

})

export default WelcomeScreen