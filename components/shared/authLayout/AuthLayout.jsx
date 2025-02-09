import { images } from '@/services';
import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthLayout = ({ children, title = "Log In to" }) => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center items-center min-h-[85vh] px-4 my-6'>

                    <Image
                        source={images.logo}
                        className='w-[130px] h-[84px]'
                        resizeMode='contain'
                    />

                    <View className='relative'>
                        <Text className='text-3xl text-white font-bold text-center max-w-[290px]'>
                            {title}{" "}
                            <Text className='text-secondary-200'>
                                Aora
                            </Text>
                        </Text>

                        <Image
                            source={images.path}
                            className='w-[70px] h-[15px] absolute -bottom-2 -right-1'
                            resizeMode='contain'
                        />
                    </View>

                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AuthLayout;