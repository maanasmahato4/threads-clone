import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'sign in',
	description: 'log in to your existing account',
};

function SignIn() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Card>
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					{"Don't have an account?"}&nbsp;
					<Link href='/auth/signup' className='underline text-purple-400'>
						Create new Account
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}

export default SignIn;
