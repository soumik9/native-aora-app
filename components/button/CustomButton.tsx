import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
    title, handlePress, containerStyles, textStyles, isLoading
}: any) => {
    return (
        <TouchableOpacity
            // className={cx(
            //     "bg-secondary rounded-xl min-h-[62px] justify-center items-center", containerStyles, isLoading && 'opacity-50'
            // )}
            className={`
                bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading && 'opacity-50'}
            `}
            onPress={handlePress}
            disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;