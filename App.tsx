import { ActivityIndicator, Button, FlatList, FlatListComponent, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNavigationContainerRef, NavigationContainer, useRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
const App = () => {
let [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")


// useEffect(()=>{
//   console.warn("useEffect called")
// },[])
const handleSignUp=()=>{
console.log(name,email,password)
}
const [showLoader,setShowLoader]=useState(false)
const skills=[
  {
    id:1,
  name:'js' 
 },
  {
    id:2,
  name:'React' 
 },
  {
    id:3,
  name:'Java' 
 },

  {
    id:4,
  name:'Git' 
 },

  {
    id:5,
  name:'VS' 
 },
]

const data=[
  {
    Roll_num:1,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:2,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:3,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:4,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:5,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:6,
    Name:"ALi",
    MArks:20
  },{
    Roll_num:7,
    Name:"ALi",
    MArks:20
  },

  {
    Roll_num:8,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:9,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:10,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:11,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:12,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:13,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:14,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:15,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:16,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:17,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:18,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:19,
    Name:"ALi",
    MArks:20
  },
  {
    Roll_num:20,
    Name:"ALi",
    MArks:20
  },
  
]

const naam=new Array('amna','faiza',"raheela",'amna','faiza',"raheela")

const [selected,setSelected]=useState('null')
const handleSelecion=(item)=>{
setSelected(item.name)
}
// const Satck=createNativeStackNavigator();
// const Tab=createBottomTabNavigator();
// const Tab=createMaterialTopTabNavigator();
const Drawer=createDrawerNavigator();
return (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name='Login' component={LoginSceen}></Drawer.Screen>
    </Drawer.Navigator>


{/* <Satck.Navigator screenOptions={{
  headerTitle:()=>{
    return (
      <Button title='LEFT btn pressed' onPress={()=>{
       console.warn("Left button pressed")
      }}></Button>
    )
  },
  headerRight:()=>{
    return (
      <View>
        <Button title='Right  btn' onPress={()=>{
          console.warn("right btn pressed")
        }}></Button>
      </View>
    )
  }
}}>
  <Satck.Screen name="Home" component={HomeScreen}></Satck.Screen>
  <Satck.Screen name="Login" component={LoginScreen}></Satck.Screen>
</Satck.Navigator> */}


    {/* <Text style={styles.signUpForm}>sinUP Form</Text>
    <View>
    <Text>Name:{name}</Text>
    <TextInput 
    placeholder='Name'
     style={styles.input}
     onChangeText={(val)=>{setName(val)}}>
    </TextInput>
    </View>

    <View>
    <Text>Email</Text>
    <TextInput 
    placeholder='email'
     style={styles.input}
     onChangeText={(val)=>{setEmail(val)}}
     keyboardType='email-address'>
    </TextInput>
    </View>


    <View>
    <Text>Email</Text>
    <TextInput 
    placeholder='Email'
     style={styles.input}
     onChangeText={(val)=>{setPassword(val)}}
     secureTextEntry={true}>
    </TextInput>
    </View>

    <Button title='SignUp'
    onPress={handleSignUp}></Button>

    <TouchableOpacity onPress={handleSignUp} style={styles.signUpbtn}>
      <Text style={{color:'white'}}>SignUp</Text>
    </TouchableOpacity>

    {
      skills.map((item)=>{
        return(
          <View key={item.id}>
            <TouchableOpacity onPress={()=>{handleSelecion(item)}}>
            <View style={styles.wrapper}>
              <View style={styles.radiobtn}>
                {
                  selected==item.name?
                  <View style={styles.selectedBtn}></View>
                  :null
                }
              
              </View>
              <Text>{item.name}</Text>
            </View>
            </TouchableOpacity>
            
          </View>
          
        )
        
      }
    )

    } */}

    

{/* 
<Text>FlatList</Text>
<FlatList data={data}
renderItem={({item})=>{
 return(
  <View  style={styles.FlatlistItems}>
    <Text> {item.Roll_num+"  "+ item.Name+ "  "+ item.MArks}</Text>
    </View>
 )
}}
>

</FlatList> */}


{/* <Text>List using Map Func</Text> */}

{/* <ScrollView>
{
data.map((item)=>{
return(
  <View key={item.Roll_num}>
    <Text style={styles.FlatlistItems}>{item.Roll_num} , {item.Name} , {item.MArks}</Text>
    </View>
)
})

}
</ScrollView> */}
{/* <View style={styles.gridView}>
{
  naam.map((item)=>{
    return <View >
     <Text  style={styles.text}>{item}</Text>
      </View>
  })
}
</View> */}


{/* <View>
  <TouchableOpacity style={styles.loaderbtn} onPress={()=>{setShowLoader(true)}}>
    <Text style={{fontSize:20}}>Click to show the loader</Text>
  </TouchableOpacity>
  {
    showLoader?<ActivityIndicator size={50} color={'red'}>
  </ActivityIndicator>:null

  }
  
</View> */}



{/* 
Modal is for showing dailogue box
pressile has some different events than touchable opacity like onPress,onPressIn,onPressOut,onLongPress
  */}
 
 
 </NavigationContainer>


);
}

export default App

const HomeScreen=()=>{
  return(
   <View>
    <Text>Home Screen</Text>
   </View>

  )
}



const LoginSceen=()=>{
  return(
   <View>
    <Text>Login Screen</Text>
   </View>

  )
}
const styles = StyleSheet.create({
  loaderbtn:{
height:100,
width:200,
backgroundColor:'pink',
borderWidth:2,
borderRadius:50,
alignItems:'center',
justifyContent:'center',
  },
  signUpbtn:{
color:'white',
backgroundColor:'blue'
  },
  signUpForm:{
fontSize:15,
color:"pink",
textAlign:"center",
fontWeight:"200"
  },
  input:{
    //height:100,
    borderWidth:5,
    borderColor:"black",
    padding:10,
    fontSize:12,
    margin:10,
  },
  FlatlistItems:{
    fontSize:10,
    backgroundColor:'pink',
    padding:10,
    textAlign:'center',
    margin:5,
    fontWeight:'bold',
  },
  gridView:{
   
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'space-around',
  },
  text:{
   width:100,
   height:100,
   backgroundColor:'yellow',
   padding:10,
   textAlign:'center',
   margin:10
  },
  wrapper:{
    flexDirection:"row",
    
  },
  radiobtn:{
    height:30,
    width:30,
    borderWidth:1,
    borderRadius:15
  },
  selectedBtn:{
   flex:1,
    borderRadius:15,
    margin:5,
    backgroundColor:'red',

  }

});

// const HomeScreen=({navigation})=>{
//   return(
//     <View>
//       <Text>Home screen</Text>
//       <Button title='Login screen' onPress={()=>{
//         navigation.navigate("Login"),{name:"Amna" ,age:'10'}
//       }}>

//       </Button>
//     </View>
//   )

// }

// const LoginScreen=({navigation,route})=>{

//   const data = route.params;
//   return(
// <View>
//   <Text>Login Screen</Text>
//   <Text>{data}</Text>
//   <TouchableOpacity style={styles.loaderbtn} onPress={()=>{
//     navigation.navigate("Home")
//   }}> 
    
//     <Text>HomE Screen</Text>
//   </TouchableOpacity>

//   <TouchableOpacity style={styles.loaderbtn} onPress={()=>{
//     navigation.push("Login")
//   }}>
//     <Text>Login Screen</Text>
//   </TouchableOpacity>
// </View>
//   )
// }
