import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  getSearchProducts,
  addFilterData,
  resetFilters,
  setCurrentProduct,
} from '../../actions';
import { ProductList, HeaderGridToggleIcon } from '../common';
import NavigationService from '../../navigation/NavigationService';
import { NAVIGATION_SEARCH_PRODUCT_PATH } from '../../navigation/routes';
import { ThemeContext } from '../../theme';
import { translate } from '../../i18n';

class NotificationScreen extends Component {
  static contextType = ThemeContext;

  static navigationOptions = ({ navigation }) => ({
    title: translate('search.title'),
    headerBackTitle: ' ',
    headerRight: () => <HeaderGridToggleIcon />,
  });

  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.getSearchProducts = _.debounce(this.props.getSearchProducts, 1000);
  }

  // onRowPress = product => {
  //   this.props.setCurrentProduct({ product });
  //   NavigationService.navigate(NAVIGATION_SEARCH_PRODUCT_PATH, {
  //     product,
  //     title: product.name,
  //   });
  // };

  // onEndReached = () => {
  //   const { canLoadMoreContent, loadingMore, products } = this.props;
  //   const { sortOrder, priceFilter } = this.props;

  //   if (!loadingMore && canLoadMoreContent) {
  //     this.props.getSearchProducts(
  //       this.state.input,
  //       products.length,
  //       sortOrder,
  //       priceFilter,
  //     );
  //   }
  // };

  // updateSearch = input => {
  //   this.setState({ input }, () => {
  //     this.props.resetFilters();
  //     this.getSearchProducts(
  //       input,
  //       null,
  //       this.props.sortOrder,
  //       this.props.priceFilter,
  //     );
  //   });
  // };

  // performSort = sortOrder => {
  //   this.props.addFilterData(sortOrder);
  //   this.props.getSearchProducts(
  //     this.state.input,
  //     null,
  //     sortOrder,
  //     this.props.priceFilter,
  //   );
  // };

  // renderContent = () => (
  //   <ProductList
  //     products={this.props.products}
  //     navigation={this.props.navigation}
  //     onEndReached={this.onEndReached}
  //     canLoadMoreContent={this.props.canLoadMoreContent}
  //     searchIndicator
  //     onRowPress={this.onRowPress}
  //     gridColumnsValue={this.props.listTypeGrid}
  //     performSort={this.performSort}
  //     currencySymbol={this.props.currencySymbol}
  //     currencyRate={this.props.currencyRate}
  //   />
  // );

  renderEmptyNotification = () => {
    const theme = this.context;
    const { navigate } = this.props.navigation;
    const { containerStyle, totals, buttonTextStyle, shopNow } = styles;

    return (
      <View style={containerStyle(theme)}>
        <Text type="heading" style={styles.emptyHeading}>
          {translate('notification.emptyMessage')}
        </Text>
        <Text type="heading" style={styles.emptySubHeading}>
          {translate('notification.emptySubMessage')}
        </Text>
        <TouchableOpacity onPress={() => navigate(NAVIGATION_HOME_SCREEN_PATH)} style={shopNow(theme)}>
          <Text type="heading" bold style={buttonTextStyle(theme)}>
            {translate('common.shopNow')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderNotifications = () => {
    const theme = this.context;
    const { navigate } = this.props.navigation;
    const { containerStyle, totals, buttonTextStyle, shopNow } = styles;

    return (
      <View style={containerStyle(theme)}>
        <Text>Notifications</Text>
      </View>
    );
  };


  render() {
    if (false) {
      return this.renderNotifications();
    }
    return this.renderEmptyNotification();
  }

}


const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background,
  }),
  emptyHeading: {
    fontSize: 16,
    marginBottom: 10
  },
  emptySubHeading: {
    fontSize: 12,
    color: "grey",
    marginHorizontal: "15%",
    textAlign: "center",
    marginBottom: 10
  },
  containerStyle: theme => ({
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  content: {
    flex: 1,
  },
  totals: theme => ({
    paddingTop: theme.spacing.small,
  }),
  shopNow: theme => ({
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.dimens.borderRadius
  }),
  totalPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextStyle: theme => ({
    padding: theme.spacing.small,
    top: 0,
    color: theme.colors.primary,
  }),
  footer: theme => ({
    padding: theme.spacing.large,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }),
  buttonStyle: theme => ({
    width: theme.dimens.WINDOW_WIDTH * 0.5,
  }),
});

const mapStateToProps = ({ search, filters, magento, ui }) => {
  const { sortOrder, priceFilter } = filters;
  const { products, totalCount, loadingMore } = search;
  const {
    currency: {
      displayCurrencySymbol: currencySymbol,
      displayCurrencyExchangeRate: currencyRate,
    },
  } = magento;
  const canLoadMoreContent = products.length < totalCount;
  const { listTypeGrid } = ui;

  return {
    products,
    sortOrder,
    totalCount,
    loadingMore,
    priceFilter,
    currencyRate,
    listTypeGrid,
    currencySymbol,
    canLoadMoreContent,
  };
};

export default connect(mapStateToProps, {
  getSearchProducts,
  setCurrentProduct,
  resetFilters,
  addFilterData,
})(NotificationScreen);
