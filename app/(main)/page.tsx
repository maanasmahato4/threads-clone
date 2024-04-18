import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

async function Home() {
	return <div>Home</div>;
}

export default Home;
