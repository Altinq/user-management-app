import { create } from "zustand";
import type { User } from "../types/User";
import { getUsers } from "../services/useService";

interface UserStore {
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
  addUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  loading: true,
  fetchUsers: async () => {
    try {
      const data = await getUsers();
      set({ users: data, loading: false });
    } catch (err) {
      console.error("Error fetching users:", err);
      set({ loading: false });
    }
  },
  addUser: (user: User) =>
    set((state) => ({
      users: [...state.users, user],
    })),
}));
