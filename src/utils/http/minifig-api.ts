import {
	BasicMinifigApiResponse,
	Minifig,
	PartsMinifigApiResponse,
} from '../util-types';
import { apiKey, basicApiUrl } from './basic-api';

export const getMiniFigs = async (): Promise<BasicMinifigApiResponse> => {
	const apiUrl = `${basicApiUrl}/?key=${apiKey}`;

	try {
		const response = await fetch(apiUrl);
		return await response.json();
	} catch (error) {
		console.log('minifig fetch error', error);
		throw error;
	}
};

export const getMiniFigsPartsApi = async (
	minifigId: string
): Promise<PartsMinifigApiResponse> => {
	const apiUrl = `${basicApiUrl}/${minifigId}/parts/?key=${apiKey}`;

	try {
		const response = await fetch(apiUrl);
		return await response.json();
	} catch (error) {
		console.log('minifig parts fetch error', error);
		throw error;
	}
};

export const getMiniFigDetailsApi = async (
	minifigId: string
): Promise<Minifig> => {
	const apiUrl = `${basicApiUrl}/${minifigId}/?key=${apiKey}`;

	try {
		const response = await fetch(apiUrl);
		return await response.json();
	} catch (error) {
		console.log('minifig details fetch error', error);
		throw error;
	}
};
