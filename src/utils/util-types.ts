export type Minifig = {
	name: string;
	set_num: string;
	num_parts: number;
	set_img_url: string;
};

export type MinifigPart = {
	name: string;
	part_num: string;
	part_img_url: string;
	quantity: number;
};

export type BasicMinifigApiResponse = {
	results: Minifig[];
};

export type PartsMinifigApiResponse = {
	results: {
		part: MinifigPart;
		quantity: number;
	}[];
};

export type ShipmentDetails = {
	name: string;
	surname: string;
	phoneNumber: number;
	email: string;
	birthDate: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	minifigId: string;
};
