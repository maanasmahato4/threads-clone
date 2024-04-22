import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import FakeThreadForm from '@/components/fake-thread-form';

async function Home() {
	const session = await getServerSession(authOptions);
	if (!session?.user) {
		return <h3>loading...</h3>;
	}
	return (
		<div>
			<FakeThreadForm user={session?.user} />
		</div>
	);
}

export default Home;
