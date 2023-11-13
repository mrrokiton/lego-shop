import { PickingTileProps } from './picking-tile-props';

import './picking-tile.scss';

export const PickingTile = ({
	minifig,
	onClick,
	onDetails,
	isSelected = false,
}: PickingTileProps) => (
	<div
		className={`picking-tile ${isSelected ? 'selected' : ''}`}
		onClick={onClick}
	>
		<img src={minifig.set_img_url} alt='minfig image' />
		<p title={minifig.name} className='picking-tile-name'>
			{minifig.name}
		</p>
		<p className='picking-tile-details' onClick={onDetails}>
			Show details
		</p>
	</div>
);
