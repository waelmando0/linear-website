import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Link from 'next/link';
import React from 'react';

const footerLinks = [
	{
		title: 'Product',
		links: [
			{ title: 'Features', href: '#' },
			{ title: 'Integrations', href: '#' },
			{ title: 'Pricing', href: '#' },
			{ title: 'Changelog', href: '#' },
			{ title: 'Docs', href: '#' },
			{ title: 'Linear Method', href: '#' },
			{ title: 'Download', href: '#' },
		],
	},
	{
		title: 'Company',
		links: [
			{ title: 'About us', href: '#' },
			{ title: 'Blog', href: '#' },
			{ title: 'Careers', href: '#' },
			{ title: 'Customers', href: '#' },
			{ title: 'Brand', href: '#' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ title: 'Community', href: '#' },
			{ title: 'Contact', href: '#' },
			{ title: 'DPA', href: '#' },
			{ title: 'Brand', href: '#' },
		],
	},
	{
		title: 'Developers',
		links: [
			{ title: 'API', href: '#' },
			{ title: 'Status', href: '#' },
			{ title: 'Github', href: '#' },
		],
	},
];

const footer = () => {
	return (
		<footer className='border-t border-custom-border mt-16'>
			<Container>
				<div className='grid py-8 gap-8 md:grid-cols-12 lg:py-12'>
					<div className='lg:col-span-3 md:col-span-12 col-span-6 flex flex-row lg:flex-col justify-between'>
						<div>
							<Logo />
						</div>
						<div className='flex items-center'>
							<a
								className='text-gray hover:text-white'
								rel='noopener'
								href='https://twitter.com/linear'
							>
								<svg
									width='18'
									height='18'
									viewBox='0 0 16 16'
									fill='currentColor'
									role='img'
									focusable='false'
								>
									<path d='M16 3.42059C15.4484 3.66118 14.8558 3.82375 14.2328 3.89723C14.8684 3.52268 15.3559 2.92834 15.5858 2.22085C14.9912 2.56809 14.3326 2.82039 13.6317 2.95565C13.0702 2.36781 12.2708 1.99976 11.3856 1.99976C9.68647 1.99976 8.30842 3.35621 8.30842 5.02999C8.30842 5.26669 8.33617 5.49688 8.38769 5.71928C5.82912 5.59247 3.56254 4.38623 2.04444 2.55378C1.78019 3.00247 1.62825 3.52268 1.62825 4.0767C1.62825 5.12753 2.17194 6.05546 2.99705 6.59843C2.49234 6.58218 2.01801 6.44627 1.60314 6.21933V6.25835C1.60314 7.72599 2.66344 8.95045 4.07188 9.22876C3.81291 9.29769 3.5414 9.3341 3.2613 9.3341C3.06311 9.3341 2.86955 9.31589 2.68193 9.28078C3.07368 10.4838 4.20994 11.3603 5.55695 11.3837C4.50326 12.1966 3.17608 12.681 1.73461 12.681C1.48622 12.681 1.24113 12.6667 1 12.6388C2.3622 13.4991 3.97939 13.9998 5.71681 13.9998C11.3783 13.9998 14.4733 9.38417 14.4733 5.38114C14.4733 5.25108 14.47 5.11973 14.4641 4.98968C15.0652 4.5618 15.5871 4.02923 15.9987 3.42254L16 3.42059Z'></path>
								</svg>
							</a>
							<a
								className='ml-2 text-gray hover:text-white'
								rel='noopener'
								href='https://github.com/linear'
							>
								<svg
									width='18'
									height='18'
									viewBox='0 0 16 16'
									fill='currentColor'
									role='img'
									focusable='false'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M11.5127 1.96247C10.4401 1.32066 9.27013 0.999756 7.99946 0.999756C6.72987 0.999756 5.5588 1.32066 4.48573 1.96247C3.41428 2.60373 2.56465 3.4742 1.939 4.57333C1.31228 5.67358 1 6.87335 1 8.17542C1 9.73858 1.44527 11.1441 2.33528 12.393C3.22529 13.6398 4.37482 14.5063 5.78494 14.9843C5.94862 15.0156 6.0703 14.9938 6.14891 14.9189C6.22806 14.8435 6.26736 14.7512 6.26736 14.6394L6.26306 14.1334C6.25983 13.8159 6.25767 13.5391 6.25767 13.3021L6.04877 13.339C5.91524 13.3642 5.74617 13.3748 5.54265 13.3714C5.33967 13.3686 5.12807 13.3468 4.90947 13.306C4.69249 13.2658 4.4895 13.173 4.30105 13.0265C4.11261 12.88 3.97908 12.6882 3.89993 12.4518L3.8084 12.236C3.7481 12.0928 3.65226 11.9341 3.52196 11.7607C3.39112 11.5852 3.25921 11.4667 3.12568 11.4046L3.06107 11.3582C3.01908 11.3269 2.98031 11.29 2.94262 11.2464C2.90655 11.2028 2.87962 11.1592 2.86186 11.1156C2.84355 11.0708 2.85809 11.0356 2.90655 11.0077C2.955 10.9786 3.0433 10.9657 3.17037 10.9657L3.35343 10.9937C3.47404 11.0183 3.6248 11.0932 3.80409 11.2173C3.98339 11.3426 4.13091 11.5041 4.2456 11.7037C4.38559 11.9587 4.55411 12.1532 4.75171 12.2874C4.94931 12.4216 5.14853 12.4886 5.34936 12.4886C5.54857 12.4886 5.72248 12.4719 5.86839 12.4417C6.01377 12.4104 6.15107 12.3634 6.27759 12.3019C6.33359 11.8837 6.48219 11.5628 6.72448 11.3386C6.37882 11.3006 6.06761 11.2447 5.7914 11.1698C5.51465 11.0954 5.22929 10.9741 4.93531 10.8053C4.63918 10.6376 4.39528 10.4296 4.20091 10.1791C4.00708 9.93202 3.84717 9.60329 3.72333 9.20076C3.59949 8.79431 3.5365 8.32861 3.5365 7.79861C3.5365 7.04554 3.77556 6.40373 4.25583 5.87373C4.03077 5.30683 4.05123 4.67173 4.32044 3.9673C4.49542 3.91139 4.75656 3.95332 5.1033 4.09309C5.4495 4.23286 5.70256 4.35306 5.86355 4.45201C6.02507 4.55265 6.1543 4.63651 6.25121 4.70471C6.81494 4.54594 7.39751 4.46599 7.99946 4.46599C8.60142 4.46599 9.18399 4.54706 9.74933 4.70863L10.0955 4.48388C10.3324 4.33461 10.6124 4.19876 10.9344 4.07297C11.2574 3.94885 11.504 3.91475 11.6742 3.97066C11.9472 4.67508 11.9719 5.30963 11.7469 5.87708C12.2261 6.40597 12.4662 7.04778 12.4662 7.8014C12.4662 8.33029 12.4037 8.79935 12.2794 9.20747C12.1555 9.61559 11.994 9.94432 11.7959 10.1898C11.5988 10.4357 11.3533 10.6426 11.0582 10.8114C10.7637 10.9792 10.4767 11.1005 10.2021 11.1748C9.92539 11.2498 9.61526 11.3057 9.26744 11.3426C9.58349 11.6221 9.74125 12.0638 9.74125 12.6692V14.6411C9.74125 14.7529 9.77894 14.8457 9.8554 14.9206C9.93077 14.995 10.0508 15.0173 10.2151 14.986C11.6257 14.5052 12.7747 13.642 13.6647 12.3919C14.5547 11.1452 15 9.73802 15 8.17542C15 6.87391 14.6866 5.67358 14.061 4.57389C13.4348 3.47476 12.5857 2.60429 11.5143 1.96303L11.5127 1.96247Z'
									></path>
								</svg>
							</a>
							<a
								className='ml-2 text-gray hover:text-white'
								rel='noopener'
								href='https://linear.app/join-slack'
							>
								<svg
									width='18'
									height='18'
									viewBox='0 0 16 16'
									fill='currentColor'
									role='img'
									focusable='false'
								>
									<path d='M3.95147 9.85007C3.95147 10.6638 3.29435 11.3214 2.4813 11.3214C1.66826 11.3214 1.01114 10.6638 1.01114 9.85007C1.01114 9.03638 1.66826 8.37874 2.4813 8.37874H3.95147V9.85007ZM4.68655 9.85007C4.68655 9.03638 5.34368 8.37874 6.15672 8.37874C6.96977 8.37874 7.62689 9.03638 7.62689 9.85007V13.5284C7.62689 14.3421 6.96977 14.9998 6.15672 14.9998C5.34368 14.9998 4.68655 14.3421 4.68655 13.5284V9.85007Z'></path>
									<path d='M6.15672 3.94243C5.34368 3.94243 4.68655 3.28479 4.68655 2.47109C4.68655 1.6574 5.34368 0.999756 6.15672 0.999756C6.96977 0.999756 7.62689 1.6574 7.62689 2.47109V3.94243H6.15672ZM6.15672 4.68925C6.96977 4.68925 7.62689 5.34689 7.62689 6.16058C7.62689 6.97428 6.96977 7.63192 6.15672 7.63192H2.47017C1.65712 7.63192 1 6.97428 1 6.16058C1 5.34689 1.65712 4.68925 2.47017 4.68925H6.15672Z'></path>
									<path d='M12.0485 6.16058C12.0485 5.34689 12.7056 4.68925 13.5187 4.68925C14.3317 4.68925 14.9889 5.34689 14.9889 6.16058C14.9889 6.97428 14.3317 7.63192 13.5187 7.63192H12.0485V6.16058ZM11.3134 6.16058C11.3134 6.97428 10.6563 7.63192 9.84328 7.63192C9.03023 7.63192 8.37311 6.97428 8.37311 6.16058V2.47109C8.37311 1.6574 9.03023 0.999756 9.84328 0.999756C10.6563 0.999756 11.3134 1.6574 11.3134 2.47109V6.16058Z'></path>
									<path d='M9.84328 12.0571C10.6563 12.0571 11.3134 12.7147 11.3134 13.5284C11.3134 14.3421 10.6563 14.9998 9.84328 14.9998C9.03023 14.9998 8.37311 14.3421 8.37311 13.5284V12.0571H9.84328ZM9.84328 11.3214C9.03023 11.3214 8.37311 10.6638 8.37311 9.85007C8.37311 9.03638 9.03023 8.37874 9.84328 8.37874H13.5298C14.3429 8.37874 15 9.03638 15 9.85007C15 10.6638 14.3429 11.3214 13.5298 11.3214H9.84328Z'></path>
								</svg>
							</a>
						</div>
					</div>
					{footerLinks.map((column) => (
						<div
							key={column.title}
							className='lg:col-span-2 col-span-3 md:col-span-6'
						>
							<h3 className='mb-2 font-medium'>{column.title}</h3>
							<ul>
								{column.links.map((link) => (
									<li key={link.title} className='[&_a]:last:mb-0 text-gray'>
										<Link href={link.href}>{link.title}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</footer>
	);
};

export default footer;
