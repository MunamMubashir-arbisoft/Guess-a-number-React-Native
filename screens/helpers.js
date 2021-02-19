
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

export const getGuessNumber = (guessList, guess) => guessList.indexOf(guess) + 1;

