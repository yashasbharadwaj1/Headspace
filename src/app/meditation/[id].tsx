import { Link, router, useLocalSearchParams } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import { meditations } from '@/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MeditationDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const meditation = meditations.find((m) => m.id === Number(id));

    if (!meditation) {
        return <Text>Meditation not found!</Text>;
    }

    return (
        <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
            {/* Page content */}
            <View className="flex-1">
                {/* Top part of the screen */}
                <View className="flex-1">
                    {/* Header */}
                    <View className="flex-row items-center justify-between p-10">
                        <AntDesign name="infocirlceo" size={24} color="black" />
                        <View className="bg-zinc-800 p-2 rounded-md">
                            <Text className="text-zinc-100 font-semibold">
                                Today's meditation
                            </Text>
                        </View>
                        <AntDesign
                            onPress={() => router.back()}
                            name="close"
                            size={26}
                            color="black"
                        />
                    </View>
                    <Text className="text-3xl mt-20 text-center text-zinc-800 font-semibold">
                        {meditation?.title}
                    </Text>
                </View>
                {/* Play/Pause Button */}
                <Pressable className="bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center">
                    <FontAwesome6 name="play" size={24} color="snow" />
                </Pressable>
                {/* Bottom part of the screen */}
                <View className="flex-1">
                    {/* Footer: Player */}
                    <View className="p-5 mt-auto gap-5">
                        <View className="flex-row justify-between">
                            <MaterialIcons name="airplay" size={24} color="#3A3937" />
                            <MaterialCommunityIcons
                                name="cog-outline"
                                size={24}
                                color="#3A3937"
                            />
                        </View>
                        {/* Playback indicator */}
                        <Slider
                            style={{ width: '100%', height: 3 }}
                            value={0.5}
                            onSlidingComplete={(value) => console.log(value)}
                            minimumValue={0}
                            maximumValue={1}
                            maximumTrackTintColor="#3A393755"
                            minimumTrackTintColor="#3A3937"
                            thumbTintColor="#3A3937"
                        />
                        {/* Times */}
                        <View className="flex-row justify-between">
                            <Text>03:24</Text>
                            <Text>13:14</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}