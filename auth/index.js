import { getAuth, connectAuthEmulator, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Cloud/firebaseConfig";
setuped

const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");


export const provider = new GoogleAuthProvider();