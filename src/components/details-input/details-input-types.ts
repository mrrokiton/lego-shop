export type DetailsInputProps = {
	label: string;
	id: string;
	type: string;
	inputErrorHandler: (isValid: boolean) => void;
};

export type InputErrors = {
	name: boolean;
	surname: boolean;
	phoneNumber: boolean;
	email: boolean;
	birthDate: boolean;
	address: boolean;
	city: boolean;
	state: boolean;
	zipCode: boolean;
};
