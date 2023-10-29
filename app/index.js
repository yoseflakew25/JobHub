import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'
import { icons, COLORS,  SIZES,images } from '../constants'

import {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
} from "../components";


const Home = () => {
    const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
          <Stack.Screen
              options={{
                  headerStyle: { backgroundColor: COLORS.lightWhite },
                  headerShadowVisible: false,
                  headerLeft: () => (
                      <ScreenHeaderBtn iconUrl={ icons.menu} dimension="60%" />
                  ),
                  headerRight: () => (
                      <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                  ),
                  headerTitle: ""
              }} />
          <ScrollView showsVerticalScrollIndicator={false}>
              <View
                  style={{
                      flex: 1,
                      padding: SIZES.medium
                  }}
              >
                  <Welcome />
                  <Popularjobs />
                  <Nearbyjobs />
              </View>
          </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({})