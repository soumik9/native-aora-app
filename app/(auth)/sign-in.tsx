import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/services'
import InputField from '@/components/forms/InputField'

const SignIn = () => {

    const [form, setForm] = useState({ email: '', password: '' })

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
                            Log In to{" "}
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

                    <View className='space-y-4 flex-col gap-6 my-12 w-full px-4'>
                        <InputField
                            title="Email"
                            value={form.email}
                            handleChangeText={(e: any) => setForm({ ...form, email: e })}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <InputField
                            title="Password"
                            value={form.password}
                            handleChangeText={(e: any) => setForm({ ...form, password: e })}
                            autoCapitalize="none"
                        />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn