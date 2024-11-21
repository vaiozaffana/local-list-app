import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomeCard = ({ item, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.shortDescription}>{item.shortDescription}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    card: {
      marginBottom: 16,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      overflow: 'hidden',
      elevation: 2,
    },
    image: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
    },
    info: {
      padding: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    shortDescription: {
      fontSize: 14,
      color: '#555',
    },
    category: {
      marginTop: 5,
      color: '#555'
    }
  });
  
  export default HomeCard;