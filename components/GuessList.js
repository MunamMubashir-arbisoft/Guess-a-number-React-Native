import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const GuessList = ({ guesses, style, horizontal, reverse }) => {
    const guessListToRender = reverse ? guesses.slice(0).reverse() : guesses

    const getGuessNumber = (guess) => {
        return guesses.indexOf(guess) + 1
    }

	const renderGuessItem = (itemData) => {
		return (
			<Card style={styles.contentCard}>
				<NumberContainer
					labelText={`Guess #${getGuessNumber(itemData.item)}`}
				>
					{itemData.item}
				</NumberContainer>
			</Card>
		);
	};

	return (
		<FlatList
            horizontal={horizontal}
			data={guessListToRender}
			renderItem={renderGuessItem}
            keyExtractor={(item) => guesses.indexOf(item)}
            contentContainerStyle={style}
		></FlatList>
	);
};

const styles = StyleSheet.create({
	contentCard: {
		alignItems: "center",
		marginVertical: 5,
	},
});

export default GuessList;
