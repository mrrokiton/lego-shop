import { BaseButtonProps } from './base-button-types';

import './base-button.scss';

export const BaseButton = ({
	buttonText,
	onClick,
	isShadow = false,
	isDisabled = false,
}: BaseButtonProps) => (
	<button
		className={`base-button ${isShadow ? 'shadow' : ''} ${
			isDisabled ? 'disabled' : ''
		}`}
		onClick={onClick}
		disabled={isDisabled}
	>
		{buttonText}
	</button>
);
