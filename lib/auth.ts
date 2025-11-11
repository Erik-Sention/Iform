export function checkAuth(username: string, password: string): boolean {
  const validUsername = process.env.AUTH_USERNAME || process.env.NEXT_PUBLIC_AUTH_USERNAME;
  const validPassword = process.env.AUTH_PASSWORD || process.env.NEXT_PUBLIC_AUTH_PASSWORD;
  
  return username === validUsername && password === validPassword;
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem('authenticated') === 'true';
}

export function setAuthenticated(value: boolean): void {
  if (typeof window === 'undefined') return;
  
  if (value) {
    sessionStorage.setItem('authenticated', 'true');
  } else {
    sessionStorage.removeItem('authenticated');
  }
}

