import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const slug = (string: string, replace: string = '') => {
	return string
		.replace(/[^a-zA-Z_-]/g, replace)
		.toLowerCase()
		.trim();
};
