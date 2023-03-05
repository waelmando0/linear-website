import Link from 'next/link';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
	children: React.ReactNode;
	href: string;
}

const buttonClasses = cva(' rounded-full inline-flex items-center', {
	variants: {
		variant: {
			primary: 'font-medium bg-primary-gradient hover:text-shadow gap-1',
			secondary:
				'text-offWhite bg-white bg-opacity-10 border border-custom-border backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in',
		},
		size: {
			small: 'text-sm px-2 h-4',
			medium: 'text-md px-3 h-5',
			large: 'text-base px-4 h-8',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
	},
});

const Button = ({ children, href, variant, size }: ButtonProps) => {
	return (
		<Link className={buttonClasses({ variant, size })} href={href}>
			{children}
		</Link>
	);
};

export default Button;
