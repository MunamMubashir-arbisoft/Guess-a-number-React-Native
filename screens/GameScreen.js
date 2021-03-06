import React, { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	Alert,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import StyledButton from "../components/StyledButton";
import GuessList from '../components/GuessList';
import colors from "../constants/colors";
import default_styles from "../constants/default-styles";

export const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomGuess = Math.floor(Math.random() * (max - min) + min);
	if (randomGuess === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomGuess;
	}
};

const GameScreen = (props) => {
	const { userChoice, onGameOver } = props;

	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, userChoice)
	);
	const [guesses, setGuesses] = useState([]);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(guesses);
		}
	}, [currentGuess, userChoice]);

	const makeAGuess = (direction) => {
		if (
			(direction === "lower" && userChoice > currentGuess) ||
			(direction === "higher" && userChoice < currentGuess)
		) {
			Alert.alert(
				"Please do not lie",
				`The target is not actually ${direction} than what is guessed`
			);
			return;
		}
		if (direction === "lower") {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess + 1;
		}
		setGuesses((prevGuesses) => [...prevGuesses, currentGuess.toString()]);
		setCurrentGuess(
			generateRandomBetween(
				currentLow.current,
				currentHigh.current,
				currentGuess
			)
		);
	};


	return (
		<View style={styles.screen}>
			<Card style={styles.contentCard}>
				<View style={default_styles.m5}>
					<Text style={default_styles.bodyText}>Opponent guessed:</Text>
				</View>
				<NumberContainer>{currentGuess}</NumberContainer>

				<Card style={styles.buttonContainer}>
					<StyledButton
						style={styles.hintButton}
						onPress={() => makeAGuess("lower")}
					>
						<AntDesign name="downcircleo" size={18} color="white" /> Lower
					</StyledButton>
					<StyledButton
						style={{
							backgroundColor: colors.primary,
							borderColor: colors.primary,
							...styles.hintButton,
						}}
						onPress={() => makeAGuess("higher")}
					>
						<AntDesign name="upcircleo" size={18} color="white" /> Higher
					</StyledButton>
				</Card>
			</Card>
			<GuessList guesses={guesses} reverse={true}/>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	hintButton: {
		marginHorizontal: 5,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		paddingHorizontal: 15,
		marginTop: 20,
		marginHorizontal: 10,
	},
	contentCard: {
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
		marginVertical: 10,
	},
});
