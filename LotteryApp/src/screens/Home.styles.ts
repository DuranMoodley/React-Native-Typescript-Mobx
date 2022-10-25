import Colors from "../themes/colors/Colors";

export default () => {
	const { input, button, container, card, shadow, bottomContainer } = Colors;

	return {
		container: {
			flex: 1,
			backgroundColor: container?.background,
		},
		topContainer: {
			marginTop: 10,
			marginBottom: 10,
			width: '50%',
			height: 40,
			borderRadius: 20,
			backgroundColor: card?.background,
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center'
		},
		textMessage: {
			alignSelf: 'center',
			fontSize: 12,
			fontStyle: 'italic',
		},
		gridContainer: {
			height: '50%',
			padding: 10
		},
		gridView: {
			margin: 10,
			backgroundColor: card?.background,
			borderRadius: 20,
			elevation: 20,
			shadowColor: shadow?.background,
		},
		input: {
			width: 300,
			height: 40,
			backgroundColor: input?.background,
			marginTop: 10,
			paddingVertical: 10,
			paddingHorizontal: 15,
			borderColor: input?.border,
			borderWidth: 1,
			borderRadius: 15,
			fontSize: 16,
		},
		textInputContainer: {
			alignItems: 'center',
		},
		button: {
			backgroundColor: button?.background,
			padding: 10,
			borderRadius: 20,
			margin: 10,
			width: 150,
			alignItems: 'center',
			height: 40
		},
		buttonText: {
			color: button?.text,
		},
		placeBetButtonContainer: {
			justifyContent: 'space-between',
			flexDirection: 'row',
		},
		bottomContainer: {
			backgroundColor: bottomContainer?.background,
			height: '50%',
			borderTopLeftRadius: 30,
			borderTopRightRadius: 30
		},
		stakeButtonContainer: {
			padding: 10
		}
	}
}