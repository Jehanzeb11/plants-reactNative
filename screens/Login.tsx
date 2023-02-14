import React,{useState} from 'react'
import { View,Text , Image, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native'
import { loginUser } from '../redux/userSlice'
import styles from '../styles'
import { useSelector,useDispatch } from 'react-redux'


const Login = ({navigation}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {user,loading} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
  
  
  
    console.log(user)
    const userData ={
      email,password
    }

    const gotoHOME=()=>{
      dispatch(loginUser({userData,navigation}))
      try{  

        // if(user){
    
        //     navigation.navigate("HomeProducts")
        // }
        
      }catch(err){
    console.log(err)
      }    
    
    }



    if(loading){
return <View><Text style={[styles.textBlack]}>Loading...</Text></View>
    }
  return (
    <View>
      <View style={[styles.flexCenter,styles.mt5]}>
        <Text style={[styles.textBlack,styles.fs1,styles.textBold,styles.textPrimary]}>Login</Text>
            
        </View>
   

        <View style={[styles.flexCenter,styles.mt5]}>
          <View><Text style={[styles.textBlack]}>Email : </Text></View>
          
        <TextInput keyboardType="email-address" placeholder='email' onChangeText={(e) => setEmail(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textPrimary]} />
        </View> 
        <View style={[styles.flexCenter,styles.mt5]}>
        <View><Text style={[styles.textBlack]}>Password : </Text></View>

        <TextInput  secureTextEntry={true} placeholder="password" onChangeText={(e) => setPassword(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textPrimary]} />
        </View>

        <TouchableOpacity style={[styles.flexCenter]} onPress={gotoHOME}>
        <Text style={[styles.mt4,styles.p1,styles.bgPrimary,styles.textLight,styles.w25,styles.fs3,styles.roundedPill,styles.textCenter]}>Login</Text>
        </TouchableOpacity>
        <View>
            <TouchableOpacity style={[styles.flexCenter]} onPress={()=>{
                navigation.navigate("Register")
            }}>
            <Text style={[styles.textInfo,styles.textBold,styles.fs5,styles.mt3]}>Create Account</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login
