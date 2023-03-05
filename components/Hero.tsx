import React, { Children } from 'react';
import classNames from 'classnames';

interface HeroProps {
	children: React.ReactNode;
}

interface HeroElementProps {
	children: React.ReactNode;
	className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
	return (
		<h1
			className={classNames(
				'text-gradient text-5xl md:text-7xl my-4',
				className
			)}
		>
			{children}
		</h1>
	);
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
	return (
		<p
			className={classNames(
				'mb-8 text-lg md:text-xl tracking-wide text-primary-text',
				className
			)}
		>
			{children}
		</p>
	);
};

export const Hero = ({ children }: HeroProps) => {
	return <div className='text-center'>{children}</div>;
};
