import { Text, View } from 'react-native'
import React, { useState } from 'react'
import InputField from '@/components/forms/InputField'
import CustomButton from '@/components/button/CustomButton'
import AuthLayout from '@/components/shared/authLayout/AuthLayout'
import { Link } from 'expo-router'
import { signUpRoute } from '@/services/constant'

const SignIn = () => {

    const [form, setForm] = useState({ email: '', password: '' });

    const handleLogin = () => {
        console.log(form)
    }

    return (
        <AuthLayout>
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
                    title="Sign In"
                    handlePress={handleLogin}
                    containerStyles="mt-7"
                />

                <View className='justify-center flex-row gap-2'>
                    <Text className="text-lg text-gray-100 font-pregular">
                        Don't have an account?
                    </Text>
                    <Link href={signUpRoute} className='text-lg font-psemibold text-secondary'>
                        Sign Up
                    </Link>
                </View>
            </View>
        </AuthLayout>
    )
}

export default SignIn