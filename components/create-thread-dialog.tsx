'use client';

import { TUser } from '@/@types';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import CreateThreadForm from './forms/create-thread-form';

export default function CreateThreadDialog({ user }: { user: TUser }) {
	const router = useRouter();
	function handleClose() {
		router.push('/');
	}
	return (
		<Dialog defaultOpen={true} onOpenChange={handleClose}>
			<DialogContent className='p-8'>
				<CreateThreadForm user={user} />
			</DialogContent>
		</Dialog>
	);
}
