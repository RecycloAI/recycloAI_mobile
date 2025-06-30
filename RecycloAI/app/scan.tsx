import { View, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { supabase } from '@/lib/supabase';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const handleScan = async () => {
    // Add TFLite classification + Supabase upload logic here
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }}>
        <Button title="Scan Waste" onPress={handleScan} />
      </CameraView>
    </View>
  );
}