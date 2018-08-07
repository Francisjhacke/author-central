import { db } from "./firebase";

// User API
export const fsCreateUser = (id: string, username: string, email: string) =>
  db.collection("users").doc(id).set({ email, username });

export const fsGetUsers = () => db.collection("users").get();
