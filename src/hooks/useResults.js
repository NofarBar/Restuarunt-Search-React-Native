import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

//Use yelp Api to get all restaurant according to area and type/
export default ()=>{
const [results, setResults] = useState([]); 
const [errMessage, setErrMessage] = useState(''); 

const searchApi = async (searchTerm)=>{
    try{
        const response = await yelp.get('/search', {
         params:{
              limit: 50,
              term: searchTerm,
             location: 'New York'
         }
         });
         setResults(response.data.businesses)

     }catch(err){
        setErrMessage('Something went Wrong');
    }
  };
  useEffect(()=> {
      searchApi('pasta')
  },[])
  return [searchApi, results,errMessage];
    
};