import { IAuthWrapper } from './types';
export declare class AppwriteAuthWrapper implements IAuthWrapper {
    private appwrite;
    private account;
    constructor(appwriteEndpoint: string, appwriteProjectId: string);
    signUp(email: string, password: string): Promise<void>;
    signIn(email: string, password: string): Promise<void>;
    resetPassword(email: string): Promise<void>;
    signOut(): Promise<void>;
    getUser(): Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
    onAuthStateChange(callback: (event: string, session: any) => void): void;
}
