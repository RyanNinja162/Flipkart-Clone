import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image';
import { ThemeContext } from '../../theme';

const CategoryCard = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.mainContainer}>
      {/* <Image source={{ uri: "https://unsplash.it/400/400?image=1" }} /> */}
      <FastImage
        style={styles.imageStyle(theme)}
        // resizeMode="cover"
        resizeMode={FastImage.resizeMode.cover}
        // source={{ uri: magento.getMediaUrl() + slide.image }}
        source={{ uri: "https://unsplash.it/400/400?image=1" }}
      />
      <Text>category card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: theme => ({
    height: theme.dimens.WINDOW_HEIGHT * 0.3,
  }),
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: theme => ({
    height: 60,
    width: 60,
    // top: 0,
    borderRadius: 30
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

export default CategoryCard;
