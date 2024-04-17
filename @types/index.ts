export type TUser = {
	_id: string;
	image: string;
	username: string;
	email: string;
	password: string;
	emailVerified: Date;
	phone: string;
	sessions: string[];
	accounts: string[];
	createdAt: string;
	updatedAt: string;
};
