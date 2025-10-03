import axios from "axios";
import type { User } from "../types/User";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};
