import { Client, Account } from 'appwrite';
export class AppwriteAuthWrapper {
    constructor(appwriteEndpoint, appwriteProjectId) {
        this.appwrite = new Client();
        this.appwrite.setEndpoint(appwriteEndpoint).setProject(appwriteProjectId);
        this.account = new Account(this.appwrite);
    }
    async signUp(email, password) {
        await this.account.create('unique()', email, password);
    }
    async signIn(email, password) {
        await this.account.createSession(email, password);
    }
    async resetPassword(email) {
        await this.account.createRecovery(email, 'https://example.com/recovery');
    }
    async signOut() {
        await this.account.deleteSession('current');
    }
    async getUser() {
        return this.account.get();
    }
    onAuthStateChange(callback) {
        console.warn('Auth state change listener is not available for Appwrite');
    }
}
//# sourceMappingURL=AppwriteAuthWrapper.js.map