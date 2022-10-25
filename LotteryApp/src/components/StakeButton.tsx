/**
 * Shareable component for common stake options that the user can select.
 */

// Internal Imports.
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

// Custom Imports.
import { Stake } from '../data/data';

// Styles.
import StakeButtonStyles from './StakeButton.styles';

export type Props = {
	item: Stake,
	setUserBet: Function
}
const StakeButton: React.FC<Props> = ({
	item,
	setUserBet
}) => {
	const { button, buttonText } = StakeButtonStyles();
	return (
		<View style={button}>
			<TouchableOpacity onPress={() => { setUserBet(item.stake.toString()) }}>
				<Text
					style={buttonText}>
					{item.stake}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default StakeButton;