import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import Colors from '../../resources/colors';

const {
  MAIN_COLOR_BACKGROUND,
  MAIN_COLOR_CONTRAST,
  MAIN_COLOR_CONTRAST_LIGHTER,
  MAIN_COLOR_DISABLED,
} = Colors;

const WIDTH_SUPER = '312';
const WIDTH_BIG = '204';
const WIDTH_MEDIUM = '148';
const WIDTH_MINI = '96';
const WIDTH_MICRO = '48';

const Button = ({
  type, text, disabled, size, onPress,
}) => (
  <ButtonContainer
    size={size}
  >
    <Ripple
      rippleContainerBorderRadius={20}
      rippleColor={MAIN_COLOR_CONTRAST_LIGHTER}
      disabled={disabled}
      rippleDuration={500}
    >
      <ButtonTouchableArea
        type={type}
        onPress={onPress}
        disabled={disabled}
        size={size}
      >
        <ButtonChildren
          type={type}
          disabled={disabled}
        >
          {text}
        </ButtonChildren>
      </ButtonTouchableArea>
    </Ripple>
  </ButtonContainer>
);

const getBackgroundColor = (type, disabled) => {
  if (type === 'primary') {
    if (disabled) {
      return MAIN_COLOR_DISABLED;
    }
    return MAIN_COLOR_CONTRAST;
  }
  return MAIN_COLOR_BACKGROUND;
};

const getTextColor = (type, disabled) => {
  if (type === 'primary') {
    return MAIN_COLOR_BACKGROUND;
  }
  if (disabled) {
    return MAIN_COLOR_DISABLED;
  }
  return MAIN_COLOR_CONTRAST;
};

const getBorderColor = (type, disabled) => {
  if (disabled) {
    return MAIN_COLOR_DISABLED;
  }
  return MAIN_COLOR_CONTRAST;
};

const getSize = (size) => {
  switch (size) {
    case 'super': return WIDTH_SUPER;
    case 'big': return WIDTH_BIG;
    case 'mini': return WIDTH_MINI;
    case 'micro': return WIDTH_MICRO;
    default: return WIDTH_MEDIUM;
  }
};

const ButtonTouchableArea = styled.TouchableHighlight`
  width: ${(props) => getSize(props.size)}px;
  height: 48px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => getBackgroundColor(props.type, props.disabled)};
  justify-content: center;
  border-width: ${(props) => (props.type === 'secondary' ? 2 : 0)};
  border-style: solid;
  border-color: ${(props) => (props.type === 'secondary' ? getBorderColor(props.type, props.disabled) : 'transparent')};
`;

const ButtonChildren = styled.Text`
  font-size: 16px;
  color: ${(props) => getTextColor(props.type, props.disabled)};
  text-align: center;
`;

const ButtonContainer = styled.View`
  width: ${(props) => getSize(props.size)}px;
  height: 48px;
`;

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  text: '',
  disabled: false,
  size: 'medium',
  onPress: () => {},
};
