import React from 'react';

// Components
import { Hero, HeroSubtitle, HeroTitle } from '@/components/Hero';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { HeroImage } from '@/components/HeroImage';

const Home = () => {
	return (
		<Container>
			<section className='mt-10'>
				<Hero>
					<Button
						className='animate-fade-in opacity-0 translate-y-[-1rem]'
						href='/'
						variant='secondary'
						size='small'
					>
						<div>Last Year You Said Next Year</div>
						<span className='ml-2 -mr-[10px] bg-custom-border rounded-full px-[8px]'>
							→
						</span>
					</Button>
					<HeroTitle className='animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]'>
						Linear is a better way
						<br className='hidden md:block' /> to build products
					</HeroTitle>
					<HeroSubtitle className='animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]'>
						Meet the new standard for modern software development.
						<br className='hidden md:block' /> Streamline issues, sprints, and
						product roadmaps.
					</HeroSubtitle>
					<Button
						className='animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]'
						href='/'
						variant='primary'
						size='large'
					>
						Get started
						<svg width='16' height='16' viewBox='0 0 16 16' fill='#fff'>
							<path d='M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z'></path>
						</svg>
					</Button>
				</Hero>
			</section>
			<section className='mt-16 md:mt-24 lg:mt-32'>
				<HeroImage />
			</section>
		</Container>
	);
};

export default Home;
