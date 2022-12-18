import React, {Dispatch, SetStateAction} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {blackColor, ContainerNeutralColor, darkColor, whiteColor} from '../../models/constants/colors';

type props = {
  
  value: string,
  onChangeText: Dispatch<SetStateAction<string>>,
  customStyle?: Object,
};

const InputText: React.FC<props> = ({value, onChangeText, customStyle}) => {
  const dynamicStyle = {
    ...customStyle,
    backgroundColor: ContainerNeutralColor,
    color: darkColor,
  };
  const combineStyles = StyleSheet.flatten([styles.defaultInputStyle, dynamicStyle]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor: whiteColor,padding: 10, borderRadius: 50}}><Text style={{color: blackColor}}>icon</Text></TouchableOpacity>
      <TextInput style={combineStyles} onChangeText={onChangeText} value={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center"
  },
  defaultInputStyle: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export default InputText;
