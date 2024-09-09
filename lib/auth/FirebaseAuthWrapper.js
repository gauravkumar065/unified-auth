import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } from 'firebase/auth';
export class FirebaseAuthWrapper {
    constructor(firebaseConfig) {
        this.app = initializeApp(firebaseConfig);
        this.auth = getAuth(this.app);
    }
    async signUp(email, password) {
        // Removed unnecessary try/catch
        await createUserWithEmailAndPassword(this.auth, email, password);
    }
    async signIn(email, password) {
        // Removed unnecessary try/catch
        await signInWithEmailAndPassword(this.auth, email, password);
    }
    async resetPassword(email) {
        await sendPasswordResetEmail(this.auth, email);
    }
    async signOut() {
        await signOut(this.auth);
    }
    async getUser() {
        return this.auth.currentUser;
    }
    onAuthStateChange(callback) {
        onAuthStateChanged(this.auth, (user) => {
            // Call the callback with the required parameters
            callback('authStateChanged', user);
        });
    }
}
//# sourceMappingURL=FirebaseAuthWrapper.js.map