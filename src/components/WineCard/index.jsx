import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import SvgUri from 'react-native-svg-uri';
import Snackbar from 'react-native-snackbar';
import imgUnknown from '../../assets/imgUnknown';
import WineCardType from '../WineCardType';
import UserAvatar from '../UserAvatar';
import WineCardButton from '../WineCardButton';
import WineCardCountryFlag from '../WineCardCountryFlag';

const {
  width: SCREEN_WIDTH,
} = Dimensions.get('window');

const WineCardItem = (props) => {
  const {
    imgUrl, winery, type, name, cardType, user, price, country, region,
  } = props;

  function showSnackbar() {
    Snackbar.show({
      title: 'Em desenvolvimento',
      duration: 1000,
    });
  }

  return (
    <TouchableOpacity onPress={() => showSnackbar()}>
      <ImageContainer>
        {imgUrl
          ? (
            <Image
              source={{ uri: imgUrl }}
            />
          )
          : (
            <SvgUri
              svgXmlData={imgUnknown}
              preserveAspectRatio="none"
            />
          )}
        <UserContainer>
          <UserAvatar />
        </UserContainer>
      </ImageContainer>
      <LinearGradient colors={['rgba(245, 245, 245, 0)', '#E6E6E6']} style={style.containerStyle}>
        <View style={{ marginLeft: 100, width: SCREEN_WIDTH - 120 }}>
          <ContainerTypeAndCountry>
            <WineCardType type={type} />
            <WineCardCountryFlag country={country} region={region} />
          </ContainerTypeAndCountry>
          <WineTypeText>{winery}</WineTypeText>
          <WineNameText>{name}</WineNameText>
          <CardTypeContainer>
            <View style={{ width: 150, marginTop: 13 }}>
              <CardTypeText style={{ color: cardType === 1 ? '#66043C' : '#008080' }}>
                { cardType === 1 ? 'desejado por' : 'oferecido por' }
              </CardTypeText>
            </View>
            <SmallText>{user}</SmallText>
          </CardTypeContainer>
        </View>
      </LinearGradient>
      {
        cardType === 1
          ? <WineCardButton cardType={cardType} />
          : <WineCardButton cardType={cardType} price={price} />
      }
    </TouchableOpacity>
  );
};


const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

const TouchableOpacity = styled.TouchableOpacity`
  margin-bottom: 30;
  margin-top: 30;
  flex: 1;
  flex-direction: row;
`;

const ImageContainer = styled.View`
  flex-direction: row;
  width: 80;
  height: 190;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  z-index: 2;
  left: 20;
  bottom: 3;
`;

const UserContainer = styled.View`
  background-color: #00B3B3;
  position: relative;
  bottom: -55;
  left: -20;
`;

const Image = styled.Image`
  width: 50;
  height: 180;
`;

const WineNameText = styled.Text`
  font-family: Heebo-Regular;
  font-weight: 300;
  font-size: ${SCREEN_WIDTH < 350 ? 12 : 16};
  text-transform: uppercase;
  color: #1A1917;
`;

const WineTypeText = styled.Text`
  font-family: Heebo-Regular;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  color: #66635E;
  margin-top: 13;
`;

const ContainerTypeAndCountry = styled.View`
  flex-direction: row;
`;

const CardTypeContainer = styled.View`
  width: 40%;
`;

const CardTypeText = styled.Text`
  font-family: Heebo-Regular;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
`;

const SmallText = styled.Text`
  font-family: Heebo-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #66635E;
`;

export default WineCardItem;
