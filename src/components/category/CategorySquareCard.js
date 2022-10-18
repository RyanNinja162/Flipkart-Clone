import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image';
import { ThemeContext } from '../../theme';

const CategorySquareCard = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.mainContainer}>
      <Text>category card</Text>
      <View style={styles.imageContainer(theme)}>
        <FastImage
          style={styles.imageStyle(theme)}
          resizeMode={FastImage.resizeMode.cover}
          source={{ uri: "https://unsplash.it/400/400?image=1" }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: theme => ({
    width: "100%",
    height: 150,
  }),
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  imageStyle: theme => ({
    width: "100%",
    height: "100%"
    // height: 60,
    // width: 60,
    // top: 0,
    // borderRadius: 30
  }),
  slide: {
    alignItems: 'center',
  },
  slideTitle: theme => ({
    marginTop: theme.dimens.WINDOW_HEIGHT * 0.1,
    marginLeft: theme.dimens.WINDOW_WIDTH * 0.2,
    marginRight: theme.dimens.WINDOW_WIDTH * 0.2,
    position: 'absolute',
    fontSize: 24,
    color: theme.colors.white,
    textAlign: 'center',
  }),
});

export default CategorySquareCard;
