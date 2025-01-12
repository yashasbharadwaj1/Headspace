import { Link, router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text,View,FlatList} from 'react-native'; 
import {meditations} from '@/data';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function MeditationDetails(){ 
    const {id} = useLocalSearchParams<{id:string}>(); 

    const {top} = useSafeAreaInsets();

    const meditation = meditations.find((m) =>m.id === Number(id)); 
    if(!meditation){
        return <Text>Meditation Not found</Text>
    }
    return (
        <SafeAreaView > 
        <Text className="text-2xl">{meditation?.title}</Text> 
        <FontAwesome 
        onPress={() => router.back()}
        className="absolute right-4" name="close" 
        style={{top:top+16}}
        size={16} color="black" />
       
        </SafeAreaView>
    )
}