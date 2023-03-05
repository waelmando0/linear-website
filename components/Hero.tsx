import React, { Children } from 'react';

interface HeroProps {
	children: React.ReactNode;
}

interface HeroElementProps {
	children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
	return (
		<h1 className='text-gradient text-5xl md:text-7xl my-4 '>{children}</h1>
	);
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
	return (
		<p className='mb-8 text-lg md:text-xl tracking-wide text-primary-text'>
			{children}
		</p>
	);
};

export const Hero = ({ children }: HeroProps) => {
	return <div className='text-center'>{children}</div>;
};
