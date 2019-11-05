import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

import Button from './index';

storiesOf('Button', module).add('default view', () => (
  <Container>
    <Button text="SUPER" type="primary" size="super" />
    <Button text="SUPER" type="secondary" size="super" />
    <Button text="SUPER" type="tertiary" size="super" />
    <Button text="SUPER" type="primary" disabled size="super" />
    <Button text="SUPER" type="secondary" disabled size="super" />
    <Button text="SUPER" type="tertiary" disabled size="super" />
    <Button text="BIG" type="primary" size="big" />
    <Button text="BIG" type="secondary" size="big" />
    <Button text="BIG" type="tertiary" size="big" />
    <Button text="BIG" type="primary" disabled size="big" />
    <Button text="BIG" type="secondary" disabled size="big" />
    <Button text="BIG" type="tertiary" disabled size="big" />
    <Button text="MEDIUM" type="primary" size="medium" />
    <Button text="MEDIUM" type="secondary" size="medium" />
    <Button text="MEDIUM" type="tertiary" size="medium" />
    <Button text="MEDIUM" type="primary" disabled size="medium" />
    <Button text="MEDIUM" type="secondary" disabled size="medium" />
    <Button text="MEDIUM" type="tertiary" disabled size="medium" />
    <Button text="MINI " type="primary" size="mini" />
    <Button text="MINI" type="secondary" size="mini" />
    <Button text="MINI" type="tertiary" size="mini" />
    <Button text="MINI" type="primary" disabled size="mini" />
    <Button text="MINI" type="secondary" disabled size="mini" />
    <Button text="MINI" type="tertiary" disabled size="mini" />
    <Button text="MICRO" type="primary" size="micro" />
    <Button text="MICRO" type="secondary" size="micro" />
    <Button text="MICRO" type="tertiary" size="micro" />
    <Button text="MICRO" type="primary" disabled size="micro" />
    <Button text="MICRO" type="secondary" disabled size="micro" />
    <Button text="MICRO" type="tertiary" disabled size="micro" />
  </Container>
));

const Container = styled.ScrollView`
  flex: 1;
  align-self: center;
`;
