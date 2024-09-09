import { signIn, signOut, useSession } from 'next-auth/react';
export class NextAuthWrapper {
    constructor(nextAuthOptions) {
        // NextAuth is typically configured at the app level, so we don't need to do anything here
    }
    async signUp(email, password) {
        throw new Error('Sign up is not directly supported by NextAuth. Use a specific provider or custom sign up flow.');
    }
    async signIn(email, password) {
        await signIn('credentials', { email, password });
    }
    async resetPassword(email) {
        throw new Error('Password reset is not directly supported by NextAuth. Implement a custom reset flow.');
    }
    async signOut() {
        await signOut();
    }
    async getUser() {
        const session = useSession();
        return session.data?.user;
    }
    async onAuthStateChange(callback) {
        console.warn('Use the useSession hook from next-auth/react to track auth state changes');
    }
    // NextAuth specific methods
    async nextAuthSignIn(provider, options) {
        await signIn(provider, options);
    }
    useNextAuthSession() {
        return useSession();
    }
}
//# sourceMappingURL=NextAuthWrapper.js.map