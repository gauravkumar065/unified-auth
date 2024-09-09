import { User } from 'firebase/auth';
import { IAuthWrapper } from './types';
export declare class FirebaseAuthWrapper implements IAuthWrapper {
    private app;
    private auth;
    constructor(firebaseConfig: object);
    signUp(email: string, password: string): Promise<void>;
    signIn(email: string, password: string): Promise<void>;
    resetPassword(email: string): Promise<void>;
    signOut(): Promise<void>;
    getUser(): Promise<User | null>;
    onAuthStateChange(callback: (event: string, session: any) => void): void;
}
