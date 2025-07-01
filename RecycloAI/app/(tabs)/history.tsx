import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Simulate no scans for now
const scans: any[] = [];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      {scans.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialCommunityIcons name="history" size={60} color="#6fcf97" style={{ marginBottom: 18 }} />
          <Text style={styles.emptyText}>No scans yet</Text>
          <Text style={styles.emptySubtext}>Your scan history will appear here.</Text>
        </View>
      ) : (
        // In the future, map over scans and display them here
        <Text style={styles.text}>Scans will appear here.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2e1a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyContainer: {
    alignItems: 'center',
  },
  emptyText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  emptySubtext: {
    color: '#bdbdbd',
    fontSize: 15,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
}); 