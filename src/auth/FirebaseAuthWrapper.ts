import { initializeApp, FirebaseApp } from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
    User
} from 'firebase/auth'
import { IAuthWrapper } from './types'

export class FirebaseAuthWrapper implements IAuthWrapper {
    private app: FirebaseApp
    private auth: ReturnType<typeof getAuth>

    constructor(firebaseConfig: object) {
        this.app = initializeApp(firebaseConfig)
        this.auth = getAuth(this.app)
    }

    async signUp(email: string, password: string): Promise<void> {
        // Removed unnecessary try/catch
        await createUserWithEmailAndPassword(this.auth, email, password)
    }

    async signIn(email: string, password: string): Promise<void> {
        // Removed unnecessary try/catch
        await signInWithEmailAndPassword(this.auth, email, password)
    }

    async resetPassword(email: string): Promise<void> {

        await sendPasswordResetEmail(this.auth, email)
    }

    async signOut(): Promise<void> {

        await signOut(this.auth)
    }

    async getUser(): Promise<User | null> {
        return this.auth.currentUser
    }

    onAuthStateChange(callback: (event: string, session: any) => void): void {
        onAuthStateChanged(this.auth, (user: any) => {
            // Call the callback with the required parameters
            callback('authStateChanged', user)
        })
    }
}