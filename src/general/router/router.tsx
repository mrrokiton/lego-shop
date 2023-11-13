import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from '../route-paths';
import { HomePage } from '../../pages/home-page/home-page';
import { PickPage } from '../../pages/pick-page/pick-page';
import { FormPage } from '../../pages/form-page/form-page';
import { NotFound } from '../not-found/not-found';

export const Router = () => {
	return (
		<Routes>
			<Route path={RoutePaths.HOME} element={<HomePage />} />
			<Route path={RoutePaths.PICK} element={<PickPage />} />
			<Route path={RoutePaths.FORM} element={<FormPage />} />
			<Route path={RoutePaths.NOTFOUND} element={<NotFound />} />
		</Routes>
	);
};
