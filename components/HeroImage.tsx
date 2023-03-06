'use client';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

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
				<svg
					className={classNames(
						'absolute left-0 top-0 h-full w-full',
						'[&_path]:stroke-white [&_path]:[stroke-opacity:0.2]  [&_path]:[stroke-dasharray:1]  [&_path]:[stroke-dashoffset:1]',
						inView && '[&_path]:animate-sketch-lines'
					)}
					width='100%'
					viewBox='0 0 1499 778'
					fill='none'
				>
					<path pathLength='1' d='M1500 72L220 72'></path>
					<path pathLength='1' d='M1500 128L220 128'></path>
					<path pathLength='1' d='M1500 189L220 189'></path>
					<path pathLength='1' d='M220 777L220 1'></path>
					<path pathLength='1' d='M538 777L538 128'></path>
				</svg>
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
