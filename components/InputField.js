import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Colors from "../constants/colors";

const InputField = (props) => {
	return (
		<TextInput
			{...props}
			placeholder="Enter a number"
			style={{ ...styles.numberInput, ...props.style }}
		/>
	);
};

const styles = StyleSheet.create({
	numberInput: {
		textAlign: "center",
		fontSize: 18,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderBottomColor: Colors.primary,
		borderBottomWidth: 2,
		color: Colors.primary,
	},
});

export default InputField;
