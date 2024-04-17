import bcrypt from 'bcrypt';

export default async function Hash(hashItem: string): Promise<string> {
	return await bcrypt.hash(hashItem, 10);
}
