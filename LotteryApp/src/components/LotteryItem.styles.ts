import Colors from "../themes/colors/Colors";

export default (selectedItem: boolean) => {
	const { lotteryItem } = Colors;
	return {
		itemContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 30,
			height: 30,
			backgroundColor: selectedItem ? lotteryItem?.buttonSelected : lotteryItem?.buttonUnselected,
		},
		itemName: {
			fontSize: 11,
			color: lotteryItem?.fontColor,
			fontWeight: '600',
		},
	}
};