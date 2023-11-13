import { Minifig } from '../../utils/util-types';

export type PickingListProps = {
	minifigs: Minifig[];
	selectedMinifig: string | null;
	setSelectedMinifig: React.Dispatch<string>;
	IsModalOpen: boolean;
	setIsModalOpen: React.Dispatch<boolean>;
	setModalMinifigId: React.Dispatch<string>;
};
