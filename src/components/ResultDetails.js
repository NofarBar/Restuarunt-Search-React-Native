import React from 'react';
import { Image, StyleSheet, View,Text,FlatList } from "react-native";

//Returns the results of a specific restaurant, picture number of stars and reviews.
const ResultDetails= ({result})=>{
    return(
        <View style={styles.container}>
        <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews </Text>
        </View>
    );

};
const styles = StyleSheet.create({
    container:
    {
        marginLeft: 15,
    },
    image: {
        width: 200,
        height: 100,
        borderRadius:100,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: "black"
    },
    name: {
        fontWeight: 'bold',

    }

  });
  
  export default ResultDetails;
  