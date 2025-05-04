export interface AuthState {
  isAuthenticated: boolean;
  tokenEncrypted: string | null;
  user: { email: string } | null;
  loading: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface LoginError {
  error: string;
}

export interface User {
  email: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  token: string;
}
