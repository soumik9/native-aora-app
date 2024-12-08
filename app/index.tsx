import CustomButton from '@/components/button/CustomButton';
import { images } from '@/services';
import { signInRoute } from '@/services/constant';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView
                contentContainerClassName="h-full"
            >
                <View className='w-full justify-center items-center min-h-[85vh] px-4'>

                    <Image
                        source={images.logo}
                        className='w-[130px] h-[84px]'
                        resizeMode='contain'
                    />

                    <Image
                        source={images.cards}
                        className='max-w-[380px] h-[300px] w-full'
                        resizeMode='contain'
                    />

                    <View className='relative mt-5'>
                        <Text className='text-3xl text-white font-bold text-center max-w-[290px]'>
                            Discover Endless Possibilities with{" "}
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

                    <Text className='text-sm font-pregular mt-7 text-gray-100 text-center'>
                        Where creativity meets innovation: embark on a journey of endless possibilities with Aora.
                    </Text>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push(signInRoute)}
                        containerStyles="mt-7 w-full"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}