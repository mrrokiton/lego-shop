export type BaseButtonProps = {
	buttonText: string;
	onClick?: () => void;
	isShadow?: boolean;
	isDisabled?: boolean;
	type?: 'submit' | 'reset' | 'button';
};
