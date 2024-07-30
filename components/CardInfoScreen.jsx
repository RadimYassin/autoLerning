import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

const CardInfoScreen = () => {
const router=useRouter()
  const[cards, setCards]  = useState([
    { id: 1, number: 'image', holder:'John Doe', expiration:'12/24',  },
    { id: 2, number: 'image', holder:'John Doe', expiration:'12/24', },
    { id: 3, number: 'Apple Pay', holder:'John Doe', expiration:'',  },
  ]);

  return (
   
      <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card) => (
         
          <Pressable  key={card.id} onPress={()=>router.push("/login")}  style={styles.cardContainer}>
            {/* <Image source={{ uri: card.logo }} style={styles.logo} /> */}
            <Text style={styles.cardNumber}>{card.number}</Text>
            <View style={styles.cardInfoContainer}>
              <View style={styles.cardInfoItem}>
                <Text style={styles.cardInfoLabel}>title</Text>
                <Text style={styles.cardInfoValue}>{card.holder}</Text>
              </View>
              <View style={styles.cardInfoItem}>
                <Text style={styles.cardInfoLabel}>Expiration</Text>
                <Text style={styles.cardInfoValue}>{card.expiration}</Text>
              </View>
            </View>
          </Pressable>
       
         
        ))}
      </ScrollView>
     
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#00008B',
  },
  cardContainer: {
    marginHorizontal:10,
    width: 300,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    
    
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 4,
    marginBottom: 10,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoItem: {
    flex: 1,
  },
  cardInfoLabel: {
    fontSize: 12,
    color: 'gray',
  },
  cardInfoValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 30,
  },
  paymentButton: {
    backgroundColor: '#00008B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CardInfoScreen;
