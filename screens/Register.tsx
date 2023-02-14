import React,{useState} from 'react'
import { View,Text, Image, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { registerUser } from '../redux/userSlice'
import styles from '../styles'



const Register = ({navigation}) => {

  const {user} = useSelector((state)=>state.user)
  const dispatch = useDispatch()



  console.log(user)

  const [username,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

const gotoLogin=()=>{
navigation.navigate("Login")
}


  const userData={
    username,email,password
  }



const gotoHOME=()=>{
  try{  


      dispatch(registerUser({userData,navigation}))
    
  }catch(err){
console.log(err)
  }
}

  return (
    <>
          <View style={[styles.flexCenter,styles.mt5]}>
        <Text style={[styles.textPrimary,styles.fs1,styles.textBold]}>Register</Text>
            
        </View>
        <View style={[styles.flexCenter,styles.mt5]}>
        <View><Text style={[styles.textBlack]}>Name : </Text></View>

        <TextInput placeholder='Name' value={username} onChangeText={(e) => setName(e)} style={[styles.textBlack,styles.border1,styles.w75,styles.rounded,styles.p1]} />
        </View> 
        <View style={[styles.flexCenter,styles.mt5]}>
        <View><Text style={[styles.textBlack]}>Email : </Text></View>

        <TextInput keyboardType="email-address" value={email} placeholder='email' onChangeText={(e) => setEmail(e)} style={[styles.textBlack,styles.border1,styles.w75,styles.rounded,styles.p1]} />
        </View> 
        <View style={[styles.flexCenter,styles.mt5]}>
        <View><Text style={[styles.textBlack]}>Password : </Text></View>

        <TextInput  secureTextEntry={true} value={password} placeholder="password" onChangeText={(e) => setPassword(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textBlack]} />
        </View>
        <TouchableOpacity style={[styles.flexCenter]} onPress={gotoHOME}>
            <Text style={[styles.textCenter,styles.textLight,styles.mt4,styles.w25,styles.bgPrimary,styles.roundedPill,styles.fs4,styles.p1]}>Register</Text>
        </TouchableOpacity>
        <View>
            <TouchableOpacity style={[styles.flexCenter]} onPress={gotoLogin}>
            <Text style={[styles.textInfo,styles.textBold,styles.fs5,styles.mt3]}>Login Now</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

export default Register
