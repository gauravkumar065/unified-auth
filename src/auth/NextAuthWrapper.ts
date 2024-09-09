import { signIn, signOut, useSession } from 'next-auth/react'
import { IAuthWrapper } from './types'

export class NextAuthWrapper implements IAuthWrapper {
    constructor(nextAuthOptions: any) {
        // NextAuth is typically configured at the app level, so we don't need to do anything here
    }

    async signUp(email: string, password: string): Promise<void> {
        throw new Error('Sign up is not directly supported by NextAuth. Use a specific provider or custom sign up flow.')
    }

    async signIn(email: string, password: string): Promise<void> {
        await signIn('credentials', { email, password })
    }

    async resetPassword(email: string): Promise<void> {
        throw new Error('Password reset is not directly supported by NextAuth. Implement a custom reset flow.')
    }

    async signOut(): Promise<void> {
        await signOut()
    }

    async getUser() {
        const session = useSession()
        return session.data?.user
    }

    async onAuthStateChange(callback: (event: string, session: any) => void) {
        console.warn('Use the useSession hook from next-auth/react to track auth state changes')
    }

    // NextAuth specific methods
    async nextAuthSignIn(provider: string, options?: any): Promise<void> {
        await signIn(provider, options)
    }

    useNextAuthSession() {
        return useSession()
    }
}