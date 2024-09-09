export type AuthConfig = {
    provider: 'supabase' | 'appwrite' | 'nextauth' | 'firebase';
    supabaseUrl?: string;
    supabaseKey?: string;
    appwriteEndpoint?: string;
    appwriteProjectId?: string;
    nextAuthOptions?: any;
    firebaseConfig?: object;
};
export interface IAuthWrapper {
    signUp(email: string, password: string): Promise<void>;
    signIn(email: string, password: string): Promise<void>;
    resetPassword(email: string): Promise<void>;
    signOut(): Promise<void>;
    getUser(): Promise<any>;
    onAuthStateChange(callback: (event: string, session: any) => void): void;
}
