import React, { Component } from 'react';
import { Navigator, AppRegistry, ScrollView, Image, Text, View } from 'react-native'

import MyScene from './MyScene';

class YoDawgApp extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => {
          <MyScene title={route.title} />
        } }
        />
    );
  }


}

/// This is dummy
AppRegistry.registerComponent('TestReactNative1', () => YoDawgApp);  
