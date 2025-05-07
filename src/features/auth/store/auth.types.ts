export type TAuthState = {
  isAuthenticated: boolean;
  token: string | null;
  profile: TProfile | null;
  loading: boolean;
};

export type TProfile = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  token: string;
};

export type TLoginError = {
  error: string;
};

export type TRegisterRequest = {
  email: string;
  password: string;
};

export type TRegisterResponse = {
  id: string;
  token: string;
};
