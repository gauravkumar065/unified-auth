import { AuthConfig, IAuthWrapper } from './types';
export declare class AuthFactory {
    static createAuthWrapper(config: AuthConfig): IAuthWrapper;
}
