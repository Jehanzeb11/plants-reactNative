import React from 'react'
import { View,Text, TouchableOpacity, Image,ScrollView  } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from '../styles'
// import get_img from "./asstets/get_img.jpg"

const HomeScreen = ({navigation}) => {

const handleStarted=()=>{
navigation.navigate("Login")
}

  return (
    <ScrollView>
      
      <View style={[styles.flexCenter,styles.mt3]}>
      <Image style={{width:370,height:300,resizeMode:"contain"}} source={require("./asstets/get.jpg")}/>
      </View>
      
      <View style={[styles.p1]}>
        <Text style={[styles.textPrimary,styles.fs1,styles.textBold]}> Get Ready </Text>
        <Text style={[styles.textPrimary,styles.fs1,styles.p1,styles.textBold]}>Be Hygenic </Text>
        <Text style={[styles.textPrimary,styles.fs5]}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum nemo commodi suscipit tempore deleniti optio minima mollitia, quo, ea iusto quasi voluptatum cum vitae quia amet impedit labore vero. Lorem ipsum dolor sit amet consectetur</Text>
      </View>
      <TouchableOpacity onPress={handleStarted} style={[styles.flexCenter,styles.mt2]}><Text style={[styles.p1,styles.bgPrimary,styles.textLight,styles.w50,styles.fs3,styles.roundedPill,styles.textCenter]}>Get Started</Text></TouchableOpacity>
    </ScrollView>
  )
}

export default HomeScreen
