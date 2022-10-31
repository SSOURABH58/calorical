import { getAuth, connectAuthEmulator, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Cloud/firebaseConfig";

export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");



// export const provider = new GoogleAuthProvider();
// 763831792572-dgqhqd51tb33s5qfgqs482tnarc2k5s7.apps.googleusercontent.com