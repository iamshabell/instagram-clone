import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <TouchableOpacity>
            <View key={index} style={{ alignItems: "center" }}>
              <Image source={{ uri: story.image }} style={styles.story} />

              <Text style={{ color: "white" }}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "... "
                  : story.user.toLowerCase()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>+</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8521",
  },
  unreadBadge: {
    backgroundColor: "#1795F6",
    position: "absolute",
    left: 50,
    bottom: 18,
    width: 25,
    height: 25,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
