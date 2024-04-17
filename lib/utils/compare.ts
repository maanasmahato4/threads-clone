import bcrypt from 'bcrypt';

export default async function Compare(
	originalItem: string,
	hashedItem: string,
): Promise<boolean> {
	return await bcrypt.compare(originalItem, hashedItem);
}
