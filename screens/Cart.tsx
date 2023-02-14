import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, Button, TouchableOpacity, ScrollView,FlatList } from 'react-native'
import styles from '../styles'
import { useSelector,useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { remove,undo } from '../redux/cartSlice';


const Cart = ({navigation}) => {

    const {cart,total} = useSelector((state)=>state.cart)
const dispatch = useDispatch()



const del=(item)=>{
dispatch(remove(item))
}
const gotoCheckOut = ()=>{
navigation.navigate("CheckOut")
 dispatch(undo())
}


    return (
        <>
            <View>
        <FlatList data={cart} keyExtractor={(item)=>item._id} renderItem={({item})=>{
            return <View style={{justifyContent:"space-between",margin:10,flexDirection:'row'}}>

            <View style={[styles.bgLight,styles.rounded,styles.mx1]}>
                <Image source={{ uri: item.img, width: 120, height: 120 }} />
            </View>
            <View style={[styles.flexCenter]}>
                <Text style={[styles.textPrimary,styles.fs5]}>{item.name} <Text> ${ item.price}</Text></Text> 
            </View>
            
<TouchableOpacity onPress={()=>del(item)} style={[styles.flexCenter]}>
    <Text><Icon name="delete" size={25} color="red"/></Text>
</TouchableOpacity>






        </View>
                }        } />
        
        
</View>

       {cart.length !== 0 ?(<View>
        <View><Text style={[styles.textBlack,styles.textCenter,styles.fs3,styles.textBold,styles.textSuccess]}>Total :{total}</Text></View>
            <TouchableOpacity style={[styles.flexCenter]} onPress={gotoCheckOut}>
                <Text style={[styles.bgPrimary,styles.m2,styles.roundedPill,styles.textCenter,styles.w75,styles.p1,styles.fs3]}>CheckOut</Text>
            </TouchableOpacity>
        </View>):(<View style={[styles.flexCenter,styles.mt5]}><Text style={[styles.textPrimary,styles.fs3,styles.textCenter,styles.m2]}>Your Cart Is Empty  </Text>
        <TouchableOpacity style={[styles.w75,styles.mt2]} onPress={()=>navigation.navigate("HomeProducts")}>

        <Text style={[styles.textBlack,styles.textBold,styles.bgWhite,styles.p1,styles.fs4,styles.textCenter,styles.roundedPill]}>Go Back To Shopping <Icon name="shopping-bag" size={20} color="black"/></Text>
        </TouchableOpacity>
        </View>)} 
        
        </>
    )
}

export default Cart
