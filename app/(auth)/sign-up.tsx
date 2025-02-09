import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthLayout from '@/components/shared/authLayout/AuthLayout'
import InputField from '@/components/forms/InputField'
import CustomButton from '@/components/button/CustomButton'
import { Link } from 'expo-router'
import { signInRoute } from '@/services/constant'

const SignUp = () => {

    const [form, setForm] = useState({ email: '', password: '' });

    const handleLogin = () => {
        console.log(form)
    }

    return (
        <AuthLayout title="Sign Up to">
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

                <CustomButton
                    title="Register"
                    handlePress={handleLogin}
                    containerStyles="mt-7"
                />

                <View className='justify-center flex-row gap-2'>
                    <Text className="text-lg text-gray-100 font-pregular">
                        Already have an account?
                    </Text>
                    <Link href={signInRoute} className='text-lg font-psemibold text-secondary'>
                        Sign In
                    </Link>
                </View>
            </View>
        </AuthLayout>
    )
}

export default SignUp