import User from '@/lib/models/user';
import Compare from '@/lib/utils/compare';
import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
					placeholder: 'eg: john doe',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			async authorize(credentials) {
				const { _doc: user } = await User.findOne({
					email: credentials?.email,
				});

				if (!user) {
					throw new Error('user does not exist');
				}

				if (!credentials?.password) {
					throw new Error('password should not be empty');
				}

				if (!Compare(credentials?.password, user.password)) {
					throw new Error('passwords does not match');
				}

				const {
					_id,
					image,
					emailVerified,
					sessions,
					accounts,
					createdAt,
					updatedAt,
					...userDetails
				} = user;

				return userDetails;
			},
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
