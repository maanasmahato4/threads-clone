import React from 'react';

interface InputProps {
	id: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	type?: string;
	value: string;
	name: string;
	label: string;
	errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
	id,
	onChange,
	type = 'text',
	value,
	name,
	label,
	errorMessage,
}): React.ReactElement => {
	return (
		<div className='relative'>
			<input
				className='peer block w-full appearance-none rounded-md border-2 border-gray-500 pb-1 ps-6 pt-6 invalid:border-b-2 focus:outline-none focus:ring-0'
				onChange={onChange}
				type={type}
				value={value}
				id={id}
				placeholder=' '
				name={name}
			/>
			{errorMessage && errorMessage != '' ? (
				<span>
					<p className='text-red-500'>{errorMessage}</p>
				</span>
			) : null}
			<label
				htmlFor={id}
				className='absolute left-6 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3  peer-focus:scale-75'
			>
				{label}
			</label>
		</div>
	);
};
