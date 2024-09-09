import { IAuthWrapper } from './types';
export declare class NextAuthWrapper implements IAuthWrapper {
    constructor(nextAuthOptions: any);
    signUp(email: string, password: string): Promise<void>;
    signIn(email: string, password: string): Promise<void>;
    resetPassword(email: string): Promise<void>;
    signOut(): Promise<void>;
    getUser(): Promise<{
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    } | undefined>;
    onAuthStateChange(callback: (event: string, session: any) => void): Promise<void>;
    nextAuthSignIn(provider: string, options?: any): Promise<void>;
    useNextAuthSession(): {
        update: (data?: any) => Promise<import("next-auth").Session | null>;
        data: import("next-auth").Session;
        status: "authenticated";
    } | {
        update: (data?: any) => Promise<import("next-auth").Session | null>;
        data: null;
        status: "loading";
    } | {
        update: (data?: any) => Promise<import("next-auth").Session | null>;
        data: import("next-auth").Session;
        status: "authenticated";
    } | {
        update: (data?: any) => Promise<import("next-auth").Session | null>;
        data: null;
        status: "loading" | "unauthenticated";
    };
}
