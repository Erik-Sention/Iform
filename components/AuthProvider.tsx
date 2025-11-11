'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated, setAuthenticated as setAuthStorage } from '@/lib/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = isAuthenticated();
    setIsAuth(checkAuth);
    setIsLoading(false);

    if (!checkAuth && pathname !== '/login') {
      router.push('/login');
    }
  }, [pathname, router]);

  const login = () => {
    setIsAuth(true);
    setAuthStorage(true);
    router.push('/');
  };

  const logout = () => {
    setIsAuth(false);
    setAuthStorage(false);
    router.push('/login');
  };

  // Visa ingenting medan vi laddar
  if (isLoading) {
    return null;
  }

  // Om användaren inte är inloggad och inte är på login-sidan, visa ingenting
  // (redirecten kommer att hända från useEffect)
  if (!isAuth && pathname !== '/login') {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

