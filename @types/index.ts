export type TUser = {
	_id: string;
	image: string;
	username: string;
	email: string;
	password: string;
	emailVerified: Date;
	phone: string;
	threads: string[];
	communities: string[];
	createdAt: string;
	updatedAt: string;
};

export type IUser = {
	username: string;
	email: string;
};
