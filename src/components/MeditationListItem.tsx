import { Text,View,FlatList} from 'react-native';
import {meditations} from '../data';  
import React from 'react';
import { Meditation } from '../types';

export function MeditationListItem({meditation} : {meditation: Meditation}){ 
    return (
        <View className='p-5 border-2 border-gray-300 rounded-2xl'>
            <Text className='font-semibold text-2xl'>{meditation.title}</Text>
        </View>
    )
}