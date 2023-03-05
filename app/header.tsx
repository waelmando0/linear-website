'use client';

import { useState, useEffect } from 'react';
import Logo from '@/components/Logo';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import classNames from 'classnames';

const header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		const html = document.querySelector('html');

		if (html) html.classList.toggle('overflow-hidden', menuIsOpen);
	}, [menuIsOpen]);

	useEffect(() => {
		const closeMenuNavigation = () => setMenuIsOpen(false);

		window.addEventListener('orientationchange', closeMenuNavigation);
		window.addEventListener('resize', closeMenuNavigation);

		return () => {
			window.removeEventListener('orientationchange', closeMenuNavigation);
			window.removeEventListener('resize', closeMenuNavigation);
		};
	}, [setMenuIsOpen]);
	return (
		<header className='fixed top-0 left-0 w-full backdrop-blur-[12px]'>
			<Container className='flex h-navigation-height border-b border-custom-border'>
				{/* Logo */}
				<Link href='/' className='flex items-center'>
					<Logo />
				</Link>

				{/* Desktop Nav */}
				<nav className='hidden md:flex'>
					<ul className='flex items-center justify-center'>
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

				{/* Links */}
				<div className='ml-auto flex items-center'>
					<Link href='#' className='text-sm mr-4'>
						Log in
					</Link>
					<Button href='#'>Sign up</Button>
				</div>

				{/* Mobile Nav */}
				<nav
					className='flex md:hidden ml-4'
					onClick={() => setMenuIsOpen((open) => !open)}
				>
					<button className={menuIsOpen ? 'l active z-30' : 'l'}>
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
					{menuIsOpen && (
						<div className='absolute left-0 pt-16 top-0 w-full h-screen pb-16 z-[-2] bg-background'>
							<ul className='py-2 px-5 sm:px-6'>
								<li>
									<Link
										href='/'
										className='flex items-center py-4  text-gray-600 font-semibold text-sm tracking-wide  border-b border-gray-300'
									>
										About Me
									</Link>
								</li>
								<li>
									<Link
										href='/'
										className='flex items-center py-4  text-gray-600 font-semibold text-sm tracking-wide  border-b border-gray-300'
									>
										About Me
									</Link>
								</li>
								<li>
									<Link
										href='/'
										className='flex items-center py-4  text-gray-600 font-semibold text-sm tracking-wide  border-b border-gray-300'
									>
										About Me
									</Link>
								</li>
							</ul>
						</div>
					)}
				</nav>
			</Container>
		</header>
	);
};

export default header;
