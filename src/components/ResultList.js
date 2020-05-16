import React from 'react';
import { TextInput, StyleSheet, View,Text,FlatList,TouchableOpacity } from "react-native";
import ResultDetails from './ResultDetails';
import {withNavigation} from 'react-navigation';


//Returns all the restaurant results ,pricier, cheap and middle price.
const ResultList= ({title ,results, navigation})=>{
    if (!results.length){
        return null;
    }
    return(
        <View  style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal 
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor = {(result)=>result.id}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow',{id: item.id})}>
                         <ResultDetails result={item} />
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    );

};
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        color: '#2CA08B'
    },
    container: {
        marginBottom: 40
    }
  });
  
  export default withNavigation(ResultList);
  