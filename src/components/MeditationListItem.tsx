import { Text, View, FlatList } from 'react-native';
import { meditations } from '../data';
import React from 'react';
import { Meditation } from '../types';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export function MeditationListItem({ meditation }: { meditation: Meditation }) {
    return (
        <View className='flex-row items-center gap-5'>
            <View className='bg-green-700 p-2 rounded-full'>
                <FontAwesome name="check" size={16} color="white" />
            </View>
            <View className='flex-1 p-4 border-2 border-gray-400 rounded-2xl'>
                <Text className='font-semibold text-2xl mb-2'>{meditation.title}</Text>
                <View className='flex-row items-center gap-1'>
                    <FontAwesome name="clock-o" size={16} color="gray" />
                    <Text className='text-gray-500'>{meditation.duration} min</Text>
                </View>

            </View>
        </View>

    )
}