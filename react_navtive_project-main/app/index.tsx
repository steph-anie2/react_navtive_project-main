import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface product {
  id:string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  
}
const index = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [count, setCount] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error));
    
}, []);


const [loaded] = useFonts({
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      Pb: require('../assets/fonts/Poppins-Bold.ttf'),
      Pl: require('../assets/fonts/Poppins-Regular.ttf'),
      Pm: require('../assets/fonts/Poppins-Medium.ttf'),
      Psb: require('../assets/fonts/Poppins-SemiBold.ttf'),
      Pt: require('../assets/fonts/Poppins-Thin.ttf'),
      
    });
  
    if (!loaded) {
      // Async font loading only occurs in development.
      return null;
    }

  const chats =[
    {
      profileImage:"https://randomuser.me/api/portraits/men/1.jpg",
      message:"Hello, how are you?",
      name:"John Doe",
      time:"10:00",
      unread:1
    }, {
      profileImage:"https://randomuser.me/api/portraits/men/2.jpg", 
      message:"Hey, are you coming to the party?",
      name:"Jane Smith",
      time:"10:05",
      unread:2
    },
    {
      profileImage:"https://randomuser.me/api/portraits/women/3.jpg",
      message:"Hi, do you want to grab lunch?",
      name:"Emily Johnson",
      time:"10:10",
      unread:0
    }, {
      profileImage:"https://randomuser.me/api/portraits/men/4.jpg",
      message:"Hello, how are you?",
      name:"Michael Brown",
      time:"10:15",
      unread:1
    }, {
      profileImage:"https://randomuser.me/api/portraits/women/5.jpg",
      message:"Hey, are you coming to the party?",
      name:"Sophia Davis",
      time:"10:20",
      unread:0
    }, {
      profileImage:"https://randomuser.me/api/portraits/men/6.jpg",
      message:"Hi, do you want to grab lunch?",
      name:"David Wilson",
      time:"10:25",
      unread:0
    },
     {
      profileImage:"https://randomuser.me/api/portraits/men/6.jpg",
      message:"Hi, do you want to grab lunch?",
      name:"David Wilson",
      time:"10:25",
      unread:0
    },
     {
      profileImage:"https://randomuser.me/api/portraits/men/6.jpg",
      message:"Hi, do you want to grab lunch?",
      name:"David Wilson",
      time:"10:25",
      unread:0
    },
     {
      profileImage:"https://randomuser.me/api/portraits/men/6.jpg",
      message:"Hi, do you want to grab lunch?",
      name:"David Wilson",
      time:"10:25",
      unread:0
    },
     {
      profileImage:"https://randomuser.me/api/portraits/men/6.jpg",
      message:"Hi, do you want to grab lunch?",
      name:"David Wilson",
      time:"10:25",
      unread:0
    },

  ]
 
  





   return (
 
    <SafeAreaView style={{flex: 1}}>
    
      <View style={styles.container1}>
        <View style={styles.container11}>
          <Image source={{uri: 'https://img.icons8.com/?size=100&id=102729&format=png&color=000000'}} style={styles.image} />
        </View>
        <View style={styles.container12}>
          <Image source={{uri: 'https://img.icons8.com/?size=100&id=11741&format=png&color=000000'}} style={styles.imageC} />
          <Image source={{uri: 'https://img.icons8.com/?size=100&id=1501&format=png&color=000000'}} style={styles.imagep} />
        </View>

      </View>

      <View style={styles.container2}>
        <ScrollView style={styles.scrollView2} showsVerticalScrollIndicator={false}>
        
        <View style={styles.container2221}>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            Chats
          </Text>
          <View style={styles.input2}>
          <Image source={{uri: 'https://img.icons8.com/?size=100&id=132&format=png&color=000000'}} style={styles.images} />
            <TextInput
            style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}
            placeholder="Search"
            placeholderTextColor="black"
          />
          </View>
          <View style={styles.container2222}>
            <Image source={{uri: 'https://img.icons8.com/?size=100&id=mZKl5rusSvLa&format=png&color=000000'}}
             style={styles.imageCA} />
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Archived</Text>
          </View>
          

        </View>
         {chats.map(function(chat, index){
          return(
            <TouchableOpacity key={index} style={styles.container21}
             onPress={
              () => router.push(
                {
                  pathname: './chats',
                  params: { 
                    name: chat.name,
                   profileImage: chat.profileImage,
                   message: chat.message,
                   time: chat.time,
                   
                   },
                  
                }
              )}>
              <View style={styles.container211}>
                <Image source={{ uri: chat.profileImage }} style={styles.imagepi} />
              </View>
              <View style={styles.container212}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{chat.name}</Text>
                <Text style={{ color: 'gray', fontSize: 14 }}>{chat.message}</Text>
              </View>
              <View style={styles.container213}>
                <View style={styles.container2131}>
                  <Text style={{ color: 'gray', fontSize: 12 }}>{chat.time}</Text>
                </View>
                <View style={styles.container2132}>
                  {chat.unread > 0 && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                      <Image source={{ uri: 'https://img.icons8.com/?size=100&id=37973&format=png&color=000000' }} style={styles.imageCA} />
                      <Text style={{ color: 'green', fontSize: 12 }}>{chat.unread}</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ) 
        })}

         {/* <ImageBackground source={{ 
          uri: "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg" }}
          style={{height:500, justifyContent:"center", alignItems:"center"}}>
  <Text style={{color:"red", fontSize:45}}>Inside</Text>
</ImageBackground> */}
        {/* <TouchableOpacity onPress={()=>{
          setModalVisible(!modalVisible)
        }}>
          <Text>open modal</Text>
        </TouchableOpacity>
         <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View>
            <TouchableOpacity onPress={()=>{
          setModalVisible(!modalVisible)
        }}>
          <Text>close modal</Text>
        </TouchableOpacity>
            <Text style={{fontSize:24}}>hello i am your modal</Text>
          </View>
        
          
        </Modal> */}
           {/* <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView> */}

        
         {/* <FlatList
        data={products}
        renderItem={({item: product }) =>
          <View>
            <Text>{product.id}</Text>
            <Text>{product.category}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>

          </View> 
          
        }
        keyExtractor={item => item.id }
      />  */}
      {/* {students.map(function(student, index){
        return(
          <Text key={index}>hi, {student}</Text>
        )
      })}
      <FlatList
        data={students}
        renderItem={({ item: student }) => (
          <Text>hello, {student}</Text>
        )}
        keyExtractor={student => student}
      /> */}
            
           {/* {products.map(function(product: product){
        return(
          // Displaying product information as professional display
          <TouchableOpacity key={product.id} style={styles.container21} onPress={()=>{
            router.push({
              pathname: './poductDetails',
              params: {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
          category: product.category,
              },
            })
          }}>
            <View style={styles.container211}>    
              <Image source={{ uri: product.image }} style={styles.imagepi} />
            </View>
            <View style={styles.container212}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{product.title}</Text>
              <Text style={{ color: 'gray', fontSize: 14 }}>{product.description}</Text>
            </View>
            <View style={styles.container213}>
              <View style={styles.container2131}>
          <Text style={{ color: 'gray', fontSize: 12 }}>${product.price}</Text>
              </View>
              <View style={styles.container2132}>
          <Image source={{ uri: 'https://img.icons8.com/?size=100&id=37973&format=png&color=000000' }} style={styles.imageCA} />
              </View>
            </View>
          </TouchableOpacity>
        )
             })}  */}

             </ScrollView>
      </View>
      <View style={styles.container3}>
      <View style={styles.container31}>
        <Image source={{uri: 'https://img.icons8.com/?size=100&id=42245&format=png&color=000000'}} style={styles.imageC} /> 
        <Text>
          Updates
        </Text>
      </View>
      <View style={styles.container32}>
        <Image source={{uri: 'https://img.icons8.com/?size=100&id=-F4IaK699KDa&format=png&color=000000'}} style={styles.imageC} /> 
        <Text>
          Calls
        </Text>
      </View>
      <View style={styles.container33} >
        <Image source={{uri: 'https://img.icons8.com/?size=100&id=489&format=png&color=000000'}} style={styles.imageC} /> 
        <Text>
          Tools
        </Text>
      </View>
      <View style={styles.container34}>
        <Image source={{uri: 'https://img.icons8.com/?size=100&id=uUhNNuMdfOjI&format=png&color=000000'}} style={styles.imageC} /> 
        <Text>
          Chats
        </Text>
      </View>
      <View style={styles.container35}>
        <Image source={{uri: 'https://img.icons8.com/?size=100&id=53375&format=png&color=000000'}} style={styles.imageC} /> 
        <Text>
          Settings
        </Text>
      </View>
      </View>

    



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  
  container1:{
    flex:0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
  paddingHorizontal: 10,

  },
  container2:{
    flex:0.8,
    gap: 10,
    paddingHorizontal: 10,
    
  },
  container3:{
    flex:0.1,
    flexDirection: 'row',
    
  },
  container31:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container32:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container33:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container34:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container35:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container11:{
    flex:1,
    justifyContent: 'center',
    alignItems:"flex-start",
    

  },
  container12:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap:10,
    
    
  },
  image:{
    width: 40,
    height: 40,
  },
  imageC:{
    width: 20,
    height: 20,
  },
  imagep:{
    width: 40,
    height: 40,
  },
  container21:{
    flex: 0.14,
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
    
  },
  container211:{
    flex: 1,
    
  },
  container212:{
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  container213:{
    flex: 0.7,
    
  },
  imagepi:{
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  container2131:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  container2132:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView2: {
    
    gap: 30,
  },
  container2221:{
    height: 130,
    
  },
  images:{
    width: 30,
    height: 30,
   
  },
  input2:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  container2222:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 7,
    paddingLeft: 15,
   
  },
  imageCA:{
    width: 20,
    height: 20,
  },

});

export default index;