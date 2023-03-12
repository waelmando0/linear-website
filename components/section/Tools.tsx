import React from 'react';
import Button from '../Button';
import KeyboardIllustration from '../illustration/KeyboardIllustration ';
import { LogoLightIllustration } from '../illustration/LogoLightIllustration';
import { ZapIllustration } from '../illustration/ZapIllustration';
import CommandMenu from './CommandMenu';

export const Tools = () => {
	return (
		<>
			<div className='text-center mb-12'>
				<h2 className='text-4xl md:text-6xl mb-3 md:mb-7 tracking-tight'>
					Unlike any tool
					<br /> you have used before
				</h2>
				<p className='mx-auto mb-12 max-w-[45rem] text-lg text-primary-text md:mb-7 md:text-xl leading-6'>
					Designed to the last pixel and engineered with unforgiving precision,
					Linear companies UI elegance with world-class performance.
				</p>
			</div>
			<div className='flex flex-wrap items-center gap-4  text-center'>
				<div className='relative hidden lg:flex flex-col items-center justify-end  min-h-[30rem] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[2.8rem] basis-[calc(66.66%-1.6rem)] '>
					<KeyboardIllustration />
					<p className='text-3xl mb-2'>Built for your keyboard</p>
					<p className='text-md text-primary-text'>
						Fly through your tasks with rapid-fire keyboard
						<br />
						shortcuts everything. Literally everything.
					</p>
				</div>
				<div className='flex flex-col items-center justify-end min-h-[30rem] relative bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[2.8rem] lg:basis-[calc(33.33%)] basis-[calc(100%)] w-full'>
					<div className='mask-linear-faded absolute top-[-3.2rem]  [&_svg]:max-w-full [&_svg]:h-auto '>
						<ZapIllustration />
					</div>
					<p className='text-3xl mb-2'>Breathtaking fast</p>
					<p className='text-md text-primary-text'>
						Built for speed with 50ms interactions and real-time sync.
					</p>
				</div>
				<div className='group relative hidden lg:flex flex-col items-center justify-end min-h-[30rem] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[2.8rem] basis-[calc(33.33%)]'>
					<div className='pointer-events-none absolute top-[-5rem] w-[130%]'>
						<LogoLightIllustration />
					</div>
					<p className='text-[1.75rem] mb-2 leading-8'>
						Designed for modern software teams
					</p>
					<p className='text-md text-primary-text'>
						comes with built-in workflows that create focus and routine.
					</p>
					<Button
						className='absolute bottom-[13rem] h-4 text-sm translate-y-[30%] scale-[0.8] opacity-0 transition-[transform,opacity] group-hover:transform-none group-hover:opacity-100 [&_.highlight]:text-[1.1rem]'
						variant='secondary'
						href='/'
					>
						<span className='-ml-[10px] mr-[10px] bg-custom-border rounded-full px-[8px]'>
							Linear Product
						</span>
						Product Principles
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='#8A8F98'
							className='ml-1'
						>
							<path d='M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z'></path>
						</svg>
					</Button>
				</div>
				<div className='hidden lg:flex flex-col justify-end items-center min-h-[30rem] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[2.8rem] basis-[calc(66.66%-1.6rem)]'>
					<p className='text-3xl mb-2'>Meet your command line</p>
					<p className='text-md text-primary-text'>
						Complete any action in seconds with global command menu.
					</p>
					<CommandMenu />
				</div>
			</div>
		</>
	);
};
