/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';

const {
  width: SCREEN_WIDTH,
} = Dimensions.get('window');

const WineCardButton = (props) => {
  const { price, cardType } = props;
  return (
    <ExtraContainer>
      { cardType === 1
        ? (
          <Container style={styles.wishedContainer}>
            <Text>+ detalhes</Text>
          </Container>
        )
        : (
          <Container style={styles.offeredContainer}>
            <CoinText>R$</CoinText>
            <Text style={styles.offeredText}>{price}</Text>
          </Container>
        )}
    </ExtraContainer>
  );
};

const styles = StyleSheet.create({
  wishedContainer: {
    backgroundColor: '#00B3B3',
    justifyContent: 'center',
  },
  offeredContainer: {
    backgroundColor: '#66043C',
    justifyContent: 'space-between',
  },
  offeredText: {
    fontSize: SCREEN_WIDTH < 350 ? 14 : 24,
    marginRight: 8,
  },
});

const Container = styled.View`
  width: ${SCREEN_WIDTH < 350 ? 105 : (SCREEN_WIDTH < 400 ? 140 : 160)};
  height: 48;
  align-items: center;
  flex-direction: row;
  position: absolute;
  right: 0;
  bottom: -10;
  z-index: 2;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const CoinText = styled.Text`
  font-family: Heebo-Regular;
  font-size: ${SCREEN_WIDTH < 350 ? 10 : 12};
  margin-left: 8;
  text-align: left;
  color: #F5F5F5;
`;

const Text = styled.Text`
  font-family: Heebo;
  font-weight: 500;
  font-size: ${SCREEN_WIDTH < 350 ? 14 : 16};
  text-transform: uppercase;
  color: #F5F5F5;
`;

const ExtraContainer = styled.View`
  background-color: #00B3B3;
  position: relative;
`;

export default WineCardButton;
