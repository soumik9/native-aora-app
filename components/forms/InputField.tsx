import { View, Text, TextInput } from 'react-native'
import React from 'react'
const InputField = ({ title, value, placeholder, handleChangeText, containerStyles, ...props }: any) => {
    return (
        <View className={`flex-col gap-2 ${containerStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>
                {title}
            </Text>

            <View
                className="w-full h-16 px-4 border-2 border-red-500 bg-black-100 rounded-2xl focus:border-secondary items-center"
            >
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    value={value}
                    onChangeText={handleChangeText}
                    {...props}
                />
            </View>
        </View>
    )
}

export default InputField;