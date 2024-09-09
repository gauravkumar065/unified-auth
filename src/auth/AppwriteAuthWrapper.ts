import { Client, Account } from 'appwrite'
import { IAuthWrapper } from './types'

export class AppwriteAuthWrapper implements IAuthWrapper {
    private appwrite: Client
    private account: Account

    constructor(appwriteEndpoint: string, appwriteProjectId: string) {
        this.appwrite = new Client()
        this.appwrite.setEndpoint(appwriteEndpoint).setProject(appwriteProjectId)
        this.account = new Account(this.appwrite)
    }

    async signUp(email: string, password: string): Promise<void> {
        await this.account.create('unique()', email, password)
    }

    async signIn(email: string, password: string): Promise<void> {
        await this.account.createSession(email, password)
    }

    async resetPassword(email: string): Promise<void> {
        await this.account.createRecovery(email, 'https://example.com/recovery')
    }

    async signOut(): Promise<void> {
        await this.account.deleteSession('current')
    }

    async getUser() {
        return this.account.get()
    }

    onAuthStateChange(callback: (event: string, session: any) => void) {
        console.warn('Auth state change listener is not available for Appwrite')
    }
}

