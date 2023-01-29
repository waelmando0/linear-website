import Link from 'next/link';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
	children: React.ReactNode;
	href: string;
}

const buttonClasses = cva('relative rounded-full inline-flex items-center', {
	variants: {
		variant: {
			primary: 'bg-primary-gradient',
			secondary: '',
			tertiary: '',
		},
		size: {
			small: 'text-xs px-3  h-7',
			medium: 'text-sm px-3 h-5',
			large: 'text-md px-6 h-12',
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
