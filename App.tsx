import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AppNavigation from './config/AppNavigation';
import styles from './styles';
import {Provider} from "react-redux"
import store from './redux/store/store';


function App(){
 
  return (
    <>
 <Provider store={store}>



<AppNavigation/>
  
 </Provider>
      </>
  );
}


export default App;
