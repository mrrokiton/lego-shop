import { PartDetailsProps } from './part-details-types';

import './part-details.scss';

export const PartDetails = ({ minifigPart }: PartDetailsProps) => (
	<div className='part-details'>
		<img src={minifigPart.part_img_url} />
		<div className='part-details-info'>
			<p title={minifigPart.name} className='part-details-info-name'>
				{minifigPart.name}
			</p>
			<p className='part-details-info-code'>{minifigPart.part_num}</p>
		</div>
	</div>
);
