'use client';

import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';

export default function SignInForm() {
	const handleFormSubmit = async () => {};
	return (
		<form className='flex flex-col gap-y-4' onSubmit={handleFormSubmit}></form>
	);
}
