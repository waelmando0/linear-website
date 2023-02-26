import React from 'react';
import classNames from 'classnames';

const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={classNames('max-w-[1200px] mx-auto px-4 sm:px-5', className)}
		>
			{children}
		</div>
	);
};

export default Container;
