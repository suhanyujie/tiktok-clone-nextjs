"use client";

import type React from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { account, ID } from "@/libs/AppWriteClient";
import { useRouter } from "next/navigation";
import type { User, UserContextTypes } from "../types";
import useGetProfileByUserId from "../hooks/useGetProfileByUserId";
import useCreateProfile from "../hooks/useCreateProfile";

const UserContext = createContext<UserContextTypes | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const checkUser = async () => {
    try {
      const currentSession = await account.getSession("current");
      if (!currentSession) {
        return;
      }
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const promise = (await account.get()) as any;
      const profile = await useGetProfileByUserId(promise?.$id);

      setUser({
        id: promise?.$id,
        name: promise?.name,
        bio: profile?.bio,
        image: profile?.image,
      });
    } catch (error) {
      setUser(null);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    checkUser();
  }, []);

  const register = async (name: string, email: string, password: string) => {
    try {
      const promise = await account.create(ID.unique(), email, password, name);
      await account.createEmailPasswordSession(email, password);

      await useCreateProfile(
        promise?.$id,
        name,
        String(process.env.NEXT_PUBLIC_PLACEHOLDER_DEAFULT_IMAGE_ID),
        ""
      );
      await checkUser();
    } catch (error) {
      // biome-ignore lint/complexity/noUselessCatch: <explanation>
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      await checkUser();
    } catch (error) {
      // biome-ignore lint/complexity/noUselessCatch: <explanation>
      throw error;
    }
  };
  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      router.refresh();
    } catch (error) {
      // biome-ignore lint/complexity/noUselessCatch: <explanation>
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout, checkUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
