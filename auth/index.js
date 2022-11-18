import { getAuth, connectAuthEmulator, GoogleAuthProvider } from "firebase/auth";
import { app, db } from "../Cloud/firebaseConfig";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

//+++/ add data to userProfile

export const addToUserProfile = async (data, uid) => {
    // await const user = auth.currentUser;
    await setDoc(doc(db, "profile", uid), data).catch(err => {
        console.log(err);
    });
}

export const getProfileDoc = async (uid) => {
    const docRef = doc(db, "profile", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false
    }
}


// export const provider = new GoogleAuthProvider();
// 763831792572-dgqhqd51tb33s5qfgqs482tnarc2k5s7.apps.googleusercontent.com