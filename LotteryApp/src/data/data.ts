export interface LottoNumber {
	number: number;
	isSelected: boolean;
};

export interface Stake {
	id: number;
	stake: number;
}

export const Stakes: Stake[] = [
	{ id: -1, stake: 100 },
	{ id: 0, stake: 200 },
	{ id: 1, stake: 300 },
	{ id: 2, stake: 500 },
	{ id: 3, stake: 700 },
	{ id: 4, stake: 800 },
	{ id: 5, stake: 1000 }];





