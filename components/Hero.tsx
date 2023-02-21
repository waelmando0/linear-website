import React, { Children } from 'react';

interface HeroProps {
	children: React.ReactNode;
}

interface HeroElementProps {
	children: React.ReactNode;
}

// export const HeroLine = ({ children }: HeroElementProps) => {
// 	return (
// 		<a className='text-md px-2 py-0.5 font-medium border border-gray rounded-full '>
// 			{children}
// 		</a>
// 	);
// };

export const HeroTitle = ({ children }: HeroElementProps) => {
	return (
		<h1 className='text-5xl md:text-7xl my-4 md:my-6 lg:max-w-2xl mx-auto'>
			{children}
		</h1>
	);
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
	return (
		<p className='mb-4 md:mb-12 md:max-w-xl text-lg md:text-xl  mx-auto tracking-wide text-gray-middle'>
			{children}
		</p>
	);
};

export const Hero = ({ children }: HeroProps) => {
	return <div className='text-center mt-10'>{children}</div>;
};
