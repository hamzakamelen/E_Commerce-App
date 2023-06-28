import {View,Image,Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import axios from "axios";
import {useState} from 'react'
import styles from '../style/style';
function Products({navigation}:any){
    const [data,setData]= useState<any>()
    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            setData(res.data);
            console.log(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }
    getProducts()
    return(
        <ScrollView>
        <View style={[styles.flexRow,styles.flexWrap]}>
        {data && data.map((x:any,i:number)=>
        <View key={i} style={[styles.w50,styles.bgWhite,styles.border1,styles.borderLeft3,styles.borderBottom3]}>
            <TouchableOpacity onPress={()=>{navigation.navigate('ProductDetails',x)}}>
            <Image resizeMode="contain" style={{width: 100, height: 120,alignItems:'center',marginStart:20,marginTop:10}} source={{ uri: x.image }}/>
            <Text style={[styles.p1,styles.textBlack,{fontSize:17},styles.textBold]}>{x.title}</Text>
            <Text style={[styles.p1,styles.textBlack,styles.fs3,styles.textBold]}>${x.price}</Text>
            </TouchableOpacity>
            </View>
        )}
        </View>
        </ScrollView>
    )
}
export default Products;