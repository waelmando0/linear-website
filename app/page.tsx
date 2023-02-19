import React from 'react';

// Components
import { Hero, HeroSubtitle, HeroTitle } from '@/components/Hero';
import Container from '@/components/Container';

const Home = () => {
	return (
		<section>
			<Container>
				<Hero>
					<HeroTitle>Linear is a better way to build products</HeroTitle>
					<HeroSubtitle>
						Meet the new standard for modern software development. Streamline
						issues, sprints, and product roadmaps.
					</HeroSubtitle>
					<img src='img/hero.webp' alt='Hero Image' />
				</Hero>
			</Container>
		</section>
	);
};

export default Home;
