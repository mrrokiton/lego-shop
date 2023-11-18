import { useNavigate } from 'react-router-dom';
import { BaseButton } from '../../components/base-button/base-button';
import { RoutePaths } from '../../general/route-paths';
import { PickingList } from '../../components/picking-list/picking-list';
import { getThreeRandomMinifigs } from '../../utils/helpers/minifig-helper';
import { useEffect, useState } from 'react';
import { Minifig } from '../../utils/util-types';
import { DetailsModal } from '../../components/details-modal/details-modal';

import './pick-page.scss';
import { Loading } from '../../components/loading/loading';

export const PickPage = () => {
	const [minifigs, setMinifigs] = useState<Minifig[] | null>(null);
	const [selectedMinifig, setSelectedMinifig] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalMinifigId, setModalMinifigId] = useState<string>('');

	const navigate = useNavigate();

	useEffect(() => {
		getThreeRandomMinifigs(setMinifigs);
	}, []);

	return (
		<div className='pick-page'>
			<div className='pick-page-container'>
				<h2>CHOOSE YOUR MINIFIG</h2>
				<DetailsModal
					modalMinifigId={modalMinifigId}
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				/>
				{minifigs ? (
					minifigs.length > 0 && (
						<PickingList
							minifigs={minifigs}
							selectedMinifig={selectedMinifig}
							setSelectedMinifig={setSelectedMinifig}
							IsModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
							setModalMinifigId={setModalMinifigId}
						/>
					)
				) : (
					<Loading />
				)}
				<BaseButton
					buttonText='PROCEED TO SHIPMENT'
					onClick={() =>
						navigate(RoutePaths.FORM, { state: { minifigId: selectedMinifig } })
					}
					isShadow
					isDisabled={selectedMinifig === null ? true : false}
				/>
			</div>
		</div>
	);
};
