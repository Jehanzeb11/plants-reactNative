import React from 'react'
import { View,Text, Image, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native'
import styles from '../styles'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';



const Card = ({name,img,desc}) => {
    const navigation = useNavigation()


    const gotoSingle = ()=>{
navigation.navigate("SingleProduct")
    }
    const gotoFavourites=()=>{
navigation.navigate("Favourites")

    }
  return (
    <View style={[styles.flexCenter,styles.m1]}>
    <View style={[styles.w75]}>
      <View style={[styles.p1,styles.bgLight]}>
      <TouchableOpacity style={[styles.w20]} onPress={gotoFavourites}>
        <Text style={[styles.textLight,styles.bgBlack,styles.fs4,styles.textCenter,styles.roundedBtn]}><Icon name="star" size={30} color="white" /></Text>
      </TouchableOpacity>
{/* <View style={[styles.flexCenter]}>
    <TouchableOpacity onPress={gotoSingle}>
        <Image source={{uri:img,width:180,height:180}} />
    </TouchableOpacity>
      </View> */}
      
      </View>
      <TouchableOpacity>
        <Text style={[styles.textLight,styles.bgPrimary,styles.p1,styles.fs4,styles.textCenter,styles.roundedPill]}>Add To Cart <Icon name="shopping-cart" size={20} color="white" /></Text>
      </TouchableOpacity>

      <Text>{desc}</Text>

    </View>
    </View>
  )
}

export default Card
