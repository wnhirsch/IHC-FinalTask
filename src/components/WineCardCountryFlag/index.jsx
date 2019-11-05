// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import SvgUri from 'react-native-svg-uri';
import Colors from '../../resources/colors';
import * as Flags from '../../assets/svgs/flags';

const {
  width: SCREEN_WIDTH,
} = Dimensions.get('window');

const {
  TEXT_COLOR_SECONDARY,
} = Colors;

const WineCardCountryFlag = ({ country, region }) => {
  const flag = Flags[`item${country}`];
  return (
    <Container>
      <SvgUri
        svgXmlData={flag}
        preserveAspectRatio="none"
      />
      <Text>
        {region}
      </Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  width: ${SCREEN_WIDTH < 350 ? 80 : 192};
  justify-content: flex-start;
  margin-left: ${SCREEN_WIDTH < 350 ? 10 : 16};
  align-items: center;
`;

const Text = styled.Text`
  margin-left: 4px;
  font-size: 12px;
  color: ${TEXT_COLOR_SECONDARY};
`;

export default WineCardCountryFlag;

WineCardCountryFlag.propTypes = {
  country: PropTypes.number,
  region: PropTypes.string,
};

WineCardCountryFlag.defaultProps = {
  country: 0,
  region: '',
};
