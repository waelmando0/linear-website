'use client';

import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
	AssignToIcon,
	BacklogIcon,
	NoPriorityIcon,
	ChangePriorityIcon,
	ChangeStatusIcon,
	DoneIcon,
	InProgressIcon,
	LabelIcon,
	PersonIcon,
	TodoIcon,
	UrgentIcon,
	HighIcon,
	MediumIcon,
	LowIcon,
	AddLabels,
} from '../icons/index';

const commandOptions = [
	{
		label: 'Assign to..',
		icon: AssignToIcon,
		subOptions: [
			{ label: 'Jori', icon: PersonIcon },
			{ label: 'Karri', icon: PersonIcon },
			{ label: 'Tuomas', icon: PersonIcon },
		],
	},
	{
		label: 'Change status...',
		icon: ChangeStatusIcon,
		subOptions: [
			{ label: 'Backlog', icon: BacklogIcon },
			{ label: 'Todo', icon: TodoIcon },
			{ label: 'In Progress', icon: InProgressIcon },
			{ label: 'Done', icon: DoneIcon },
		],
	},
	{
		label: 'Change priority...',
		icon: ChangePriorityIcon,
		subOptions: [
			{ label: 'No priority', icon: NoPriorityIcon },
			{ label: 'Urgent', icon: UrgentIcon },
			{ label: 'High', icon: HighIcon },
			{ label: 'Medium', icon: MediumIcon },
			{ label: 'Low', icon: LowIcon },
		],
	},
	{
		label: 'Add labels...',
		icon: AddLabels,
		subOptions: [
			{ label: 'Bug', icon: () => <LabelIcon type='bug' /> },
			{ label: 'Feature', icon: () => <LabelIcon type='feature' /> },
			{ label: 'Improvement', icon: () => <LabelIcon type='improvement' /> },
		],
	},
] as const;

export const CommandMenu = () => {
	const [opened, setOpened] = useState(false);
	const [selectedOption, setSetSelectedOption] = useState<number | null>(null);
	const commandMenuRef = useRef<HTMLDivElement>(null);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		const toggleCommandMenu = (e: MouseEvent) => {
			if (!commandMenuRef.current) return;
			const isMenuButton =
				e.target instanceof Element &&
				e.target.classList.contains('command-menu-button');
			const clickedOutside =
				!isMenuButton && !commandMenuRef.current?.contains(e.target as Node);

			setOpened(clickedOutside ? false : true);
		};

		window.addEventListener('click', toggleCommandMenu);

		return () => {
			window.removeEventListener('click', toggleCommandMenu);
		};
	}, []);

	const currentOptions = useMemo(() => {
		const options =
			selectedOption === null
				? commandOptions
				: commandOptions[selectedOption].subOptions;

		// If no search value is provided, we return all options.
		if (searchValue === '') return options;

		// If a search value is provided, we do a simple search based on that input.
		return [...options].filter((option) =>
			option.label.toLowerCase().includes(searchValue.toLowerCase())
		);
	}, [selectedOption, searchValue]);

	useEffect(() => {
		if (!commandMenuRef.current) return;
		commandMenuRef.current.classList.remove('animate-bounce');
		commandMenuRef.current.clientWidth;
		commandMenuRef.current.classList.add('animate-bounce');
	}, [selectedOption]);

	return (
		<div className={classNames(opened && 'opened')} ref={commandMenuRef}>
			<div
				className={classNames(
					'flex flex-col items-start absolute left-1/2 w-[65vw] lg:w-[30vw]  transition-[transform, opacity] -translate-x-1/2  rounded-md bg-transparent-white border border-transparent-white showed-[rgb(0_0_0_/_35%)_0px_7px_32px]',
					opened && 'translate-y-[2.8rem]  opacity-100',
					!opened && 'translate-y-[7rem]  opacity-60'
				)}
			>
				<span className='bg-white/[0.05] text-xs px-2 m-2 leading-6 text-white/50'>
					LIN-111 Walkway lightning
				</span>
				<input
					className='text-lg bg-transparent px-2 py-1 w-full outline-none'
					placeholder='Type a command or search...'
				/>
				<div className='flex flex-col text-sm w-full'>
					{currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
						<button
							className='command-menu-button first:bg-white/[0.15] gap-3 p-2 w-full flex items-center h-[2.6rem] hover:bg-white/[0.05]'
							key={label}
							onClick={(ev) => {
								const clickedRootItem = 'subOptions' in menuItem;
								setSetSelectedOption(clickedRootItem ? index : null);
								if (!clickedRootItem) setOpened(false);
								ev.stopPropagation();
							}}
						>
							<Icon />
							{label}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default CommandMenu;
