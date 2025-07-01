# recycloAI_mobile

# RecycloAI - Waste Classification App 🚮♻️

## Overview
RecycloAI is a mobile application that uses computer vision to classify waste materials and provide recycling guidance. Built with React Native (Expo), Supabase, and TensorFlow Lite for on-device machine learning.

## Features
- 📸 Scan waste items using your phone's camera
- 🤖 AI-powered waste classification
- 📊 Track your recycling history
- 🌱 Learn proper disposal methods
- 🔐 User authentication


## The Team

| Name            |  Role                                    
|-----------------|--------------------------------|
| Josiah Ndirangu | Project Lead & AI/ML Engineer|  
| Daniel Wekesa   | Frontend Developer           |                 
| Geofrey Gitau   | Backend Developer            | 
| Simon Waiganjo  | Full_Stack Engineer          | 



## Prerequisites
- Node.js (v16+)
- Expo CLI (`npm install -g expo-cli`)
- Supabase account
- Python environment (for model training)

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/recycloai.git
cd recycloai
```

### 2. Install dependencies
```bash
npm install
npx expo install dotenv @supabase/supabase-js expo-camera react-native-fast-tflite
```

### 3. Set up environment variables
Create a `.env` file in the root directory:
```env
EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Configure Supabase
1. Create a new project at [supabase.com](https://supabase.com)
2. Set up the database table:
```sql
CREATE TABLE scans (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  waste_type TEXT,
  confidence FLOAT,
  image_path TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 5. Add your TFLite model
Place your trained `model.tflite` file in:
```
assets/model.tflite
```

## Running the App

### Development
```bash
npx expo start
```

### Production Build
```bash
npx expo prebuild
npx eas build -p android
npx eas build -p ios
```

## Project Structure
```
recycloai/
├── app/                # Expo Router files
│   ├── (tabs)/         # Tab navigation
│   ├── scan.tsx        # Waste scanner screen
│   └── ...
├── assets/             # Static files
│   └── model.tflite    # AI model
├── components/         # UI components
├── lib/                # Utilities
│   └── supabase.ts     # Supabase client
├── .env                # Environment variables
└── ...
```

## Customizing the AI Model
1. Train your model using TensorFlow
2. Convert to TFLite:
```python
converter = tf.lite.TFLiteConverter.from_saved_model("your_model")
tflite_model = converter.convert()
with open("model.tflite", "wb") as f:
    f.write(tflite_model)
```
3. Replace the model in `assets/`

## Troubleshooting
- **Environment variables not working**: 
  - Restart Expo server with `npx expo start -c`
  - Ensure variables are prefixed with `EXPO_PUBLIC_`
  
- **Camera permissions**: 
  - Add permissions to `app.json`:
  ```json
  "android": {
    "permissions": ["CAMERA"]
  }
  ```

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

## License
MIT
