import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, StyleSheet, RefreshControl, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { MaterialHeaderButtons, Text, Item } from '../common';
import { NAVIGATION_HOME_PRODUCT_PATH } from '../../navigation/routes';
import { getHomeData, setCurrentProduct } from '../../actions';
import NavigationService from '../../navigation/NavigationService';
import { ThemeContext } from '../../theme';
import { translate } from '../../i18n';
import CategoryCard from './CategoryCard';
import CategorySquareCard from './CategorySquareCard';

const DATA = [1, 2, 3, 4, 5, 6]

class CategoryScreen extends Component {
  static contextType = ThemeContext;

  // static navigationOptions = ({ navigation }) => ({
  //   title: translate('home.title'),
  //   headerBackTitle: ' ',
  //   headerLeft: () => (
  //     <MaterialHeaderButtons>
  //       <Item
  //         title="menu"
  //         iconName="menu"
  //         onPress={navigation.getParam('toggleDrawer')}
  //       />
  //     </MaterialHeaderButtons>
  //   ),
  //   headerRight: () => <CurrencyPicker />,
  // });

  // componentDidMount() {
  //   const { navigation } = this.props;
  //   if (this.props.slider.length === 0) {
  //     this.props.getHomeData();
  //   }
  //   navigation.setParams({ toggleDrawer: this.toggleDrawer });
  // }

  // toggleDrawer = () => {
  //   const { navigation } = this.props;
  //   navigation.toggleDrawer();
  // };

  // onProductPress = product => {
  //   this.props.setCurrentProduct({ product });
  //   NavigationService.navigate(NAVIGATION_HOME_PRODUCT_PATH, {
  //     product,
  //     title: product.name,
  //   });
  // };

  // onRefresh = () => {
  //   this.props.getHomeData(true);
  // };

  // renderFeatured() {
  //   return _.map(this.props.featuredProducts, (value, key) => (
  //     <FeaturedProducts
  //       key={`featured${key}`}
  //       products={value}
  //       title={this.props.featuredCategories[key].title}
  //       onPress={this.onProductPress}
  //       currencySymbol={this.props.currencySymbol}
  //       currencyRate={this.props.currencyRate}
  //     />
  //   ));
  // }

  render() {
    const theme = this.context;

    if (this.props.errorMessage) {
      return (
        <View style={styles.errorContainer}>
          <Text>{this.props.errorMessage}</Text>
        </View>
      );
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <FlatList
          data={DATA}
          numColumns={4}
          renderItem={() => <View style={{ margin: 3 }}><CategoryCard /></View>}
          keyExtractor={item => item.id}
        /> */}
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={() => <View style={{ flex: 1, margin: 5 }}><CategorySquareCard /></View>}
          // ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
          keyExtractor={item => item}
        />

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    flexDirection: "row"
  }),
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CategoryScreen.propTypes = {
  slider: PropTypes.array,
  getHomeData: PropTypes.func,
  navigation: PropTypes.object,
  featuredProducts: PropTypes.object,
  featuredCategories: PropTypes.object,
  setCurrentProduct: PropTypes.func,
  currencySymbol: PropTypes.string.isRequired,
  currencyRate: PropTypes.number.isRequired,
  refreshing: PropTypes.bool,
};

CategoryScreen.defaultProps = {
  slider: [],
};

const mapStateToProps = state => {
  const { refreshing } = state.home;
  const {
    errorMessage,
    currency: {
      displayCurrencySymbol: currencySymbol,
      displayCurrencyExchangeRate: currencyRate,
    },
  } = state.magento;
  return {
    ...state.home,
    refreshing,
    errorMessage,
    currencySymbol,
    currencyRate,
  };
};

export default connect(mapStateToProps, { getHomeData, setCurrentProduct })(
  CategoryScreen,
);
