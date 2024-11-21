import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: string;
    title: string;
    description: string;
    image: any;
  };
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { title, description, image } = route.params;

  return ( 
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Image source={require('../assets/images/back.png')} />
      </TouchableOpacity>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default DetailScreen;
