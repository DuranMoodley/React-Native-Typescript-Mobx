/**
 * Allows the user to select lotto numbers from the grid.
 * User can place a bet, enter a stake and choose a lucky number selection.
 */

// Internal Imports.
import React, { useState, useEffect } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { View, TouchableOpacity, FlatList, TextInput, Text, Alert } from 'react-native';
import { observer } from 'mobx-react';

// Custom Imports.
import LotteryItem from '../components/LotteryItem';
import StakeButton from '../components/StakeButton';
import { LottoNumber, Stakes } from '../data/data';
import { generateLottoNumbers } from '../utils/utils';
import betStore from '../state/mobXStore';
import { BET_TITLE, BET_SUCCESSFULL, ERROR_TITLE, ERROR_MESSAGE_STAKE, ERROR_MESSAGE_SELECTION } from '../utils/message';

// Styles.
import HomeStyles from './Home.styles';

const Home: React.FC = () => {
	const [lottoNumbers, setLottoNumbers] = useState<LottoNumber[]>([]);
	const [userStake, setUserStake] = useState<string>();
	const {
		container,
		gridContainer,
		gridView,
		input,
		textInputContainer = {},
		button = {},
		buttonText,
		topContainer = {},
		placeBetButtonContainer = {},
		textMessage = {},
		bottomContainer = {},
		stakeButtonContainer = {}
	} = HomeStyles();

	useEffect(() => {
		setLottoNumbers(generateLottoNumbers(80));
	}, [])

	const setUserBet = (stake: string) => {
		setUserStake(stake);
	}

	const addUserSelection = (lottoNumber: LottoNumber) => {
		lottoNumber.isSelected = true;
		betStore.addUserSelection(lottoNumber);
	}

	const selectRandomNumbers = () => {
		betStore.resetSelection();
		betStore.luckyNumberSelection();

		const randomSelection = lottoNumbers.map((lottoNumber) => {
			return betStore.userLottoSelection.find(selection => selection.number === lottoNumber.number) ? { number: lottoNumber.number, isSelected: true } : { ...lottoNumber, isSelected: false }
		})
		setLottoNumbers(randomSelection);
	}

	const updateState = () => {
		setLottoNumbers(current =>
			current.map(obj => {
				return { ...obj, isSelected: false };
			}),
		);
	};

	const alertDialog = (title: string, message: string) => {
		Alert.alert(
			title,
			message,
			[
				{
					text: "OK", onPress: () => { }
				}
			]
		);
	}

	const showPlaceBetDialog = () => {
		if (betStore.maxSelection) {
			if (userStake !== undefined && userStake?.length > 0) {
				betStore.resetSelection();
				setUserStake('');
				updateState();
				alertDialog(BET_TITLE, BET_SUCCESSFULL);
			}
			else {
				alertDialog(ERROR_TITLE, ERROR_MESSAGE_STAKE);
			}
		}
		else {
			alertDialog(ERROR_TITLE, ERROR_MESSAGE_SELECTION);
		}
	}
	return (
		<View style={container}>
			<View style={topContainer}>
				<Text>Lotto</Text>
			</View>
			<Text style={textMessage}><Text style={[textMessage, { fontWeight: 'bold' }]}>Choose</Text> 5 numbers</Text>
			<View style={gridContainer}>
				<FlatGrid
					itemDimension={30}
					data={lottoNumbers}
					style={gridView}
					spacing={10}
					renderItem={({ item }) => (
						<LotteryItem item={item} lottoNumberSelection={addUserSelection} />
					)}
				/>
			</View>
			<View style={bottomContainer}>
				<View style={stakeButtonContainer}>
					<FlatList
						data={Stakes}
						renderItem={({ item }) => (
							<StakeButton item={item} setUserBet={setUserBet} />
						)}
						showsHorizontalScrollIndicator={false}
						keyExtractor={item => item.id.toString()}
						horizontal={true}
					/>
				</View>
				<View style={textInputContainer}>
					<TextInput
						onChangeText={(text) => setUserStake(text)}
						value={userStake}
						testID={"stake-text-input"}
						style={input}
						placeholder="Enter your stake" />
				</View>
				<View style={placeBetButtonContainer}>
					<TouchableOpacity style={button} onPress={() => showPlaceBetDialog()}>
						<Text style={buttonText}>Place Bet</Text>
					</TouchableOpacity>
					<TouchableOpacity style={button} onPress={() => selectRandomNumbers()}>
						<Text style={buttonText}>Lucky Pick</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default observer(Home);