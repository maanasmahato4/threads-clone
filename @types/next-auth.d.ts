import { TUser } from './index';

declare module 'next-auth' {
	interface Session {
		user: TUser;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: TUser;
	}
}
