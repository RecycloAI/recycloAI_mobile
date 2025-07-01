import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, Linking } from 'react-native';

export default function MapScreen() {
  const handleGetStarted = () => {
    if (Platform.OS === 'web') {
      alert('Location settings can only be opened on a real device.');
    } else {
      Linking.openSettings();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-vector/realistic-earth-planet-illustration_52683-60331.jpg' }}
          style={styles.illustration}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Help the planet effortlessly</Text>
        <Text style={styles.description}>
          Our app makes recycling simple, reducing landfill waste and promoting a greener future. Join us in making a difference, one item at a time.
        </Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>100K+</Text>
            <Text style={styles.statLabel}>Items Classified</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>50K lbs</Text>
            <Text style={styles.statLabel}>Waste Diverted</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { flex: 1 }] }>
            <Text style={styles.statValue}>10K+</Text>
            <Text style={styles.statLabel}>Users Impacted</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
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
    height: 200,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  illustration: {
    width: 120,
    height: 120,
    marginTop: 24,
    resizeMode: 'contain',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: '#1a2e1a',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    color: '#bdbdbd',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 22,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },
  statCard: {
    backgroundColor: '#23331b',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginHorizontal: 6,
    alignItems: 'center',
    flex: 1,
    minWidth: 110,
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statLabel: {
    color: '#bdbdbd',
    fontSize: 13,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6fcf97',
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginTop: 24,
    width: '100%',
    maxWidth: 320,
  },
  buttonText: {
    color: '#1a2e1a',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 