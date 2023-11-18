import { forwardRef, useState } from 'react';
import { DetailsInputProps } from './details-input-types';

import './details-input.scss';

export const DetailsInput = forwardRef<HTMLInputElement, DetailsInputProps>(
	({ label, id, type, inputErrorHandler }, ref) => {
		const [error, setError] = useState<string | null>(null);

		const handleOnChange = (value: string) => {
			if (!isInputValid(value)) {
				inputErrorHandler(false);
			} else {
				inputErrorHandler(true);
				setError(null);
			}
		};

		const isInputValid = (value: string) => {
			if (!value) {
				setError(' - cannot be empty');
				return false;
			}

			switch (type) {
				case 'tel':
					const phoneRegex = /(([+]([0-9]{1,2}))?([0-9]{9}))/g;
					if (!phoneRegex.test(value)) {
						console.log(value);
						setError(' - insert correct number');
						return false;
					}
					break;
				case 'email':
					const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]{2,}/g;
					if (!emailRegex.test(value)) {
						setError(' - insert correct email');
						return false;
					}
					break;
				case 'text':
				default:
					break;
			}

			return true;
		};

		return (
			<div className='details-input'>
				<label className={`${error ? 'error' : ''}`} htmlFor={id}>{`${label}${
					error ? error : ''
				}`}</label>
				<input
					id={id}
					ref={ref}
					type={type}
					onChange={(e) => handleOnChange(e.target.value)}
				/>
			</div>
		);
	}
);
