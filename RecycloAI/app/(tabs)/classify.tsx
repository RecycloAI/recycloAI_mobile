import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Platform } from 'react-native';

export default function ClassifyScreen() {
  const handleGoToSettings = () => {
    if (Platform.OS === 'web') {
      alert('Settings navigation is only available on a real device.');
    } else {
      Linking.openSettings();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png' }}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Enable Camera Access</Text>
        <Text style={styles.description}>
          To classify waste, we need access to your camera. Please enable camera permissions in your device settings.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleGoToSettings}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2e1a',
    justifyContent: 'flex-start',
  },
  illustrationContainer: {
    backgroundColor: '#f7ecd7',
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  illustration: {
    width: 140,
    height: 140,
    marginTop: 32,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 32,
    backgroundColor: '#1a2e1a',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    color: '#bdbdbd',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 28,
  },
  button: {
    backgroundColor: '#6fcf97',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  buttonText: {
    color: '#1a2e1a',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 