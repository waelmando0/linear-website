import React from 'react';
import Logo from '@/components/Logo';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';

const header = () => {
	return (
		<header className='fixed top-0 left-0 w-full'>
			<Container className='flex h-[var(--navigation-height)] border-b border-custom-border'>
				<Link href='/' className='flex items-center'>
					<Logo />
				</Link>

				<nav className='h-full'>
					<ul className='hidden lg:flex items-center h-full [&-a]:text-xs [&_li]:ml-6'>
						<li>
							<Link href='#'>Features</Link>
						</li>
						<li>
							<Link href='#'>Method</Link>
						</li>
						<li>
							<Link href='#'>Customers</Link>
						</li>
						<li>
							<Link href='#'>Changelog</Link>
						</li>
						<li>
							<Link href='#'>Integrations</Link>
						</li>
						<li>
							<Link href='#'>Pricing</Link>
						</li>
						<li>
							<Link href='#'>Company</Link>
						</li>
					</ul>
				</nav>

				<div className='ml-auto flex items-center'>
					<Link href='#' className='text-sm mr-6'>
						Log in
					</Link>
					<Button href='#'>Sign up</Button>
				</div>
			</Container>
		</header>
	);
};

export default header;
