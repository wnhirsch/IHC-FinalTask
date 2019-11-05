/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import {
  StyleSheet, View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DotIndicator } from 'react-native-indicators';
import WineCard from '../components/WineCard';
import { getWishedWines } from '../store/wishedWines/actions';
import LazyLoader from '../components/LazyLoader';
import Colors from '../resources/colors';

const { MAIN_COLOR_CONTRAST_LIGHTER } = Colors;

const WishedWines = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [finishList, setFinishList] = useState(false);

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

  const loadWines = async () => {
    let pag = page;
    const { getWishedWines } = props;
    if (isLoading || finishList) return;
    setIsLoading(true);
    setTimeout(() => {
      getWishedWines(page).then((res) => {
        if (!res) {
          setFinishList(true);
          setIsLoading(false);
        } else {
          setData([...data, ...res]);
          pag += 1;
          setPage(pag);
          setIsLoading(false);
        }
      }).catch(() => {
        setIsLoading(false);
      });
    }, 2000);
  };

  useEffect(() => {
    if (!isLoaded) {
      loadWines();
      setIsLoaded(true);
    }
  }, [isLoaded]);

  const renderItem = ({ item }) => (
    <WineCard
      name={item.wine.name}
      winery={item.wine.winery}
      imgUrl={item.wine.imgUrl}
      type={item.wine.type}
      country={item.wine.country}
      region={item.wine.region}
      user={item.user.name}
      cardType={1}
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
        keyExtractor={(item) => item.wishedId}
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
  const { wines, loading, error } = state.wishedWines;

  return {
    wines,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWishedWines: (page) => dispatch(getWishedWines(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WishedWines);
