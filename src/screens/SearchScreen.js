import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
const [term, setTerm] = useState('');
const [searchApi, results,errMessage] = useResults();

const filterResultByPrice = (price)=>{
    return results.filter(result =>{
        return result.price === price;
    });
};

  return (
      <View style={{flex: 1}}>
        <SearchBar 
        term= {term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={()=>searchApi(term)}
        />
        {errMessage? <Text>{errMessage}</Text> :null}
        <ScrollView>
        <ResultList results={filterResultByPrice('$')} title="Cost Effective"/>
        <ResultList results={filterResultByPrice('$$')} title="Bit Pricier"/>
        <ResultList results={filterResultByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
      </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
