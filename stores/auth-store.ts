import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  tokenExpiresIn: number | null;

  setTokens: (accessToken: string, expiresIn: number) => void;
  removeTokens: () => void;
  getToken: () => string | null;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  accessToken: null,
  tokenExpiresIn: null,

  setTokens: (accessToken: string, expiresIn: number) => {
    set({
      isAuthenticated: true,
      accessToken,
      tokenExpiresIn: expiresIn,
    });
  },

  removeTokens: () => {
    set({
      isAuthenticated: false,
      accessToken: null,
      tokenExpiresIn: null,
    });
  },

  getToken: () => get().accessToken,
}));
