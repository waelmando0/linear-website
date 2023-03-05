'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

export const HeroImage = () => {
	const { ref, inView } = useInView();
	console.log(inView);

	return (
		<div ref={ref} className='overflow-hidden [perspective:2000px]'>
			<div className='rounded-lg border border-transparent-white bg-hero-gradient bg-opacity-[0.05] [transform:rotateX(25deg)] '>
				<img className='' src='img/hero.webp' alt='Hero Image' />
			</div>
		</div>
	);
};
