import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import BottomTabs, { bottomTabIcons } from "../component/home/BottomTabs";
import Header from "../component/home/Header";
import Post from "../component/home/Post";
import Stories from "../component/home/Stories";
import { POSTS } from "../data/post";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.continer, styles.AndroidSafeArea]}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />

        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  continer: {
    backgroundColor: "black",
    flex: 1,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
