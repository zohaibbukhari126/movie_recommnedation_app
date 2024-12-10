import { View, Text, Platform, TouchableOpacity,ScrollView   } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {styles} from "../theme/index";
import TrendingMovies from "../components/TrendingMovies";
import { useState } from "react";

const ios = Platform.OS === "ios";

export default function HomeScreen() {
  const [trending, setTrending] = useState([]);
  return (
    <View style={tw`flex-1 bg-neutral-800`}>
      <SafeAreaView style={tw`mb-2`}>
      <StatusBar style="light" />
        <View style={tw`flex-row justify-between items-center mx-4`}>
               <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                <Text style={tw`text-white text-3xl font-bold`}>
                  <Text style={styles.text}>M</Text>ovie
                </Text>
                <TouchableOpacity>
                  <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" /> 
                </TouchableOpacity>
        </View>
      </SafeAreaView>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
        >
          <TrendingMovies data={trending} />  
        </ScrollView>

      
    </View>
  );
}
