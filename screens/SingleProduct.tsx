import React from 'react'
import { View,Text, Image, ImageBackground, TextInput, Button, TouchableOpacity,FlatList } from 'react-native'
import styles from '../styles'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { add } from '../redux/cartSlice'
import { favAdd } from '../redux/favourite'
import { useSelector,useDispatch } from 'react-redux'




const SingleProduct = ({navigation,route}) => {

const dispatch = useDispatch()

 const items = route.params


 const addFav=(product)=>{
  dispatch(favAdd(product))
 }

 const addCart=(product)=>{
  dispatch(add(product))
 }

console.log(items,"single")

  return (
    <>
<View style={[styles.m2]}>
  <View style={[styles.flexCenter,styles.h60,styles.bgLight]}>
    <Image style={[styles.w75,styles.h80]} source={{uri:items.img}} />
  </View>
    <View><Text style={[styles.textBold,styles.textCenter,styles.m1,styles.textPrimary,styles.fs2]}>{items.name}</Text></View>

<View><Text style={[styles.fs5,styles.textPrimary]}>Description: </Text>
  <Text style={[styles.textBlack]}>{items.desc}</Text></View>


  <View><Text style={[styles.textBlack,styles.mt1]}>Price :</Text><Text style={[styles.textPrimary,styles.fs5,styles.textBold]}>$ {items.price}</Text></View>

<View style={{flexDirection:"row",width:"100%",marginTop:20,justifyContent:"center"}}>
<TouchableOpacity style={[styles.mx1]} onPress={()=>addCart(items)}>
    <Text style={[styles.textLight,styles.bgPrimary,styles.p1,styles.fs4,styles.textCenter,styles.roundedPill,styles.w100]}>Add To Cart <Icon name="shopping-cart" size={20} color="white" /></Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>addFav(items)}>
    <Text style={[styles.textLight,styles.bgBlack,styles.p1,styles.fs4,styles.textCenter,styles.roundedPill,,styles.w100]}>Add Favourite <Icon name="star" size={20} color="white" /></Text>
  </TouchableOpacity>

</View>

</View>


 </>
  )
}

export default SingleProduct
