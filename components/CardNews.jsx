import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { images } from '../constants';

const CardNews = () => {
  return (
    <View style={styles.container}>
      {/* Card with Background Image */}
      <ImageBackground 
        source={images.bgcard} // Replace with your image path
        style={styles.card}
        imageStyle={styles.backgroundImage}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Welcome To Geeksforgeeks!!
          </Text>
        </View>
        
        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.text}>
            A Computer Science portal for geeks. 
            It contains well written, well thought 
            and well explained computer science 
            and programming articles
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 350,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  backgroundImage: {
    borderRadius: 15,
    opacity: 0.8, // Adjust the opacity as needed
  },
  header: {
    alignItems: 'flex-start',
    padding: 9,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    alignItems: 'flex-start',
    padding: 9,
  },
  text: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'justify',
  },
});

export default CardNews;
