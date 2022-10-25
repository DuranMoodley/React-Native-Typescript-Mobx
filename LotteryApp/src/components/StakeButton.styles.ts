import Colors from "../themes/colors/Colors";
export default () => {

	const { button, stakeButton } = Colors;
	return {
		button: {
			backgroundColor: stakeButton?.background,
			padding: 10,
			borderRadius: 10,
			margin: 10
		},
		buttonText: {
			color: button?.text,
		},
	}
}