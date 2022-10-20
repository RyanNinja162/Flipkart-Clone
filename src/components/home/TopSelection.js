import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import FastImage from 'react-native-fast-image';

const DATA = [1, 2, 3, 4];

const TopSelectionCard = () => {
  return (
    <TouchableOpacity onPress={() => console.log("Pressed")} style={styles.subMainContainer}>
      <FastImage
        style={styles.imageStyle}
        resizeMode={FastImage.resizeMode.cover}
        source={{ uri: "https://unsplash.it/400/400?image=1" }}
      />
      <Text style={styles.name}>Trimmer</Text>
      <Text style={styles.categoryName}>Populars</Text>
    </TouchableOpacity>
  )
}

const TopSelection = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Top Selection</Text>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={() => <View style={{ flex: 1 }}><TopSelectionCard /></View>}
        // ItemSeparatorComponent={() => <View style={{ margin: 4 }} />}
        keyExtractor={item => item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 4
  },
  mainContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#ADD8E6"
  },
  imageStyle: {
    width: "100%",
    height: 150
  },
  subMainContainer: {
    padding: 4,
    margin: 4,
    backgroundColor: "#fff"
  },
  name: {
    fontSize: 12,
    marginTop: 4
  },
  categoryName: {
    color: "green",
    textTransform: "capitalize",
    marginTop: 2
  }
});


export default TopSelection;
