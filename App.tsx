/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, StyleSheet, useColorScheme, View} from 'react-native';
import EnTranslation from './src/i18n/en.json';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import {AuthStore} from './src/stores/RootStore';
import LoginScreen from './src/screens/login';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: EnTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

const HomeScreen: React.FC = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

const RootStack = createNativeStackNavigator();

const App = () => {
  const isLogin: boolean = AuthStore.isLogedIn;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isLogin ? (
          <RootStack.Screen name="Home" component={HomeScreen} />
        ) : (
          <RootStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default observer(App);
