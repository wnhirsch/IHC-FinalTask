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
    const minhaLista = [  {
              "nome" : "Hamburguer Picanha",
              "imgUrl" : "https://static.carrefour.com.br/medias/sys_master/images/images/hbe/hd9/h00/h00/10786591932446.jpg",
              "tipo" : "Congelados",
              "corredor" : 6.0
          },
          {
              "nome" : "Camarão",
              "imgUrl" : "https://static.carrefour.com.br/medias/sys_master/images/images/hb2/h51/h00/h00/11120881827870.jpg",
              "tipo" : "Congelados",
              "corredor" : 6.0
          },
          {
              "nome" : "Hamburguer Picanha",
              "imgUrl" : "https://static.carrefour.com.br/medias/sys_master/images/images/hbe/hd9/h00/h00/10786591932446.jpg",
              "tipo" : "Congelados",
              "corredor" : 6.0
          },
          {
              "nome" : "Maçã",
              "imgUrl" : "https://static.carrefour.com.br/medias/sys_master/images/images/he0/hdd/h00/h00/10135282515998.jpg",
              "tipo" : "Frutas",
              "corredor" : 5.0
          },
          {
              "nome" : "Coca-Cola",
              "imgUrl" : "https://static.carrefour.com.br/medias/sys_master/images/images/hd6/hf7/h00/h00/9230973435934.jpg",
              "tipo" : "Bebidas",
              "corredor" : 1.0
          }];
  const [wines, setWines] = useState(minhaLista);
  const [textFilter, setTextFilter] = useState('')
  const [error, setError] = useState(false);
  const [checkBox, setCheckBox] = useState(false);



  const listWines = () => wines.map(wine =>
  
  <>
  <View style={styles.cardView}>
        <Image
                    style={{width: 50, height: 75 }}
                    source={{uri: wine.imgUrl}}
                    />
  <View  style={styles.cardText}>
    <Text style={{fontWeight: 'bold', fontSize:15}}> Nome:<Text style={{color: '#FF3244', fontSize:15}}>{wine.nome}</Text> </Text>
    <Text style={{fontWeight: 'bold', fontSize:15}}> Tipo:<Text style={{color: '#FF3244', fontSize:15}}>{wine.tipo}</Text> </Text>
  </View>

  </View>

  <View>
        <Button
           color='#810012'
         style= {styles.buttonList}
         title="Adicionar a Lista"
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
    WinesService.getMyList().then((response) => {
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

           <View style={styles.body2}>

              <Button
                color='#04941f'
                style= {styles.buttonList}
                title="Bebidas"
                onPress={() => listWines()}
              />

              <Button
                  color='#04941f'
                  style= {styles.buttonList}
                  title="Cuidados Pessoais"
                  onPress={() => listWines()}
              />

              <Button
                color='#04941f'
                style= {styles.buttonList}
                title="Cuidados com Roupas"
                onPress={() => listWines()}
            />
            </View>

             <View style={styles.body2}>

            <Button
                color='#04941f'
                style= {styles.buttonList}
                title="Biscoitos"
                onPress={() => listWines()}
            />

            <Button
                color='#04941f'
                style= {styles.buttonList}
                title="Doces"
                onPress={() => listWines()}
            />

          <Button
             color='#04941f'
             style= {styles.buttonList}
             title="Massas"
             onPress={() => listWines()}
         />

         <Button
              color='#04941f'
              style= {styles.buttonList}
              title="Molhos"
              onPress={() => listWines()}
          />

          <Button
                color='#04941f'
                style= {styles.buttonList}
                title="Frutas"
                onPress={() => listWines()}
            />

           </View>

           <View style={styles.body2}>
           <Button
               color='#04941f'
               style= {styles.buttonList}
               title="Congelados"
               onPress={() => listWines()}
           />
           </View>

          <View style={styles.body}>
            <Button
            color='#810012'
          style= {styles.buttonList}
          title="Minha Lista"
          onPress={() => listWines()}
        />
                    <Button
            color='#810012'
          style= {styles.buttonList}
          title="Gerar Caminho "
          onPress={() => listAllWines()}
        />
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
  body2: {
    backgroundColor: '#f5f5dc',
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
