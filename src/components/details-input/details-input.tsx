import { forwardRef, useState } from 'react';
import { DetailsInputProps } from './details-input-types';

import './details-input.scss';

export const DetailsInput = forwardRef<HTMLInputElement, DetailsInputProps>(
	({ label, id, type, inputErrorHandler }, ref) => {
		const [error, setError] = useState<string | null>(null);

		const handleOnChange = (value: string) => {
			if (!value) {
				inputErrorHandler(false);
				setError(' - cannot be empty');
			} else {
				inputErrorHandler(true);
				setError(null);
			}
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
