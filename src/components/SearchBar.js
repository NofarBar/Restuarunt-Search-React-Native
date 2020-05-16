import React from 'react';
import { TextInput, StyleSheet, View,Text } from "react-native";
import {Feather} from '@expo/vector-icons';

//Component allows user to srarch for a specific restaurant type and shoe results
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
      <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput 
      autoCapitalize="none" 
      autoCorrect={false} 
      style ={styles.inputStyle} 
      placeholder="Search" 
      value={term} 
      onChangeText={ onTermChange} 
      onEndEditing={onTermSubmit} />
      </View>

  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E3E3E3',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 35,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  inputStyle:{
      flex: 1,
      fontSize: 18
  },
  iconStyle: {
      fontSize: 30,
      alignSelf: 'center',
      marginHorizontal: 15
  }
});

export default SearchBar;
