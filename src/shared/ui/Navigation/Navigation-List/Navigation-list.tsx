import type { FC, ReactNode } from 'react';
import React, { memo } from 'react';

export type NavigationListItem = {
    listItem: ReactNode;
    position?: number;
}

interface NavigationListProps {
    navList: NavigationListItem[];
}

export const NavigationList: FC<NavigationListProps> = memo(({ navList }) => {
	const nodesWithIndex = navList.map((node, index) => ({
		...node,
		originalIndex: index
	}));

	const sortedNodes = [...nodesWithIndex].sort((a, b) => {
		if (a.position !== undefined && b.position !== undefined) {
			return a.position - b.position;
		}

		if (a.position !== undefined) return -1;
		if (b.position !== undefined) return 1;

		return a.originalIndex - b.originalIndex;
	});

	return (
		<>
			{sortedNodes.map((item, index) => (
				<React.Fragment key={index}>{item.listItem}</React.Fragment>
			))}
		</>
	);
});