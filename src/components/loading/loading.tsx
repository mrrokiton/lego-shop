import loadingGif from '../../assets/loading/loading.gif';

import './loading.scss';

export const Loading = () => (
	<div className='loading'>
		<p>LOADING</p>
		<img src={loadingGif} alt='loading gif' />
	</div>
);
