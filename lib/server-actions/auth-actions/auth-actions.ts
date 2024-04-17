import { TUser } from '@/@types';
import User from '@/lib/models/user';
import Hash from '@/lib/utils/hash';

type UserType = Omit<
	TUser,
	| '_id'
	| 'phone'
	| 'emailVerified'
	| 'image'
	| 'accounts'
	| 'session'
	| 'createdAt'
	| 'updatedAt'
>;

export const registerUser = async (user: UserType) => {
	try {
		const userExist = await User.findOne({ email: user.email });
		if (!userExist) {
			throw new Error('user already exists');
		}
		const result = await User.create({
			...user,
			password: await Hash(user.password),
		});
		return result;
	} catch (error: any) {
		console.error(error);
		throw new Error(error);
	}
};
