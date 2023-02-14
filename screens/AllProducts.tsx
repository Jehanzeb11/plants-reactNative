import React, { useEffect } from 'react'
import { View,Text, Image, ImageBackground, TextInput, Button, TouchableOpacity,ScrollView,FlatList } from 'react-native'
import styles from '../styles'
import { useSelector,useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { add } from '../redux/cartSlice'
import { getProducts } from '../redux/productSlice'

const AllProducts = ({navigation}) => {
  const {products} = useSelector((state)=>state.products)
  const dispatch = useDispatch()

  const handleAdd=(product)=>{
    dispatch(add(product))
console.log(product)
  }


  useEffect(()=>{
    dispatch(getProducts())
        },[])
    
  return (<>
  <View>
            <Text style={[styles.textPrimary,styles.fs3,styles.m2]}>All Products</Text>
        </View>
         <ScrollView>
         <FlatList data={products} keyExtractor={(item)=>item._id} renderItem={({item})=>{
         return  <View style={[styles.flexCenter,styles.m1]}>
         <View style={[styles.w75]}>
           <View style={[styles.p1,styles.bgLight]}>
           <TouchableOpacity style={[styles.w20]}>
             <Text style={[styles.textLight,styles.bgBlack,styles.fs4,styles.textCenter,styles.roundedBtn]}><Icon name="star" size={30} color="white" /></Text>
           </TouchableOpacity>
         <View style={[styles.flexCenter]}>
         <TouchableOpacity onPress={()=>navigation.navigate("SingleProduct",item)}>
             <Image source={{uri:item.img,width:180,height:180}} />
         </TouchableOpacity>
           </View>
           
           </View>
           <TouchableOpacity onPress={()=>handleAdd(item)}>
             <Text style={[styles.textLight,styles.bgPrimary,styles.p1,styles.fs4,styles.textCenter,styles.roundedPill]}>Add To Cart <Icon name="shopping-cart" size={20} color="white" /></Text>
           </TouchableOpacity>
         
           <Text>{item.desc}</Text>
         
         </View>
         </View>
         }} />
         
         
         <TouchableOpacity onPress={()=>navigation.navigate("Cart")}><Text style={[styles.textBlack]}>Goto cart</Text></TouchableOpacity>
         
         </ScrollView>
         
         </>
  )
}

export default AllProducts
