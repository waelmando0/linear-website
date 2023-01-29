import React from 'react';
import classNames from 'classNames';

const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={classNames('max-w-6xl mx-auto px-4 sm:px-5', className)}>
			{children}
		</div>
	);
};

export default Container;
