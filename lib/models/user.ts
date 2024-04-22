import mongoose from 'mongoose';

const UserModel = new mongoose.Schema(
	{
		_id: {
			type: mongoose.Schema.Types.ObjectId,
			default: () => new mongoose.Types.ObjectId(),
		},
		image: {
			type: String,
			default: '',
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
		},
		threads: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Thread',
			},
		],
		communities: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Community',
			},
		],
	},
	{ timestamps: true },
);

const User = mongoose.models.User || mongoose.model('User', UserModel);

export default User;
