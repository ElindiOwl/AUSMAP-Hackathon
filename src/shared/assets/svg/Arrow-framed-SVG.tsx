import type { FC } from 'react';
import type { IconSVGProps } from 'shared/types';

export const ArrowFramedSVG: FC<IconSVGProps> = ({
	bgStyle = '',
	iconStyle = '',
}) => (
	<svg fill="none" height="100%" viewBox="0 0 32 32" width="100%" xmlns="http://www.w3.org/2000/svg">
		<rect className={bgStyle} fill="currentColor" fillOpacity="inherit" height="32" width="32"/>
		<mask height="24" id="mask0_576_692" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }} width="24" x="4"
			y="4">
			<rect fill="currentColor" height="24" width="24" x="4" y="4"/>
		</mask>
		<g mask="url(#mask0_576_692)">
			<path className={iconStyle} d="M20.175 17H8V15H20.175L14.575 9.4L16 8L24 16L16 24L14.575 22.6L20.175 17Z"
				fill="currentColor"/>
		</g>
	</svg>

)