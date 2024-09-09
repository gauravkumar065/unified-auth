//export the auth wrapper
export { AuthFactory } from './auth/AuthFactory'
export { AuthConfig } from './auth/types'

// Usage example
// import { AuthFactory } from './auth/AuthFactory'
// import { AuthConfig } from './auth/types'

// const authConfig: AuthConfig = {
//     provider: 'supabase',
//     supabaseUrl: 'YOUR_SUPABASE_URL',
//     supabaseKey: 'YOUR_SUPABASE_KEY'
// }

// const authWrapper = AuthFactory.createAuthWrapper(authConfig)