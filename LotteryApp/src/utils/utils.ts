import { LottoNumber } from "../data/data";

const generateLottoNumbers = (maxNumber: number) => {
	const lottoNumbers: LottoNumber[] = [];

	for (let index = 1; index <= maxNumber; index++) {
		lottoNumbers.push({
			number: index,
			isSelected: false
		})
	}

	return lottoNumbers;
};

const randomNumberGeneration = () => {
	return Math.floor(Math.random() * (80 - 1) + 1);
}

export { generateLottoNumbers, randomNumberGeneration };