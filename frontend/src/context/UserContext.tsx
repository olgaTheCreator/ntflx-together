import { createContext, useContext } from 'react';

export interface UserContent {
  username: string;
  uuid_public: string;
  uuid_private: string;
}

export const UserContext = createContext<UserContent>({ username: '', uuid_private: '', uuid_public: '' });

export const useUserContext = () => useContext(UserContext);
