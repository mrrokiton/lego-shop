import { useNavigate } from 'react-router-dom';
import { BaseButton } from '../../components/base-button/base-button';
import { RoutePaths } from '../../general/route-paths';

import './home-page.scss';

export const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className='home-page'>
			<div className='home-page-container'>
				<h1>LEGO MINIFIGS MYSTERY BOX</h1>
				<BaseButton
					onClick={() => navigate(RoutePaths.PICK)}
					buttonText="LET'S GO!"
					isShadow
				/>
			</div>
		</div>
	);
};
