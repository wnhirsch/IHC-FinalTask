import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Platform, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import WishedWines from './WishedWines';
import OfferedWines from './OfferedWines';

const Home = () => {
  let [index, setIndex] = useState(0);
  const routes = [{ key: 'first', title: 'Desejados' }, { key: 'second', title: 'Oferecidos' }];
  function renderTabBar({
    jumpTo, layout, navigationState, position,
  }) {
    return (
      <Container>
        <TabBar
          jumpTo={jumpTo}
          layout={layout}
          navigationState={navigationState}
          position={position}
          style={{ backgroundColor: 'white' }}
          indicatorStyle={{ backgroundColor: '#00B3B3', height: 3 }}
          renderLabel={({ route }) => {
            const focused = index === navigationState.index;
            index += 1;
            if (index === 2) index = 0;
            return (
              <View>
                <WishedText style={focused ? { color: '#66043C' } : null}>
                  {route.title}
                </WishedText>
              </View>
            );
          }}
        />
      </Container>
    );
  }
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: WishedWines,
        second: OfferedWines,
      })}
      renderTabBar={renderTabBar}
      onIndexChange={(ind) => setIndex(ind)}
      initialLayout={{ width: Dimensions.get('window').width }}
      id="tabViewContainer"
      color="orange"
      selectedColor="green"
    />
  );
};
const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 10 : 0};
`;
const WishedText = styled.Text`
  font-family: DancingScript-Bold;
  font-size: 30px;
  color: #E5DED3;
`;
export default Home;
