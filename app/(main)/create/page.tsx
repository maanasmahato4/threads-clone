import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import CreateThreadDialog from '@/components/create-thread-dialog';
import CreateThreadForm from '@/components/forms/create-thread-form';
import { getServerSession } from 'next-auth';

export default async function CreateThread() {
	const session = await getServerSession(authOptions);
	if (!session?.user) {
		return <p>loading...</p>;
	}
	return (
		<div>
			<CreateThreadDialog user={session?.user} />
		</div>
	);
}
