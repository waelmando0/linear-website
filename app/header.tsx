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
		<header className='fixed top-0 left-0 w-full backdrop-blur-[12px] z-30'>
			<Container className='flex h-navigation-height border-b border-custom-border'>
				{/* Logo */}
				<Link href='/' className='flex items-center'>
					<Logo />
				</Link>

				{/* Desktop Nav */}
				<nav className='hidden md:flex ml-4'>
					<ul className='flex items-center justify-center gap-x-4 font-medium ease-in [&_a]:duration-300 [&_a:hover]:text-gray [&_a]:transition-[color]'>
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
				<div className='ml-auto flex items-center font-medium'>
					<Link
						href='#'
						className='text-sm mr-4 ease-in duration-200 hover:text-gray transition-color'
					>
						Log in
					</Link>
					<Button href='#'>Sign up</Button>
				</div>

				{/* Mobile Nav */}
				<div
					className='flex md:hidden ml-4'
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
					{menuIsOpen && (
						<nav className='absolute left-0 pt-8 top-0 w-full h-screen pb-16 z-[-2] bg-background overflow-auto'>
							<Container>
								<ul className='font-medium  [&_li]:border-b [&_li]:border-gray-dark [&_li]:py-2 ease-in [&_a]:duration-300 [&_a:hover]:text-gray [&_a]:transition-[color]'>
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
										<Link href='#'>About</Link>
									</li>
									<li>
										<Link href='#'>Blog</Link>
									</li>
									<li>
										<Link href='#'>Careers</Link>
									</li>
								</ul>
							</Container>
						</nav>
					)}
				</div>
			</Container>
		</header>
	);
};

export default header;
