import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

async function Home() {
	const session = await getServerSession(authOptions);
	console.log(session?.user);
	return <div>Home</div>;
}

export default Home;
