import mongoose from 'mongoose';

declare global {
	var mongoose: {
		conn: any;
	};
}

global.mongoose = {
	conn: null,
};

export default async function DBConnection() {
	try {
		if (global.mongoose.conn) {
			console.log('connection to the database already established');
			return global.mongoose.conn;
		} else {
			const mongoUrl = process.env.MONGO_DB_URL as string;
			const connection = await mongoose.connect(mongoUrl);

			global.mongoose = {
				conn: connection,
			};
			return connection;
		}
	} catch (error: unknown) {
		console.error(error);
	}
}
