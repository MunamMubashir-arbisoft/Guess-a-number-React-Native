import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";

import InputField from "../components/InputField";
import NumberContainer from "../components/NumberContainer";
import StyledButton from "../components/StyledButton";
import Card from "../components/Card";
import colors from "../constants/colors";
import default_styles from "../constants/default-styles";

const StartGameScreen = (props) => {
	const [enteredNumber, setEnteredNumber] = useState("");
	const [hasConfirmed, setHasConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberInputValidater = (newValue) => {
		setEnteredNumber(newValue.replace(/[^0-9]/g, ""));
	};

	const resetEnteredInput = () => {
		setEnteredNumber("");
		setHasConfirmed(false);
	};

	const confirmEnteredInput = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (!chosenNumber || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid Number!", "Number should be between 1 and 99", [
				{ text: "Okay", style: "destructive", onPress: resetEnteredInput },
			]);
			return;
		}
		Keyboard.dismiss();
		setHasConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredNumber("");
	};

	let confirmedOutput;
	if (hasConfirmed) {
		confirmedOutput = (
			<Card style={styles.confirmedOutputCard}>
				<Text style={default_styles.bodyText}>You chose:</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<StyledButton
					style={ { backgroundColor: colors.primary, borderColor: colors.primary, ...styles.chooseButton}}
					onPress={() => props.startGametoggle(selectedNumber)}
				>
					Start Game
				</StyledButton>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={default_styles.title}>Start a new game</Text>

				<Card style={styles.inputCard}>
					<InputField
						placeholder="Enter a number"
						style={styles.input}
						blurOnSubmit
						keyboardType="number-pad"
						maxLength={2}
						onChangeText={numberInputValidater}
						value={enteredNumber}
					/>
					
					<View style={styles.buttonContainer}>
						<StyledButton
							onPress={resetEnteredInput}
							style={{ backgroundColor: "grey", borderColor: "grey", ...styles.button }}
						>
							Reset
						</StyledButton>
						<StyledButton onPress={confirmEnteredInput} style={styles.button}>
							Confirm
						</StyledButton>
					</View>
				</Card>

				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	inputCard: {
		marginTop: 20,
		margin: 5,
		width: "85%",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 20,
	},
	buttonContainer: {
		width: "50%",
		flexDirection: "row",
		justifyContent: "center",
	},
	button: {
		width: 100,
		marginHorizontal: 3,
		alignItems: "center",
	},
	input: {
		marginBottom: 15,
		width: "60%",
		height: 40,
	},
	confirmedOutputCard: {
		marginTop: 30,
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},

	chooseButton: {
		marginTop: 10,
	},
});

export default StartGameScreen;
