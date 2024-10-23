import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function PhotosScreen() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => setPhotos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />
            <Text>{item.title}</Text>
          </View>
        )}
      />

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#B0C4DE',
    padding: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#add8e6',
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
});
