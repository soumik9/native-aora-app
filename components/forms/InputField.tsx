import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/services'

const InputField = ({ title, value, placeholder, handleChangeText, containerStyles, ...props }: any) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`flex-col gap-2 ${containerStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>
                {title}
            </Text>

            <View
                className="w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row"
            >
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    value={value}
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    {...props}
                />

                {title === 'Password' && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className='w-8 h-8'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default InputField;