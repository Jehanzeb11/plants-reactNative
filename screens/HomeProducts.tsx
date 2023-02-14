import React,{useEffect} from 'react'
import { View,Text, Image, ImageBackground, TextInput, Button, TouchableOpacity,ScrollView , FlatList} from 'react-native'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { getProducts } from '../redux/productSlice'
import styles from '../styles'
import { useSelector,useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { add } from '../redux/cartSlice'
import { favAdd } from '../redux/favourite'



const HomeProducts = ({navigation}) => {
  const {products} = useSelector((state)=>state.products)
  const {cart} = useSelector((state)=>state.cart)


    const dispatch = useDispatch()



          const gotoFavourites=(item)=>{
     dispatch(favAdd(item))
     console.log("added",item)
      
          }
    
    useEffect(()=>{
dispatch(getProducts())
    },[])



    const handleAdd=(product)=>{
      dispatch(add(product))
console.log(product)
    }



  return (
    <>
    <View >
      <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10,marginBottom:3 }}>
      <Text style={[styles.fs3,styles.textBlack,styles.my1,styles.textBold]}>Home</Text>

      <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
      <Text style={[styles.textSuccess,styles.p1,styles.fs4,styles.bgLight,styles.roundedPill,styles.flexCenter]}>Cart <Icon name="shopping-bag" size={20} color={styles.textSuccess} />{cart.length}</Text>
    </TouchableOpacity>
          </View>
      <Banner />
      <Navbar/>
      <Text style={[styles.textBlack,styles.textBold,styles.fs1,styles.m1]}>Products  </Text>
      
      </View>
      <ScrollView>
<FlatList data={products} 
showsVerticalScrollIndicator
keyExtractor={(item)=>item._id} renderItem={({item})=>{
return  <View style={[styles.flexCenter,styles.m1]}>
<View style={[styles.w75]}>
  <View style={[styles.p1,styles.bgLight]}>
  <TouchableOpacity style={[styles.w20]} onPress={()=>gotoFavourites(item)}>
    <Text style={[styles.textLight,styles.bgBlack,styles.fs4,styles.textCenter,styles.roundedBtn]}><Icon name="star" size={30} color="white" /></Text>
  </TouchableOpacity>
  
<View style={[styles.flexCenter]}>
<TouchableOpacity onPress={()=>navigation.navigate("SingleProduct",item)}>
    <Image source={{uri:item.img,width:200,height:180}} />
</TouchableOpacity>

  </View>
  
  </View>
  <TouchableOpacity onPress={()=>handleAdd(item)}>
    <Text style={[styles.textLight,styles.bgPrimary,styles.p1,styles.fs4,styles.textCenter,styles.roundedPill]}>Add To Cart <Icon name="shopping-cart" size={20} color="white" /></Text>
  </TouchableOpacity>


</View>
</View>
}} />



</ScrollView>
    </>
  )
}

export default HomeProducts
