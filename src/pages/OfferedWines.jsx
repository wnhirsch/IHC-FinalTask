/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { DotIndicator } from 'react-native-indicators';
import WineCard from '../components/WineCard';
import { getOfferedWines } from '../store/offeredWines/actions';
import LazyLoader from '../components/LazyLoader';
import Colors from '../resources/colors';

const { MAIN_COLOR_CONTRAST_LIGHTER } = Colors;

const OfferedWines = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [finishList, setFinishList] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      loadWines();
      setIsLoaded(true);
    }
  }, [isLoaded]);

  function currencyFormat(num) {
    const res = num.toFixed(2).split('.');
    res[0] = res[0].split(/(?=(?:...)*$)/).join('.');
    return res.join(',');
  }

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      data.length
        ? (
          <LoadContainer>
            <DotIndicator color={MAIN_COLOR_CONTRAST_LIGHTER} size={8} />
            <LoadText>estamos buscando mais vinhos para você</LoadText>
          </LoadContainer>
        )
        : (
          <View>
            <LinearGradient colors={['rgba(245, 245, 245, 0)', '#F0F0F0']} style={styles.containerStyle}>
              <LazyLoader />
            </LinearGradient>
            <LinearGradient colors={['rgba(245, 245, 245, 0)', '#F0F0F0']} style={styles.containerStyle}>
              <LazyLoader />
            </LinearGradient>
            <LinearGradient colors={['rgba(245, 245, 245, 0)', '#F0F0F0']} style={styles.containerStyle}>
              <LazyLoader />
            </LinearGradient>
          </View>
        )
    );
  };

  loadWines = async () => {
    const { getOfferedWines } = props;
    if (isLoading || finishList) return;
    setIsLoading(true);
    setTimeout(() => {
      getOfferedWines(page).then((res) => {
        if (!res) {
          setFinishList(true);
          setIsLoading(false);
        } else {
          setData([...data, ...res]);
          setPage(page + 1);
          setIsLoading(false);
        }
      }).catch(() => {
        setIsLoading(false);
      });
    }, 2000);
  };

  renderItem = ({ item }) => (
    <WineCard
      name={item.wine.name}
      winery={item.wine.winery}
      imgUrl={item.wine.imgUrl}
      type={item.wine.type}
      country={item.wine.country}
      region={item.wine.region}
      user={item.user.name}
      price={currencyFormat(item.wine.price)}
      cardType={2}
    />
  );

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReached={loadWines}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.offerId}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginTop: 15,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

const Container = styled.View`
  flex: 1;
  width: 95%;
  align-self: flex-end;
`;

const LoadContainer = styled.View`
  padding-top: 40;
  padding-bottom: 40;
`;


const LoadText = styled.Text`
  font-family: Heebo-Regular;
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: #B3ADA5;
  margin-top: 16;
`;

const FlatList = styled.FlatList``;

const mapStateToProps = (state) => {
  const { wines, loading, error } = state.offeredWines;
  return {
    wines,
    loading,
    error,
  };
};


const mapDispatchToProps = (dispatch) => ({
  getOfferedWines: (page) => dispatch(getOfferedWines(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferedWines);
