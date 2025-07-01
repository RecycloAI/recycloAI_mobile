import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../components/AuthContext';

export default function SettingsScreen() {
  const { signedIn } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  if (!signedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Please sign up or sign in to access settings.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.sectionHeader}>Preferences</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="notifications-outline" size={22} color="#6fcf97" />
            </View>
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowTitle}>Notifications</Text>
              <Text style={styles.rowSubtitle}>Enable or disable push notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#767577', true: '#6fcf97' }}
              thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="location-outline" size={22} color="#6fcf97" />
            </View>
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowTitle}>Location Permissions</Text>
              <Text style={styles.rowSubtitle}>Manage location permissions for accurate waste classification</Text>
            </View>
            <Switch
              value={locationEnabled}
              onValueChange={setLocationEnabled}
              trackColor={{ false: '#767577', true: '#6fcf97' }}
              thumbColor={locationEnabled ? '#fff' : '#f4f3f4'}
            />
          </View>
          <TouchableOpacity style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="play-outline" size={22} color="#6fcf97" />
            </View>
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowTitle}>Replay Tutorial</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>About</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="information-circle-outline" size={22} color="#6fcf97" />
            </View>
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowTitle}>App Version</Text>
              <Text style={styles.rowSubtitle}>Version 1.2.3</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#bdbdbd" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="shield-checkmark-outline" size={22} color="#6fcf97" />
            </View>
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowTitle}>Privacy Policy</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#bdbdbd" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2e1a',
  },
  emptyText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 60,
  },
  sectionHeader: {
    color: '#bdbdbd',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 24,
    marginTop: 18,
    marginBottom: 6,
  },
  card: {
    backgroundColor: '#23331b',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingVertical: 2,
    paddingHorizontal: 2,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2e4630',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1a2e1a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  rowTextContainer: {
    flex: 1,
  },
  rowTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowSubtitle: {
    color: '#bdbdbd',
    fontSize: 13,
  },
}); 