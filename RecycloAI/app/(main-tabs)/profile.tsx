import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../components/AuthContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { signedIn, profile, signIn, signUp, setProfile } = useAuth();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  const handleSignUp = () => {
    signUp(form.name, form.email, form.password);
    setShowSignUp(false);
    setForm({ email: '', password: '', name: '' });
  };
  const handleSignIn = () => {
    signIn(form.email, form.password);
    setShowSignIn(false);
    setForm({ email: '', password: '', name: '' });
  };

  if (!signedIn) {
    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.gearBtn} onPress={() => router.push('/settings')}>
            <Ionicons name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        {showSignUp ? (
          <View style={styles.formBox}>
            <Text style={styles.formTitle}>Sign Up</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#bdbdbd"
              value={form.name}
              onChangeText={name => setForm(f => ({ ...f, name }))}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#bdbdbd"
              value={form.email}
              onChangeText={email => setForm(f => ({ ...f, email }))}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#bdbdbd"
              value={form.password}
              onChangeText={password => setForm(f => ({ ...f, password }))}
              secureTextEntry
            />
            <TouchableOpacity style={styles.actionBtn} onPress={handleSignUp}>
              <Text style={styles.actionBtnText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setShowSignUp(false); setShowSignIn(true); }}>
              <Text style={styles.switchText}>Already have an account? Sign In</Text>
            </TouchableOpacity>
          </View>
        ) : showSignIn ? (
          <View style={styles.formBox}>
            <Text style={styles.formTitle}>Sign In</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#bdbdbd"
              value={form.email}
              onChangeText={email => setForm(f => ({ ...f, email }))}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#bdbdbd"
              value={form.password}
              onChangeText={password => setForm(f => ({ ...f, password }))}
              secureTextEntry
            />
            <TouchableOpacity style={styles.actionBtn} onPress={handleSignIn}>
              <Text style={styles.actionBtnText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setShowSignIn(false); setShowSignUp(true); }}>
              <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.formBox}>
            <TouchableOpacity style={styles.actionBtn} onPress={() => setShowSignUp(true)}>
              <Text style={styles.actionBtnText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn} onPress={() => setShowSignIn(true)}>
              <Text style={styles.actionBtnText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.gearBtn} onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        {profile.avatar ? (
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder} />
        )}
        {editMode ? (
          <TextInput
            style={styles.profileNameEdit}
            value={profile.name}
            onChangeText={name => setProfile({ ...profile, name })}
          />
        ) : (
          <Text style={styles.profileName}>{profile.name}</Text>
        )}
        {editMode ? (
          <TextInput
            style={styles.profileEmailEdit}
            value={profile.email}
            onChangeText={email => setProfile({ ...profile, email })}
            autoCapitalize="none"
          />
        ) : (
          <Text style={styles.profileEmail}>{profile.email}</Text>
        )}
        <TouchableOpacity style={styles.editBtn} onPress={() => setEditMode(e => !e)}>
          <Text style={styles.editBtnText}>{editMode ? 'Save' : 'Edit Profile'}</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  gearBtn: {
    padding: 8,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
    backgroundColor: '#23331b',
  },
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  profileEmail: {
    color: '#bdbdbd',
    fontSize: 14,
    marginBottom: 8,
  },
  profileNameEdit: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#6fcf97',
    width: 180,
    textAlign: 'center',
  },
  profileEmailEdit: {
    color: '#bdbdbd',
    fontSize: 14,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#6fcf97',
    width: 180,
    textAlign: 'center',
  },
  editBtn: {
    backgroundColor: '#6fcf97',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  editBtnText: {
    color: '#1a2e1a',
    fontWeight: 'bold',
    fontSize: 15,
  },
  formBox: {
    backgroundColor: '#23331b',
    borderRadius: 16,
    padding: 24,
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
  },
  formTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  input: {
    backgroundColor: '#1a2e1a',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#6fcf97',
    borderRadius: 8,
    padding: 10,
    marginBottom: 14,
    width: 220,
    fontSize: 15,
  },
  actionBtn: {
    backgroundColor: '#6fcf97',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 10,
    width: 180,
  },
  actionBtnText: {
    color: '#1a2e1a',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  switchText: {
    color: '#bdbdbd',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
}); 