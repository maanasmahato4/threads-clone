import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

import { Metadata } from 'next';
import SignUpForm from '@/components/forms/signup-form';

export const metadata: Metadata = {
	title: 'signup',
	description: 'create new account',
};

function SignUp() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Card className='w-[40%]'>
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
				</CardHeader>
				<CardContent>
					<SignUpForm />
				</CardContent>
				<CardFooter>
					Already have an account?&nbsp;
					<Link href='/auth/signin' className='underline text-purple-400'>
						Sign In
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}

export default SignUp;
