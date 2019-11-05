import React from 'react';
import styled from 'styled-components/native';
import SvgUri from 'react-native-svg-uri';
import icRose from '../../assets/svgs/icRose';
import icDessert from '../../assets/svgs/icDessert';
import icRed from '../../assets/svgs/icRed';
import icWhite from '../../assets/svgs/icWhite';
import icSparkling from '../../assets/svgs/icSparkling';
import icPort from '../../assets/svgs/icPort';

const WineCardType = (props) => {
  const { type } = props;
  let img = icPort;
  let wine = 'Porto';
  switch (type) {
    case 0:
      wine = 'Tinto';
      img = icRed;
      break;
    case 1:
      wine = 'Rosé';
      img = icRose;
      break;
    case 2:
      wine = 'Sobremesa';
      img = icDessert;
      break;
    case 3:
      wine = 'Branco';
      img = icWhite;
      break;
    case 4:
      wine = 'Frisante';
      img = icSparkling;
      break;
  }

  return (
    <Container>
      <SvgUri
        svgXmlData={img}
        preserveAspectRatio="none"
      />
      <Text>{wine}</Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95;
`;

const Text = styled.Text`
  font-family: Heebo-Regular;
  font-size: 12px;
  color: #66635E;
  margin-left: 8;
`;

export default WineCardType;
