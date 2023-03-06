import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
	children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	href?: never;
}

type ButtonProps = ButtonBaseProps &
	(ButtonAsAnchorProps | ButtonAsButtonProps);

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

const Button = ({ children, variant, size, ...props }: ButtonProps) => {
	const classes = buttonClasses({ variant, size, className: props.className });

	if ('href' in props && props.href !== undefined) {
		return (
			<Link {...props} className={classes}>
				{children}
			</Link>
		);
	}
	return (
		<button {...props} className={classes}>
			{children}
		</button>
	);
};

export default Button;
