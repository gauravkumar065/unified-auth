import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { IAuthWrapper } from './types'

export class SupabaseAuthWrapper implements IAuthWrapper {
    private supabase: SupabaseClient

    constructor(supabaseUrl: string, supabaseKey: string) {
        this.supabase = createClient(supabaseUrl, supabaseKey)
    }

    async signUp(email: string, password: string): Promise<void> {
        const { error } = await this.supabase.auth.signUp({ email, password })
        if (error) throw error
    }

    async signIn(email: string, password: string): Promise<void> {
        const { error } = await this.supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
    }

    async resetPassword(email: string): Promise<void> {
        const { error } = await this.supabase.auth.resetPasswordForEmail(email)
        if (error) throw error
    }

    async signOut(): Promise<void> {
        const { error } = await this.supabase.auth.signOut()
        if (error) throw error
    }

    async getUser() {
        return this.supabase.auth.getUser()
    }

    onAuthStateChange(callback: (event: string, session: any) => void) {
        return this.supabase.auth.onAuthStateChange(callback)
    }
}