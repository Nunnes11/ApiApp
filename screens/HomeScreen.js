import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonPosts}>
        <Button
          title="Postagens"
          onPress={() => navigation.navigate('Posts')}
        />
      </View>

      <View style={styles.buttonCommnents}>
      <Button
        title="Comentários"
        onPress={() => navigation.navigate('Comments')}
      />
      </View>

      <View style={styles.buttonAlbums}>
      <Button
        title="Albums"
        onPress={() => navigation.navigate('Albums')}
      />
      </View>

      <View style={styles.buttonFotos}>
      <Button
        title="Fotos"
        onPress={() => navigation.navigate('Photos')}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#B0C4DE',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonPosts: {
    marginBottom: 20,
  },

  buttonCommnents: {
    marginBottom: 20
  },

  buttonAlbums: {
    marginBottom: 20
  },

  buttonFotos: {
    marginBottom: 20
  }
});
