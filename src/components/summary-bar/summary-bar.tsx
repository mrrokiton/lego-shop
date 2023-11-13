import { useEffect, useState } from 'react';
import { Minifig, MinifigPart } from '../../utils/util-types';
import { BaseButton } from '../base-button/base-button';
import { SummaryBarProps } from './summary-bar-types';

import './summary-bar.scss';
import {
	getMiniFigDetails,
	getMinifigParts,
} from '../../utils/helpers/minifig-helper';
import { PartDetails } from '../part-details/part-details';

export const SummaryBar = ({
	minifigId,
	onSubmit,
	isSubmitDisabled,
}: SummaryBarProps) => {
	const [minifigParts, setMinifigParts] = useState<MinifigPart[]>([]);
	const [minifigDetails, setMinifigDetails] = useState<Minifig | null>(null);

	useEffect(() => {
		getMiniFigDetails(minifigId, setMinifigDetails);
		getMinifigParts(minifigId, setMinifigParts);
	}, []);

	return (
		minifigParts.length > 0 &&
		minifigDetails && (
			<div className='summary-bar'>
				<div className='summary-bar-container'>
					<h2>SUMMARY</h2>
					<div className='summary-bar-container-img'>
						<img src={minifigDetails.set_img_url} alt='minifig image' />
						<p>{minifigDetails.name}</p>
					</div>
					<p>{`There are ${minifigParts.length} parts in this minifig:`}</p>
					<div className='summary-bar-container-parts'>
						{minifigParts.map((minifigPart) => (
							<PartDetails
								minifigPart={minifigPart}
								key={minifigPart.part_num}
							/>
						))}
					</div>
				</div>
				{onSubmit && typeof isSubmitDisabled === 'boolean' && (
					<div className='summary-bar-footer'>
						<BaseButton
							buttonText='SUBMIT'
							onClick={onSubmit}
							isDisabled={isSubmitDisabled}
						/>
					</div>
				)}
			</div>
		)
	);
};
