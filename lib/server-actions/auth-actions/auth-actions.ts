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

export const registerUser = async (user: UserType) => {
	try {
		const userExist = await User.findOne({ email: user.email });
		if (userExist) {
			throw new Error('user already exists');
		}
		const result = await User.create({
			...user,
			password: await Hash(user.password),
		});
		const resultUser = {
			_id: result._id.toString(),
			username: result.username,
			email: result.email,
		};
		return resultUser;
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
};
