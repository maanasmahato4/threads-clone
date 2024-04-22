'use client';
import Link from 'next/link';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { signOut, useSession } from 'next-auth/react';
import { useContext, useState } from 'react';
import { ThemeContext } from '@/context/theme-context';
import { Plus } from 'lucide-react';

export default function Header() {
	const { data: session } = useSession();
	const [open, setOpen] = useState<boolean>(false);
	const { theme, setTheme } = useContext(ThemeContext);

	const handleSignOut = async (e: React.MouseEvent) => {
		e.preventDefault();
		await signOut();
	};
	return (
		<header
			className={`shadow-md ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}
		>
			<nav className='flex flex-row justify-between items-center px-12 py-2'>
				<Link href='/'>
					<h3 className='text-xl italic'>Threads</h3>
				</Link>
				<DropdownMenu open={open} onOpenChange={setOpen}>
					<DropdownMenuTrigger onClick={() => setOpen(!open)}>
						<Avatar>
							<AvatarImage src={session?.user.image} />
							<AvatarFallback>
								{session?.user.username.substring(0, 2).toLocaleUpperCase()}
							</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel className='text-center'>
							{session?.user.username}
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<span className='flex flex-row gap-x-2'>
								<Plus size={24} />
								<p>Create Organization</p>
							</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							className='flex pl-2 gap-2'
							onClick={() => setOpen(true)}
						>
							<Switch
								id='change-theme'
								onCheckedChange={(checked) => {
									checked
										? localStorage.setItem('theme', 'dark')
										: localStorage.setItem('theme', '');
									setTheme(checked ? 'dark' : '');
								}}
								checked={theme === 'dark'}
							/>
							<Label htmlFor='change-theme'>Dark Mode</Label>
						</DropdownMenuItem>
						<DropdownMenuItem className='flex justify-center'>
							<span
								className='cursor-pointer py-2'
								onClick={handleSignOut}
								aria-disabled={session && session.user ? false : true}
							>
								Log Out
							</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</nav>
		</header>
	);
}
