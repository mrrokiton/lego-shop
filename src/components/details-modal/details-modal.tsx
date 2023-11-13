import { BaseButton } from '../base-button/base-button';
import Modal from 'react-modal';
import { DetailsModalProps } from './details-modal-types';
import { SummaryBar } from '../summary-bar/summary-bar';

import './details-modal.scss';

export const DetailsModal = ({
	modalMinifigId,
	isModalOpen,
	setIsModalOpen,
}: DetailsModalProps) => (
	<Modal isOpen={isModalOpen} className='details-modal' ariaHideApp={false}>
		<SummaryBar minifigId={modalMinifigId} />
		<div>
			<BaseButton buttonText='close' onClick={() => setIsModalOpen(false)} />
		</div>
	</Modal>
);
