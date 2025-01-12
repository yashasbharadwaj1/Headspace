import { Text,View,FlatList} from 'react-native';
import {meditations} from '@/data';  
import React from 'react';
import { Meditation } from '@/types';
import {MeditationListItem} from '@/components/MeditationListItem';

export default function HomeScreen(){
    return (
        <>
        <FlatList
        data = {meditations} 
        className='bg-white'
        contentContainerStyle={{gap: 20}} 
        contentContainerClassName='gap-5 p-3'
        renderItem={({item}) => <MeditationListItem meditation={item}/>}
        />
        </>
        
    )
}