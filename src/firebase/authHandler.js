import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const auth = getAuth();

export function loginViaEmailAndPassword(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
        } catch (ex) {
            reject(ex);
        }
    });
}

export function loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    return new Promise(async (resolve, reject) => {
        try {
            const { user } = await signInWithPopup(auth, googleProvider);
            resolve(user);
        } catch (ex) {
            reject(ex);
        }
    });
}

export function loginWithGithub() {
    const githubProvider = new GithubAuthProvider();
    return new Promise(async (resolve, reject) => {
        try {
            const { user } = await signInWithPopup(auth, githubProvider);
            resolve(user);
        } catch (ex) {
            reject(ex);
        }
    });
}

export function logOutHandler() {
    return new Promise(async (resolve, reject) => {
        try {
            await signOut(auth);
            resolve("successfully logout");
        } catch (ex) {
            reject(ex);
        }
    });
}