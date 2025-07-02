import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function MapScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find the nearest{"\n"}recycling bin</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' }}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2e1a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 12,
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginBottom: 32,
  },
  mapImage: {
    width: 180,
    height: 120,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#4cd137',
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 