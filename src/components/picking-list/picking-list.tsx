import { PickingTile } from '../picking-tile/picking-tile';
import { PickingListProps } from './picking-list-types';

import './picking-list.scss';

export const PickingList = ({
	minifigs,
	selectedMinifig,
	setSelectedMinifig,
	IsModalOpen,
	setIsModalOpen,
	setModalMinifigId,
}: PickingListProps) => {
	const handleOnDetails = (minifigId: string) => {
		if (!IsModalOpen) {
			setModalMinifigId(minifigId);
			setIsModalOpen(true);
		}
	};

	return (
		<div className='picking-list'>
			{minifigs.map((minifig) => (
				<PickingTile
					minifig={minifig}
					onClick={() => setSelectedMinifig(minifig.set_num)}
					onDetails={() => handleOnDetails(minifig.set_num)}
					isSelected={minifig.set_num === selectedMinifig}
					key={minifig.set_num}
				/>
			))}
		</div>
	);
};
