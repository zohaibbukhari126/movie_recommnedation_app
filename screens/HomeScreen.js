import { View, Text, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import {Bars3CenterLeftIcon} from "react-native-heroicons/outline";

const ios = Platform.OS === "ios";

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-neutral-800`}>
      <SafeAreaView style={tw`mb-2`}>
      <StatusBar style="light" />
        <View style={tw`flex-row justify-between items-center mx-4`}>
                <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
        </View>
      </SafeAreaView>
      
    </View>
  );
}
