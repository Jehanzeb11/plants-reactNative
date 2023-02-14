import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, Button, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { favRemove } from '../redux/favourite';
import styles from '../styles'

const Favourites = ({navigation}) => {
  const {favourite} = useSelector((state)=>state.fav)
  console.log(favourite,"favs")
  const dispatch = useDispatch()
  const del=(item)=>{
    dispatch(favRemove(item))
    }
  return (
    <>{ favourite.length !== 0 ? (<View>
        <FlatList data={favourite} keyExtractor={(item)=>item._id} renderItem={({item})=>{
            return <View style={{justifyContent:"space-between",margin:10,flexDirection:'row'}}>

            <View style={[styles.bgLight,styles.rounded,styles.mx1]}>
                <Image source={{ uri: item.img, width: 120, height: 120 }} />
            </View>
            <View style={[styles.flexCenter]}>
                <Text style={[styles.textPrimary,styles.fs5]}>{item.name}</Text>
            </View>
            
<TouchableOpacity onPress={()=>del(item)} style={[styles.flexCenter]}>
    <Text><Icon name="delete" size={25} color="red"/></Text>
</TouchableOpacity>







        </View>
                }        } />
        
</View>):(
  <View style={[styles.flexCenter,styles.mt5]}><Text style={[styles.textPrimary,styles.fs3,styles.textCenter,styles.m2]}>Nothing To Show In Favourites</Text>
  <TouchableOpacity style={[styles.w75,styles.mt2]} onPress={()=>navigation.navigate("HomeProducts")}>

  <Text style={[styles.textBlack,styles.textBold,styles.bgWhite,styles.p1,styles.fs4,styles.textCenter,styles.roundedPill]}>Go Back To Shopping <Icon name="shopping-bag" size={20} color="black"/></Text>
  </TouchableOpacity>
  </View>
)}

        
        </>
  )
}

export default Favourites
