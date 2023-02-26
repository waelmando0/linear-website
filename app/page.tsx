import React from 'react';

// Components
import { Hero, HeroSubtitle, HeroTitle } from '@/components/Hero';
import Container from '@/components/Container';
import Button from '@/components/Button';

const Home = () => {
	return (
		<Container>
			<section className='mt-10'>
				<Hero>
					<Button href='/' variant='secondary' size='small'>
						<div>Last Year You Said Next Year</div>
						<span className='ml-2 -mr-[10px] bg-custom-border rounded-full px-[8px]'>
							→
						</span>
					</Button>
					<HeroTitle>
						Linear is a better way
						<br className='hidden md:block' /> to build products
					</HeroTitle>
					<HeroSubtitle>
						Meet the new standard for modern software development.
						<br className='hidden md:block' /> Streamline issues, sprints, and
						product roadmaps.
					</HeroSubtitle>
				</Hero>
			</section>
			<section>
				<img src='img/hero.webp' alt='Hero Image' />
			</section>
		</Container>
	);
};

export default Home;
