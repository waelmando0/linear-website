import React from 'react';

// Components
import Hero from '../components/Hero';

const Home = () => {
	return (
		<section>
			<div className='max-w-6xl mx-auto px-4 sm:px-5'>
				<Hero
					title='Linear is a better way to build products'
					subtitle='Meet the new standard for modern software development Streamline issues, sprints, and product roadmaps.'
				/>
			</div>
		</section>
	);
};

export default Home;
