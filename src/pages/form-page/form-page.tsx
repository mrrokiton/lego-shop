import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../general/route-paths';
import { SummaryBar } from '../../components/summary-bar/summary-bar';
import { InputErrors } from '../../components/details-input/details-input-types';

import './form-page.scss';
import { DetailsInput } from '../../components/details-input/details-input';
import { UserDetails } from '../../utils/util-types';
const defaultErrors = {
	name: false,
	surname: false,
	phoneNumber: false,
	email: false,
	birthDate: false,
	address: false,
	city: false,
	state: false,
	zipCode: false,
};

export const FormPage = () => {
	const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
	const [inputErrors, setInputErrors] = useState<InputErrors>(defaultErrors);

	const nameInputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const surnameInputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const phoneNumberInputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const emailInputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const birthDateInputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const addressInputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const cityInputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const stateInputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const zipCodeInputRef = useRef() as MutableRefObject<HTMLInputElement>;

	const location = useLocation();
	const navigate = useNavigate();
	const minifigId = location.state.minifigId;

	useEffect(() => {
		let isError = false;
		for (const [key, value] of Object.entries(inputErrors)) {
			if (!value) {
				isError = true;
				break;
			}
		}
		setIsSubmitDisabled(isError);
	}, [inputErrors]);

	const submitHandler = () => {
		const userDetails: UserDetails = {
			name: nameInputRef.current.value,
			surname: surnameInputRef.current.value,
			phoneNumber: Number(phoneNumberInputRef.current.value),
			email: emailInputRef.current.value,
			birthDate: birthDateInputRef.current.value,
			address: addressInputRef.current.value,
			city: cityInputRef.current.value,
			state: stateInputRef.current.value,
			zipCode: zipCodeInputRef.current.value,
		};

		console.log('submitted', userDetails);
		navigate(RoutePaths.HOME);
	};

	return (
		<div className='form-page'>
			<div className='form-page-container'>
				<h2>SHIPPING DETAILS</h2>
				<div className='form-page-container-details'>
					<div className='form-page-container-details-split'>
						<DetailsInput
							inputErrorHandler={(isValid) =>
								setInputErrors({ ...inputErrors, name: isValid })
							}
							label='Name'
							id='name'
							type='text'
							ref={nameInputRef}
						/>
						<DetailsInput
							inputErrorHandler={(isValid) =>
								setInputErrors({ ...inputErrors, surname: isValid })
							}
							label='Surname'
							id='surname'
							type='text'
							ref={surnameInputRef}
						/>
					</div>
					<DetailsInput
						inputErrorHandler={(isValid) =>
							setInputErrors({ ...inputErrors, phoneNumber: isValid })
						}
						label='Phone Number'
						id='phoneNumber'
						type='tel'
						ref={phoneNumberInputRef}
					/>
					<DetailsInput
						inputErrorHandler={(isValid) =>
							setInputErrors({ ...inputErrors, email: isValid })
						}
						label='Email'
						id='email'
						type='email'
						ref={emailInputRef}
					/>
					<DetailsInput
						inputErrorHandler={(isValid) =>
							setInputErrors({ ...inputErrors, birthDate: isValid })
						}
						label='Date of birth'
						id='birthDate'
						type='date'
						ref={birthDateInputRef}
					/>
					<DetailsInput
						inputErrorHandler={(isValid) =>
							setInputErrors({ ...inputErrors, address: isValid })
						}
						label='Address'
						id='address'
						type='text'
						ref={addressInputRef}
					/>
					<DetailsInput
						inputErrorHandler={(isValid) =>
							setInputErrors({ ...inputErrors, city: isValid })
						}
						label='City'
						id='city'
						type='text'
						ref={cityInputRef}
					/>

					<div className='form-page-container-details-split'>
						<DetailsInput
							inputErrorHandler={(isValid) =>
								setInputErrors({ ...inputErrors, state: isValid })
							}
							label='State'
							id='state'
							type='text'
							ref={stateInputRef}
						/>
						<DetailsInput
							inputErrorHandler={(isValid) =>
								setInputErrors({ ...inputErrors, zipCode: isValid })
							}
							label='Zip Code'
							id='zipCode'
							type='text'
							ref={zipCodeInputRef}
						/>
					</div>
				</div>
			</div>
			<SummaryBar
				minifigId={minifigId}
				onSubmit={submitHandler}
				isSubmitDisabled={isSubmitDisabled}
			/>
		</div>
	);
};
