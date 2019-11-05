import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import SvgUri from 'react-native-svg-uri';
import Colors from '../../resources/colors';
import defUsr from '../../assets/svgs/user';

const {
  MAIN_COLOR,
  MAIN_COLOR_CONTRAST_LIGHTER,
} = Colors;

const IMAGE_SIZE_CORRECTION = 2;

const BIG_ICON_SIZE = 80;
const MEDIUM_ICON_SIZE = 64;
const SMALL_ICON_SIZE = 40;

const renderUserAvatar = (img, size) => {
  const side = getSize(size) - IMAGE_SIZE_CORRECTION;
  if (img) {
    return (
      <Image
        source={{ uri: img }}
        style={styles[`${size}`]}
      />
    );
  }
  return (
    <SvgUri
      width={side}
      height={side}
      svgXmlData={defUsr}
      preserveAspectRatio="none"
    />
  );
};

const UserAvatar = ({
  img, size, style,
}) => (
  <Container
    style={style}
    size={size}
  >
    {renderUserAvatar(img, size)}
  </Container>
);

const getSize = (size) => {
  switch (size) {
    case 'big': return BIG_ICON_SIZE;
    case 'medium': return MEDIUM_ICON_SIZE;
    default: return SMALL_ICON_SIZE;
  }
};

const Container = styled.View`
  position: absolute;
  border-radius: 100;
  border-width: 2px;
  border-color: ${(props) => (props.style === 'wish' ? MAIN_COLOR : MAIN_COLOR_CONTRAST_LIGHTER)};
  width: ${(props) => getSize(props.size)}px;
  height: ${(props) => getSize(props.size)}px;
  justify-content: center;
  align-content: center;
  overflow: hidden;
`;

const styles = StyleSheet.create({
  big: {
    borderRadius: BIG_ICON_SIZE,
    width: BIG_ICON_SIZE - IMAGE_SIZE_CORRECTION,
    height: BIG_ICON_SIZE - IMAGE_SIZE_CORRECTION,
    resizeMode: 'contain',
  },
  small: {
    borderRadius: SMALL_ICON_SIZE,
    width: SMALL_ICON_SIZE - IMAGE_SIZE_CORRECTION,
    height: SMALL_ICON_SIZE - IMAGE_SIZE_CORRECTION,
    resizeMode: 'contain',
  },
  medium: {
    borderRadius: MEDIUM_ICON_SIZE,
    width: MEDIUM_ICON_SIZE - IMAGE_SIZE_CORRECTION,
    height: MEDIUM_ICON_SIZE - IMAGE_SIZE_CORRECTION,
    resizeMode: 'contain',
  },
});

export default UserAvatar;

UserAvatar.propTypes = {
  size: PropTypes.string,
  img: PropTypes.string,
  style: PropTypes.string,
};

UserAvatar.defaultProps = {
  size: 'small',
  img: '',
  style: 'wish',
};
