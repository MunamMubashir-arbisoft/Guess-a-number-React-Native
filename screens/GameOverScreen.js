import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import StyledButton from "../components/StyledButton";
import colors from "../constants/colors";
import default_styles from "../constants/default-styles";
import GuessList from "../components/GuessList";


const GameOverScreen = (props) => {
    let guessesMade = props.guessesMade;
	const numberOfGuesses = guessesMade.length;
	return (
		<View style={styles.screen}>
			<View style={styles.titleContainer}>
				<Text style={default_styles.title}>Game is over!</Text>
			</View>

			<View style={styles.imageContainer}>
				<Image source={require("../assets/success.png")} style={styles.image} />
			</View>

			<Card style={styles.outputCard}>
				<Text style={styles.outputText}>The number was</Text>
				<NumberContainer
					style={styles.numberContainer}
					fontStyle={styles.numberContainerFontStyle}
				>
					{props.userChoice}
				</NumberContainer>
			</Card>

			<Card style={styles.outputCard}>
				<Text style={styles.outputText}>It took</Text>
				<NumberContainer
					style={styles.numberContainer}
					fontStyle={styles.numberContainerFontStyle}
				>
					{numberOfGuesses}
				</NumberContainer>
				<Text style={styles.outputText}>attemps!</Text>
			</Card>
			<Card style={styles.headingCard}>
				<Text style={styles.headingText}>Guesses:</Text>
			</Card>
                <GuessList guesses={guessesMade} horizontal={true} style={styles.guessesList}/>
			<View style={styles.buttonContainer}>
				<StyledButton
					style={{
						backgroundColor: colors.primary,
						borderColor: colors.primary,
						...styles.newGameButton,
					}}
					textStyle={styles.newGameBtnText}
					onPress={() => props.onRestart()}
				>
					<AntDesign name="reload1" size={22} color="white" /> New Game
				</StyledButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignContent: "center",
        padding: 5,
        paddingVertical: 25,
	},
	outputCard: {
		flexDirection: "row",
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 30,
		marginVertical: 10,
	},
	titleContainer: {
		alignSelf: "center",
	},
	outputText: {
		fontSize: 26,
		fontWeight: "300",
		alignItems: "center",
		color: colors.primary,
	},
	buttonContainer: {
		alignSelf: "center",
		paddingVertical: 7,
		justifyContent: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	imageContainer: {
		width: 200,
		height: 200,
		alignSelf: "center",
		borderRadius: 100,
		borderWidth: 4,
		marginVertical: 10,
		overflow: "hidden",
	},
	numberContainer: {
		paddingVertical: 3,
		paddingHorizontal: 8,
		marginHorizontal: 10,
	},
	numberContainerFontStyle: {
		fontSize: 28,
	},
	newGameButton: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginTop: 10,
	},
	newGameBtnText: {
		fontSize: 20,
	},
	guessesList: {
		flexDirection: "row",
		justifyContent: "center",
        alignItems: "center",
	},
	contentCard: {
		alignItems: "center",
		justifyContent: "space-around",
	},
	headingCard: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 5,
		alignSelf: "center",
		padding: 10,
	},
	headingText: {
		fontSize: 22,
		fontFamily: "poppins",
		color: colors.primary,
    },
    guessesListCard: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    }
});

export default GameOverScreen;
