import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const StyledButton = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={{ ...styles.button, ...props.style }}>
				<Text style={{ ...styles.buttonText, ...props.textStyle }}>
					{props.children}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		borderColor: colors.accent,
		backgroundColor: colors.accent,
		borderWidth: 2,
		borderRadius: 4,
		paddingHorizontal: 12,
		paddingVertical: 6,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
	},
});

export default StyledButton;
