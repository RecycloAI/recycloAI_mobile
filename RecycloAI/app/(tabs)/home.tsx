import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../components/AuthContext';

const recentScans = [
  {
    type: 'Recyclable',
    icon: <MaterialCommunityIcons name="recycle" size={24} color="#6fcf97" />, 
    item: 'Plastic Bottle',
  },
  {
    type: 'Compostable',
    icon: <MaterialCommunityIcons name="leaf" size={24} color="#6fcf97" />, 
    item: 'Banana Peel',
  },
  {
    type: 'Recyclable',
    icon: <MaterialCommunityIcons name="recycle" size={24} color="#6fcf97" />, 
    item: 'Glass Jar',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { signedIn } = useAuth();

  const handleScan = () => {
    if (!signedIn) {
      router.push('/profile');
    } else {
      router.push('/classify');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>WasteWise</Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
        <Text style={styles.scanButtonText}>Tap to Scan Waste</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Recent Scans</Text>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 24}}>
        {recentScans.map((scan, idx) => (
          <View key={idx} style={styles.scanRow}>
            <View style={styles.iconBox}>{scan.icon}</View>
            <View style={{flex: 1}}>
              <Text style={styles.scanType}>{scan.type}</Text>
              <Text style={styles.scanItem}>{scan.item}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2e1a',
    paddingHorizontal: 18,
    paddingTop: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    justifyContent: 'flex-start',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scanButton: {
    backgroundColor: '#6fcf97',
    borderRadius: 22,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  scanButtonText: {
    color: '#1a2e1a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23331b',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#1a2e1a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  scanType: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  scanItem: {
    color: '#bdbdbd',
    fontSize: 14,
  },
}); 