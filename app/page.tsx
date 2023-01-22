import React from 'react';

// Components
import { Hero, HeroSubtitle, HeroTitle } from '../components/Hero';

const Home = () => {
	return (
		<section>
			<div className='max-w-6xl mx-auto px-4 sm:px-5'>
				<Hero>
					<HeroTitle>Linear is a better way to build products</HeroTitle>
					<HeroSubtitle>
						Meet the new standard for modern software development. Streamline
						issues, sprints, and product roadmaps.
					</HeroSubtitle>
					<img src='img/hero.webp' alt='Hero Image' />
				</Hero>
			</div>
		</section>
	);
};

export default Home;
