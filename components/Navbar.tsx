import React from 'react'
import { View,Text, Image, ImageBackground, TextInput, Button, TouchableOpacity,ScrollView } from 'react-native'
import styles from '../styles'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';



const Navbar = () => {
    const navigation = useNavigation()
    
const gotoFavourites = ()=>{
navigation.navigate("Favourites")
}


const gotoAllProducts=()=>{
navigation.navigate("AllProducts")
    
}

  return (
    <>
<View style={{justifyContent:"space-around",flexDirection:"row",alignItems:"center"}}>
    <TouchableOpacity onPress={gotoAllProducts}>
      <Text style={[styles.textSuccess,styles.p1,styles.fs4,styles.bgLight,styles.roundedPill,styles.flexCenter]}>All Products <Icon name="shopping-bag" size={20} color={styles.textSuccess}/></Text>
    </TouchableOpacity>
    

    <TouchableOpacity onPress={gotoFavourites}>
      <Text style={[styles.textSuccess,styles.p1,styles.fs4,styles.bgLight,styles.roundedPill,styles.flexCenter]}>Favourites <Icon name="star" size={20} color={styles.textSuccess} /></Text>
    </TouchableOpacity>
    
    </View>

    
    </>
  )
}

export default Navbar

