import { db } from "./firebase";

// User API
// export const doCreateUser = (id: string, username: string, email: string) =>
//   db.ref(`users/${id}`).set({
//     email,
//     username
//   });

export const fsCreateUser = (id: string, username: string, email: string) => 
  db.collection("users").doc(id).set({email, username});


//export const onceGetUsers = () => db.ref("users").once("value");
export const fsGetUsers = () => db.collection("users").get();