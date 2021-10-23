import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/24/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/24/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/24/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/24/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/ios-glyphs/30/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/30/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://instagram.fhga2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/244627579_325342306031163_9130065970335819094_n.jpg?_nc_ht=instagram.fhga2-1.fna.fbcdn.net&_nc_ohc=9wWKpO8kClwAX-LLR5l&edm=ABfd0MgBAAAA&ccb=7-4&oh=44d79285a181502aef7d3cff74bcea8a&oe=616E245F&_nc_sid=7bff83",
    inactive:
      "https://instagram.fhga2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/244627579_325342306031163_9130065970335819094_n.jpg?_nc_ht=instagram.fhga2-1.fna.fbcdn.net&_nc_ohc=9wWKpO8kClwAX-LLR5l&edm=ABfd0MgBAAAA&ccb=7-4&oh=44d79285a181502aef7d3cff74bcea8a&oe=616E245F&_nc_sid=7bff83",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "5%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
