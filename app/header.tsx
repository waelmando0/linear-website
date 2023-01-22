import React from 'react';
import Logo from '../components/Logo';

const header = () => {
	return (
		<header>
			<div className='max-w-6xl mx-auto px-4 sm:px-5'>
				<Logo />
			</div>
		</header>
	);
};

export default header;
