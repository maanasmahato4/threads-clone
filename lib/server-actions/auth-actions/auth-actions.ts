'use server';

import { TUser } from '@/@types';
import DBConnection from '@/lib/database/database';
import User from '@/lib/models/user';
import Hash from '@/lib/utils/hash';

type UserType = Omit<
	TUser,
	| '_id'
	| 'phone'
	| 'emailVerified'
	| 'image'
	| 'accounts'
	| 'sessions'
	| 'createdAt'
	| 'updatedAt'
>;

DBConnection();

export const registerUser = async (user: UserType): Promise<void> => {
	try {
		const userExist = await User.findOne({ email: user.email });
		if (userExist) {
			throw new Error('user already exists');
		}
		await User.create({
			...user,
			password: await Hash(user.password),
		});
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
};
