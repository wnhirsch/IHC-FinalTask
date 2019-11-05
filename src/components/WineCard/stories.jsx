import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import WineCardItem from './index';

storiesOf('WineCardItem', module).add('default view', () => (
  <Container>
    <WineCardItem
      name="La Chapelle Castillon - Côtes de Bordeaux 2015"
      winery="Château le Peyrat"
      imgUrl=""
      type="Tinto"
      location="ARG ‧ Paraje Altamira"
      user="Ermelinda Melo"
      price="456.389,25"
    />
  </Container>
));

const Container = styled.ScrollView`
  flex: 1;
  width: 95%;
  align-self: flex-end;
`;
