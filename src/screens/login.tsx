import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import InputText from '../components/ui/input';
import {Dimensions} from 'react-native';
const loginBackgroundImagePath: string = '../assets/images/login-background.png';

type props = {};

const windowWidth = Dimensions.get('window').width;

const LoginScreen: React.FC<props> = ({}) => {
  const [userEmail, setUserEmail] = useState<string>("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(loginBackgroundImagePath)}
        resizeMode="cover"
        style={styles.image}>
        <InputText value={userEmail} onChangeText={setUserEmail} customStyle={{width: windowWidth*0.8}} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
