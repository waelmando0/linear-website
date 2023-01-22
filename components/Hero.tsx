import React, { Children } from 'react';

interface HeroProps {
	children: React.ReactNode;
}

interface HeroElementProps {
	children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
	return (
		<h1 className='text-5xl md:text-7xl my-6 max-w-xl md:max-w-2xl mx-auto'>
			{children}
		</h1>
	);
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
	return (
		<p className='text-lg md:text-xl mb-12 max-w-sm md:max-w-xl mx-auto'>
			{children}
		</p>
	);
};

export const Hero = ({ children }: HeroProps) => {
	return <div className='text-center'>{children}</div>;
};
