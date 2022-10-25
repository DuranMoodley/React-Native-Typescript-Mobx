import { action, makeObservable, observable } from 'mobx';
import { LottoNumber } from '../data/data';
import { randomNumberGeneration } from '../utils/utils';

class BetStore {
	userLottoSelection: LottoNumber[] = [];
	maxSelection: boolean = false;

	constructor() {
		makeObservable(this, {
			addUserSelection: action,
			resetSelection: action,
			luckyNumberSelection: action,
			userLottoSelection: observable,
			maxSelection: observable
		}, { autoBind: true });
	}

	isSelectionValid() {
		this.maxSelection = this.userLottoSelection.length === 5 ? true : false;
	}

	addUserSelection(userSelection: LottoNumber) {
		const isLottoNumberFound = this.userLottoSelection.filter(item => item.number === userSelection.number).length > 0 ? true : false;

		// Check if the number selected is found in the current user selection. 
		if (!isLottoNumberFound) {
			this.userLottoSelection.push(userSelection);
		}
		else {
			// If found, unselect the lotto number from the user selection.
			userSelection.isSelected = false;
			const currentSelection = this.userLottoSelection.filter(item => item.number !== userSelection.number);
			this.userLottoSelection = currentSelection;
		}

		this.isSelectionValid();
	}

	resetSelection() {
		this.userLottoSelection = [];
		this.isSelectionValid();
	}

	luckyNumberSelection() {
		for (let index = 0; index < 5; index++) {
			let randomNumber = randomNumberGeneration();
			this.userLottoSelection.push({ number: randomNumber, isSelected: true });
		}

		this.isSelectionValid();
	}
}

const betStore = new BetStore();
export default betStore;
