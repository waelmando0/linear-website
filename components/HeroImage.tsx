'use client';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import Container from './Container';

export const HeroImage = () => {
	const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

	return (
		<div ref={ref} className='mt-24 md:mt-[10rem] [perspective:2000px]'>
			<div
				className={classNames(
					'relative transition-transform rounded-lg bg-hero-gradient bg-opacity-[0.01]',
					inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
					'before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0',
					inView && 'before:animate-image-glow'
				)}
			>
				<img
					className={classNames(
						'relative z-10 opacity-0 transition-opacity delay-[680ms]',
						inView && 'opacity-100'
					)}
					src='img/hero.webp'
					alt='Hero Image'
				/>
			</div>
		</div>
	);
};
