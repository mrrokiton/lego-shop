import { MouseEventHandler } from 'react';
import { Minifig } from '../../utils/util-types';

export type PickingTileProps = {
	minifig: Minifig;
	onClick: MouseEventHandler<HTMLDivElement>;
	onDetails: MouseEventHandler<HTMLParagraphElement>;
	isSelected?: boolean;
};
