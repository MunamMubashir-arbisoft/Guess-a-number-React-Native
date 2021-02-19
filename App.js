import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

const loadFonts = () => {
	return Font.loadAsync({
		poppins: require("./assets/fonts/Poppins-Regular.ttf"),
		"poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
		"poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
	});
};

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessesMade, setGuessesMade] = useState([]);
	const [isAssetLoaded, setIsAssetLoaded] = useState(false);

	if (!isAssetLoaded) {
		return (
			<AppLoading
				startAsync={loadFonts}
				onFinish={() => setIsAssetLoaded(true)}
				onError={(err) => console.log("this is the error", err)}
			/>
		);
	}

	const configNewGame = () => {
		setGuessesMade([]);
		setUserNumber(null);
	};

	const userNumberHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	let content = <StartGameScreen startGametoggle={userNumberHandler} />;

	if (userNumber && guessesMade.length === 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={setGuessesMade} />
		);
	} else if (guessesMade.length > 0) {
		content = (
			<GameOverScreen
				userChoice={userNumber}
				guessesMade={guessesMade}
				onRestart={configNewGame}
			/>
		);
	}

	return (
		<View style={styles.screen}>
			<Header title="Guess a Number" />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
