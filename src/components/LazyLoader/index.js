/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import SvgUri from 'react-native-svg-uri';
import imgUnknownLoader from '../../assets/svgs/imgUnknownLoader';

const LazyLoader = () => (

  <View style={{ flexDirection: 'row' }}>
    <View style={{ marginTop: 10 }}>
      <SvgUri
        svgXmlData={imgUnknownLoader}
        preserveAspectRatio="none"
      />
    </View>
    <ContentLoader
      primaryColor="#E6E6E6"
      secondaryColor="#D3D3D3"
      duration={500}
      height={190}
    >
      <Circle x="0" y="40" cx="20" cy="0" r="8" />
      <Rect x="35" y="35" rx="5" ry="5" width="61" height="9" />
      <Rect x="110" y="33" rx="5" ry="5" width="24" height="15" />
      <Rect x="140" y="35" rx="5" ry="5" width="130" height="9" />

      <Rect x="15" y="75" rx="5" ry="5" width="120" height="9" />
      <Rect x="15" y="95" rx="5" ry="5" width="226" height="16" />

      <Rect x="15" y="155" rx="3" ry="3" width="89" height="9" />
      <Rect x="15" y="170" rx="3" ry="3" width="107" height="9" />

      <Rect x="170" y="142" rx="20" ry="20" width="150" height="48" />

    </ContentLoader>
  </View>

);

export default LazyLoader;
