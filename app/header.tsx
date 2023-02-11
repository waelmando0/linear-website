'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import classNames from 'classnames';

const header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 w-full backdrop-blur-[12px]'>
			<Container className='flex h-navigation-height border-b border-custom-border'>
				<Link href='/' className='flex items-center'>
					<Logo />
				</Link>

				<div
					className={classNames(
						'transition-[visibility] md:visible',
						menuIsOpen ? 'visible' : 'invisible delay-500'
					)}
				>
					<nav
						className={classNames(
							'fixed md:relative md:top-0 md:block top-navigation-height left-0 w-full h-[calc(100vh_-_var(--navigation-height))] md:h-auto md:w-auto md:bg-transparent md:overflow-hidden overflow-auto bg-background md:opacity-100 transition-opacity duration-500',
							menuIsOpen ? 'opacity-100' : 'opacity-0'
						)}
					>
						<ul
							className={classNames(
								'flex flex-col md:flex-row md:items-center h-full [&_li]:ml-4',
								'ease-in [&_a]:duration-300 [&_a]:translate-y-8 md:[&_a]:translate-y-0  [&_a]:flex [&_a]:items-center [&_a]:h-navigation-height [&_a]:w-full [&_a]:transition-[color, transform] [&_a]:text-md md:[&_a]:text-sm [&_a]:font-medium [&_a:hover]:text-gray',
								menuIsOpen && '[&_a]:translate-y-0'
							)}
						>
							<li>
								<Link href='#'>Features</Link>
							</li>
							<li>
								<Link href='#'>Method</Link>
							</li>
							<li className='md:hidden lg:block'>
								<Link href='#'>Customers</Link>
							</li>
							<li className='md:hidden lg:block'>
								<Link href='#'>Changelog</Link>
							</li>
							<li className='md:hidden lg:block'>
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
				</div>

				<div className='ml-auto flex items-center'>
					<Link href='#' className='text-sm mr-4'>
						Log in
					</Link>
					<Button href='#'>Sign up</Button>
				</div>

				<div
					className='flex  md:hidden ml-4'
					onClick={() => setMenuIsOpen((open) => !open)}
				>
					<button className={menuIsOpen ? 'l active' : 'l'}>
						<span className='sr-only'>Toggle menu</span>
						<svg
							className='w-3 h-3 text-white fill-current '
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect y='4' width='24' height='2'></rect>
							<rect y='11' width='24' height='2'></rect>
							<rect y='18' width='24' height='2'></rect>
						</svg>
					</button>
				</div>
			</Container>
		</header>
	);
};

export default header;
