import { createClient } from '@supabase/supabase-js';
export class SupabaseAuthWrapper {
    constructor(supabaseUrl, supabaseKey) {
        this.supabase = createClient(supabaseUrl, supabaseKey);
    }
    async signUp(email, password) {
        const { error } = await this.supabase.auth.signUp({ email, password });
        if (error)
            throw error;
    }
    async signIn(email, password) {
        const { error } = await this.supabase.auth.signInWithPassword({ email, password });
        if (error)
            throw error;
    }
    async resetPassword(email) {
        const { error } = await this.supabase.auth.resetPasswordForEmail(email);
        if (error)
            throw error;
    }
    async signOut() {
        const { error } = await this.supabase.auth.signOut();
        if (error)
            throw error;
    }
    async getUser() {
        return this.supabase.auth.getUser();
    }
    onAuthStateChange(callback) {
        return this.supabase.auth.onAuthStateChange(callback);
    }
}
//# sourceMappingURL=SupabaseAuthWrapper.js.map