import { create } from "zustand";
import type { User } from "../types/User";
import { getUsers } from "../services/useService";

interface UserStore {
  users: User[];
  loading: boolean;
  fetchUsers: () => void;
  addUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  loading: false,
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const data = await getUsers();
      set({ users: data });
    } catch (err) {
      console.error(err);
    } finally {
      set({ loading: false });
    }
  },
  addUser: (user: User) => set({ users: [user, ...get().users] }),
}));
