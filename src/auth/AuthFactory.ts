import { AuthConfig, IAuthWrapper } from './types'
import { SupabaseAuthWrapper } from './SupabaseAuthWrapper'
import { AppwriteAuthWrapper } from './AppwriteAuthWrapper'
// import { NextAuthWrapper } from './NextAuthWrapper' 
import { FirebaseAuthWrapper } from './FirebaseAuthWrapper'

export class AuthFactory {
    static createAuthWrapper(config: AuthConfig): IAuthWrapper {
        switch (config.provider) {
            case 'supabase':
                if (!config.supabaseUrl || !config.supabaseKey) {
                    throw new Error('Supabase URL and key are required for Supabase provider')
                }
                return new SupabaseAuthWrapper(config.supabaseUrl, config.supabaseKey)
            case 'appwrite':
                if (!config.appwriteEndpoint || !config.appwriteProjectId) {
                    throw new Error('Appwrite endpoint and project ID are required for Appwrite provider')
                }
                return new AppwriteAuthWrapper(config.appwriteEndpoint, config.appwriteProjectId)
            // case 'nextauth':
            //     if (!config.nextAuthOptions) {
            //         throw new Error('NextAuth options are required for NextAuth provider')
            //     }
            //     return new NextAuthWrapper(config.nextAuthOptions)
            case 'firebase':
                if (!config.firebaseConfig) {
                    throw new Error('Firebase configuration is required for Firebase provider')
                }
                return new FirebaseAuthWrapper(config.firebaseConfig)
            default:
                throw new Error(`Unsupported auth provider: ${config.provider}`)
        }
    }
}