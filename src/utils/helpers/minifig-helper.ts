import {
	getMiniFigDetailsApi,
	getMiniFigs,
	getMiniFigsPartsApi,
} from '../http/minifig-api';
import { Minifig, MinifigPart } from '../util-types';

const generateUniqueRandomNumbers = (
	min: number,
	max: number,
	count: number
): number[] => {
	const numbers = [];
	while (numbers.length < count) {
		const randomNumber = Math.floor(Math.random() * max) + min;
		if (numbers.indexOf(randomNumber) === -1) {
			numbers.push(randomNumber);
		}
	}

	return numbers;
};

export const getThreeRandomMinifigs = async (
	setMinifigs: React.Dispatch<Minifig[]>
) => {
	let minifigs: Minifig[] = [];
	try {
		minifigs = (await getMiniFigs()).results;
	} catch (error) {
		setMinifigs([]);
	}

	const randomNumbers = generateUniqueRandomNumbers(0, 99, 3);
	setMinifigs(randomNumbers.map((randomNumber) => minifigs[randomNumber]));
};

export const getMinifigParts = async (
	minifigId: string,
	setMinifigParts: React.Dispatch<MinifigPart[]>
) => {
	let minifigs: MinifigPart[] = [];
	try {
		minifigs = (await getMiniFigsPartsApi(minifigId)).results.map((elem) => {
			const quantity = elem.quantity;
			return {
				...elem.part,
				quantity,
			};
		});
	} catch (error) {
		setMinifigParts([]);
	}

	setMinifigParts(minifigs);
};

export const getMiniFigDetails = async (
	minifigId: string,
	setMinifigDetails: React.Dispatch<Minifig | null>
) => {
	let minifigDetails: Minifig | null = null;
	try {
		minifigDetails = await getMiniFigDetailsApi(minifigId);
	} catch (error) {
		setMinifigDetails(null);
	}

	setMinifigDetails(minifigDetails);
};
