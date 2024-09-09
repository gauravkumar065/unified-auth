import { IAuthWrapper } from './types';
export declare class SupabaseAuthWrapper implements IAuthWrapper {
    private supabase;
    constructor(supabaseUrl: string, supabaseKey: string);
    signUp(email: string, password: string): Promise<void>;
    signIn(email: string, password: string): Promise<void>;
    resetPassword(email: string): Promise<void>;
    signOut(): Promise<void>;
    getUser(): Promise<import("@supabase/supabase-js").UserResponse>;
    onAuthStateChange(callback: (event: string, session: any) => void): {
        data: {
            subscription: import("@supabase/supabase-js").Subscription;
        };
    };
}
