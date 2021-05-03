import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, ScrollView,Text, View, Image,Linking } from 'react-native';
import { Card } from 'react-native-elements'
import React from 'react';

export default function App() {

 

  return (


    <SafeAreaView >
      <ScrollView        stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      
   
    <View>
      <View style={{   height: 100,


    backgroundColor: '#188CA5',}}>

        <Text style={styles.font}>Ali's Styles </Text>
        </View>
       
        </View>
  <ScrollView >
      <Card style={{backgroundColor:'#FFC107' ,}}>
        <View style={{height:40, backgroundColor:'#FFC107'}}>
  <Card.Title  > <Text  style={{  fontSize: 25,color:'#FFFFFF'}}>Style #1</Text></Card.Title>
  </View>
  <Card.Divider/>
  
        <View >
        <Image
          style={{    marginTop: 15,
          
          
            color: '#0077CC',
            height: 300,
            width: 300,}}
          source={require('./assets/ad.png')}
        />  
        
         
        </View>
</Card>




<Card style={{backgroundColor:'#00BFFF'}}>
        <View style={{height:40, backgroundColor:'#65041E'}}>
  <Card.Title  > <Text  style={{  fontSize: 25,color:'#FFFFFF'}}>Style #2</Text></Card.Title>
  </View>
  <Card.Divider/>
  
        <View >
        <Image
          style={{    marginTop: 15,
          
          
            color: '#0077CC',
            height: 300,
            width: 300,}}
          source={require('./assets/chr.jpg')}
        />  
        
         
        </View>
</Card>




<Card style={{backgroundColor:'65041E',}}>
        <View style={{height:40, backgroundColor:'#3B3732',}}>
  <Card.Title  > <Text  style={{  fontSize: 25 ,color:'#FFFFFF'}}>Style #3</Text></Card.Title>
  </View>
  <Card.Divider/>
  
        <View >
        <Image
          style={{    marginTop: 15,
          
          
            color: '#0077CC',
            height: 300,
            width: 300,}}
          source={require('./assets/pa1.jpg')}
        />  
        
         
        </View>
</Card>


<Card style={{backgroundColor:'#00CDBD',}}>
        <View style={{height:40, backgroundColor:'#00CDBD',}}>
  <Card.Title  > <Text  style={{  fontSize: 25 ,color:'#FFFFFF'}}>Style #4</Text></Card.Title>
  </View>
  <Card.Divider/>
  
        <View >
        <Image
          style={{    marginTop: 15,
          
          
            color: '#0077CC',
            height: 300,
            width: 300,}}
          source={require('./assets/pic.jpg')}
        />  
        
         
        </View>
</Card>

<Card style={{backgroundColor:'#00CDBD',}}>
        <View style={{height:40, backgroundColor:'#A97848',}}>
  <Card.Title  > <Text  style={{  fontSize: 25 ,color:'#FFFFFF'}}>Style #5</Text></Card.Title>
  </View>
  <Card.Divider/>
  
        <View >
        <Image
          style={{    marginTop: 15,
          
          
            color: '#0077CC',
            height: 300,
            width: 300,}}
          source={require('./assets/pa.jpg')}
        />  
        
         
        </View>
</Card>
<Card style={{backgroundColor:'#00CDBD',}}>
        <View style={{height:40, backgroundColor:'#00BFFF',}}>
  <Card.Title  > <Text  style={{  fontSize: 25 ,color:'#FFFFFF'}}>Style #6</Text></Card.Title>
  </View>
  <Card.Divider/>
  
        <View >
        <Image
          style={{    marginTop: 15,
          
          
            color: '#0077CC',
            height: 300,
            width: 300,}}
          source={require('./assets/pa3.jpg')}
        />  
        
         
        </View>
</Card>
<Card style={{backgroundColor:'#00CDBD',}}>
        <View style={{height:40, backgroundColor:'#FF6501',}}>
  <Card.Title  > <Text  style={{  fontSize: 25 ,color:'#FFFFFF'}}>Style #7</Text></Card.Title>
  </View>
  <Card.Divider/>
  
        <View >
        <Image
          style={{    marginTop: 15,
          
          
            color: '#0077CC',
            height: 300,
            width: 300,}}
          source={require('./assets/pa5.jpg')}
        />  
        
         
        </View>
</Card>
<Card style={{backgroundColor:'#188CA5',}}>
        <View style={{height:40, backgroundColor:'#188CA5',}}>
  <Card.Title  > <Text  style={{  fontSize: 25 ,color:'#FFFFFF'}}>Style #8</Text></Card.Title>
  </View>
  <Card.Divider/>
  
        <View >
        <Image
          style={{    marginTop: 15,
          
          
            color: '#0077CC',
            height: 300,
            width: 300,}}
          source={require('./assets/tind.png')}
        />  
        
         
        </View>
</Card>



<Text style={{ textAlign:'center',marginTop:20, fontSize:16, backgroundColor:'#FF6501'}} 
onPress={() => Linking.openURL('http://ali_project2.surge.sh')}
>Made By @Ali Butt </Text>


    </ScrollView>



    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
 
  img: {

marginLeft:45,
    height: 200,
    width: 200,
  }
  ,
  font: {
    marginTop: 45,
    marginLeft: 10,
    fontSize: 30,
    color: '#FFFFFF',
  },
});
