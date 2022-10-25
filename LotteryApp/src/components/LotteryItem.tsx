/**
 * Shareable component consisting of the lotto numbers shown on the Grid.
 * User can select a number. This will change the color of the number.
 */

// Internal Imports.
import { Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

// Custom imports.
import { LottoNumber } from '../data/data';

// Styles.
import LotteryItemStyles from './LotteryItem.styles';

export type Props = {
	item: LottoNumber,
	lottoNumberSelection: Function,
}

const LotteryItem: React.FC<Props> = ({
	item,
	lottoNumberSelection
}) => {
	const [selected, setSelected] = useState<boolean>(false);
	const { itemContainer = {}, itemName = {} } = LotteryItemStyles(item.isSelected);

	const lottoNumberOnPress = (item: LottoNumber) => {
		setSelected(!selected);
		lottoNumberSelection(item);
	}
	return (
		<TouchableOpacity style={itemContainer} onPress={() => { lottoNumberOnPress(item) }}>
			<Text style={itemName} testID={`lottoNumber${item.number}`}>{item.number}</Text>
		</TouchableOpacity>
	)
}

export default LotteryItem;