import http from '../utils/http';

export const signIn = async (email: string, password: string): Promise<string> => {
  return http.post('/auth/signin', {email, password});
};

export const signOut = async (): Promise<void> => {
  return http.post('/auth/logout', {});
};
