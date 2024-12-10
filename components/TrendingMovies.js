import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";

export default function TrendingMovies() {
  return (
    <View style={tw`mb-8`}>
      <Text style={tw`text-white text-xl mx-4 mb-5`}>TrendingMovies</Text>
    </View>
  )
}