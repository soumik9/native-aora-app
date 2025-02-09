import { View } from 'react-native'
import React, { useState } from 'react'
import InputField from '@/components/forms/InputField'
import CustomButton from '@/components/button/CustomButton'
import AuthLayout from '@/components/shared/authLayout/AuthLayout'

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
            </View>
        </AuthLayout>
    )
}

export default SignIn