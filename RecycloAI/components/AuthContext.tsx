import React, { createContext, useContext, useState } from 'react';

const defaultProfile = {
  name: '',
  email: '',
  avatar: '',
};

const AuthContext = createContext({
  signedIn: false,
  profile: defaultProfile,
  signIn: (email: string, password: string) => {},
  signUp: (name: string, email: string, password: string) => {},
  signOut: () => {},
  setProfile: (profile: typeof defaultProfile) => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);
  const [profile, setProfile] = useState(defaultProfile);

  const signIn = (email: string, password: string) => {
    setProfile({ ...profile, email });
    setSignedIn(true);
  };
  const signUp = (name: string, email: string, password: string) => {
    setProfile({ name, email, avatar: '' });
    setSignedIn(true);
  };
  const signOut = () => {
    setProfile(defaultProfile);
    setSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ signedIn, profile, signIn, signUp, signOut, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 