import React from 'react'
import { View,Text, Image, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import styles from '../styles'

const Banner = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",padding:25,margin:15,backgroundColor:"pink",borderRadius:10,marginTop:0}}>
        <View style={[styles.w75]}>
            <Text style={[styles.textBlack,styles.fs2,styles.textPrimary,styles.textBold]}>There's a Plant</Text>
            <Text style={[styles.textBlack,styles.fs2,styles.textPrimary,styles.textBold]}>Plant For Everyone</Text>
            <Text style={[styles.textBlack,styles.textPrimary,styles.p1]}>sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor</Text>
        </View>
        <View >
      <Image source={{uri:"https://www.freepnglogos.com/uploads/plant-png/house-plant-png-30.png",width:110,height:150}} />
        </View>
    </View>
  )
}

export default Banner
