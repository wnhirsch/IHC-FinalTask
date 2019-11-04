/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,  { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TextInput,
  Card,
  Image,
  CheckBox,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import WinesService from './WinesService';

const App: () => React$Node = () => {
  const [wines, setWines] = useState([]);
  const [textFilter, setTextFilter] = useState('')
  const [error, setError] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const listWines = () => wines.map(wine =>
  
  <>
  <View style={styles.cardView} key={wine.id}>
  <View  style={styles.cardText}>
    <Text style={{fontWeight: 'bold', fontSize:15}}> Nome:<Text style={{color: '#FF3244', fontSize:15}}>{wine.name}</Text> </Text>
    <Text style={{fontWeight: 'bold', fontSize:15}}> País:<Text style={{color: '#FF3244', fontSize:15}}>{wine.country}</Text> </Text>
    <Text style={{fontWeight: 'bold', fontSize:15}}> Ano:<Text style={{color: '#FF3244', fontSize:15}}>{wine.year}</Text> </Text>
    <Text style={{fontWeight: 'bold', fontSize:15}}> Preço: $<Text style={{color: '#FF3244', fontSize:15}}>{wine.price}</Text> </Text>
  </View>

    <Image
            style={{width: 50, height: 200 }}
            source={{uri: wine.imgUrl}}
            />
  </View>

  </>
  );

  const searchWines = () => {
    WinesService.getWines(textFilter).then((response) => {
      console.warn(response);
      setWines(response);
      setError(false);
    }).catch(() => {
      setError(true);
    })
  }

  const listAllWines = () => {
    WinesService.getAllWines().then((response) => {
      console.warn(response);
      setWines(response);
      setError(false);
    }).catch(() => {
      setError(true);
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}>
          <View>


          </View>
          
          <View
          style={styles.textInput}>
          <TextInput
          autoFocus
          backgroundColor='#FFFFFF'
          value={textFilter}
          onChangeText={text => setTextFilter(text)}
          numberOfLines={1}
          />
          </View>
          <View style={styles.body}>
            <Button
            color='#810012'
          style= {styles.buttonList}
          title="List Wines"
          onPress={() => listWines()}
        />
                    <Button
            color='#810012'
          style= {styles.buttonList}
          title="Search "
          onPress={() => listAllWines()}
        />
          <CheckBox value={checkBox} onChange={() => setCheckBox(!checkBox)} />
          </View>
          <View style={styles.cardText}>

          {listWines()}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  textInput:{
    color:'#FFFFFF'
  },
  cardView:{
    flexDirection:'row',
  },
  cardText:{
    flexDirection:'column',
  },
  buttonList:{
    backgroundColor: '#810012',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#810012',
    flexDirection: 'row',
    textAlign:'center',
    alignItems:'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
