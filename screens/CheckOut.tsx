import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../styles'


const CheckOut = ({navigation}) => {

  const gotoHome=()=>{
navigation.navigate("HomeProducts")
  }
  return (
    <View style={[styles.flexCenter]}>

<View style={[styles.mt5]}>
    <Text style={[styles.textPrimary,styles.textBold,styles.fs1,styles.textCenter]}>Order</Text>
    <Text style={[styles.textPrimary,styles.textBold,styles.fs1]}>Recieved</Text>
    </View> 
    <View style={[styles.my1]}>
        <Text style={[styles.textBlack]}>OrderId: #090078609</Text>
    </View>

    <View style={[styles.mt5]}>
    <Image style={{width:250,height:200,resizeMode:"contain"}} source={require("./asstets/get.jpg")}/>
    </View>
    
    <TouchableOpacity style={[styles.w100,styles.flexCenter,styles.mt2]} onPress={gotoHome}>
    <Text style={[styles.bgPrimary,styles.m2,styles.roundedPill,styles.textCenter,styles.p1,styles.fs3,styles.w75]}>Go To Home</Text>

    </TouchableOpacity>
       </View>

)
}

export default CheckOut
