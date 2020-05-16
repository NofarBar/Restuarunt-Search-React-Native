import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, FlatList,Image } from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
import yelp from '../api/yelp';
import { resolveTypeReferenceDirective } from 'typescript';

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);

   const id = navigation.getParam('id');

   const getResult = async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
   };

   useEffect(()=>{
       getResult(id);
   },[]
   );
  
   if (!result){
       return null;
   }
  return (
      <View style={{flex: 1}}>
        <Text style={styles.text}>{result.name}</Text>
      <FlatList
          data={result.photos}
          keyExtractor={(photo)=> photo}
          renderItem ={({item})=>{
            return <Image style={styles.image} source={{uri:item }}/>
          }
         
          }
      />

      </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#2CA08B',
    marginBottom: 20

  },
  image:{
    height: 150,
    width: 250,
    borderRadius:20,
    alignSelf: 'center',
    margin: 10,
    borderWidth: 3,
    borderColor: "#728784"
    
  }
});

export default ResultShowScreen;
