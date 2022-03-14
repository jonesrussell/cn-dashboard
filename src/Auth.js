import { FirebaseAuthProvider } from "react-admin-firebase";

let firebaseConfig;
try {
  firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
} catch (error) {
  console.error(
    "Error parsing (maybe quotes aren't escaped?): ",
    { REACT_APP_FIREBASE_CONFIG: process.env.REACT_APP_FIREBASE_CONFIG },
    error
  );
}

export const authProvider = FirebaseAuthProvider(firebaseConfig);
