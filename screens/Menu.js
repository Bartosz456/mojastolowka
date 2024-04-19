import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';



 const Menu = ({navigation}) => {
  return (
    

    <View style={styles.container}>
      
      <View style={styles.menu}>
        <TouchableOpacity>
        <Image source={{uri:'https://imgur.com/KhKOqCz'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.logo} source={{uri:'https://imgur.com/wMlbD8A'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri:'https://imgur.com/gRbzg0B'}}/>
        </TouchableOpacity>
        
      </View>
      <View>
        <Text style={styles.text}>Cześć, </Text>
        <Image style={styles.QrCode}  source={{uri: 
       'https://imgur.com/a/I68T8Wi'}}
        />
        <Text style={styles.textObiady}>Obiady w tym miesiącu:{"\n"}</Text>
        <Text style={styles.textDzisNaObiad}>Dzisiaj na obiad:{"\n"}makaron z serem</Text>
      </View>
    </View>
  );
}

 //po czesc wpisz {imie} i {nazwisko}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:0,
  },
  menu: {
    marginTop:50,
    width: '100%',
    height:'5%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    paddingLeft:5,
    paddingRight:10,
    
  },
  logo:{
    marginRight:16,
  },
  text:{
    fontSize:32,
    width:'100%',
    height:40,
    paddingLeft:19,
    marginTop:100,
  },
  QrCode:{
    alignSelf:'center',
    marginTop:50,
  },
  textObiady:{
    fontSize:20,
    alignSelf:'center',
  },
  textDzisNaObiad:{
    fontSize:40,
    alignSelf:'center',
  }
  
});
export {Menu};