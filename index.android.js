import React, { Component, PropTypes } from 'react';
import {AppRegistry, Navigator, Text, TouchableHighlight, View } from 'react-native';
import MyScene from './MyScene';

export default class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}

        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            } }

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            } }

            />
        }

        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom}


        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{

              LeftButton: (route, navigator, index, navState) => {
                if (route.index === 0) {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop() }>
                      <Text>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },


              RightButton: (route, navigator, index, navState) => {

                return (
                  <TouchableHighlight onPress={() => {
                    const nextIndex = route.index + 1;
                    navigator.push({
                      title: 'Scene ' + nextIndex,
                      index: nextIndex,
                    });

                  } }>
                    <Text>Foward</Text>
                  </TouchableHighlight>
                );

              },

              Title: (route, navigator, index, navState) =>
              { return (<Text>Awesome Nav Bar</Text>); },
            }}
            style={{ backgroundColor: 'gray' }}
            />
        }

        />
    )
  }
}

/// This is dummydd
AppRegistry.registerComponent('TestReactNative1', () => SimpleNavigationApp);  
