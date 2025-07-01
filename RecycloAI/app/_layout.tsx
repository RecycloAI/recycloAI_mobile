import { Stack } from 'expo-router';
import { AuthProvider } from '../components/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
} 