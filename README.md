# Unified Auth Service

A TypeScript-based wrapper for multiple authentication providers, offering a unified interface for your authentication needs.

## Overview

This project provides a seamless integration layer for various authentication providers, allowing developers to switch between different auth solutions without changing their application code. Currently supported providers include:

- Supabase
- Appwrite
- NextAuth
- Lucia
- Clerk

## Features

- **Unified Interface**: Use a single set of methods for all supported auth providers.
- **Easy Provider Switching**: Change your auth provider with minimal code changes.
- **TypeScript Support**: Fully typed for better developer experience and code safety.
- **Extensible**: Easily add support for new auth providers.

## Installation

```bash
npm install unified-auth-js
```

## Usage

1. Import the library:

```typescript
import { UnifiedAuth } from 'unified-auth-js';
```

2. Initialize with your chosen provider:

```typescript
const auth = new UnifiedAuth({
  provider: 'supabase',
  config: {
    // Provider-specific configuration
  }
});
```

3. Use the unified methods:

```typescript
// Sign up
await auth.signUp(email, password);

// Sign in
await auth.signIn(email, password);

// Sign out
await auth.signOut();

// Get current user
const user = await auth.getCurrentUser();
```

## Supported Methods

- `signUp(email: string, password: string): Promise<User>`
- `signIn(email: string, password: string): Promise<User>`
- `signOut(): Promise<void>`
- `getCurrentUser(): Promise<User | null>`
- `resetPassword(email: string): Promise<void>`
- `updateUser(data: Partial<User>): Promise<User>`
- `deleteUser(): Promise<void>`

## Adding a New Provider

To add support for a new authentication provider:

1. Create a new file in the `src/providers` directory (e.g., `newProvider.ts`).
2. Implement the `AuthProvider` interface.
3. Add the new provider to the `ProviderType` union in `src/types.ts`.
4. Update the provider factory in `src/UnifiedAuth.ts`.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.