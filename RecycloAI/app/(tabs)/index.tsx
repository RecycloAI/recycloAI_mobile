import { Image } from 'expo-image';
import { Platform, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router'; // Import Link from Expo Router

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to RecycloAI!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Step 1: Scan Waste Button */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Scan Waste</ThemedText>
        <ThemedText>
          Tap the button below to scan and classify waste materials.
        </ThemedText>
        <Link href="/scan" asChild>
          <Pressable style={styles.scanButton}>
            <ThemedText type="defaultSemiBold" style={styles.scanButtonText}>
              Scan Now
            </ThemedText>
          </Pressable>
        </Link>
      </ThemedView>

      {/* Existing Steps 2 and 3 (renumbered) */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Check your scan history in the Explore tab.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Learn</ThemedText>
        <ThemedText>
          Discover recycling tips and guidelines.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16, // Increased spacing
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  scanButton: {
    marginTop: 12,
    backgroundColor: '#4CAF50', // Green color for action
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  scanButtonText: {
    color: 'white',
  },
});