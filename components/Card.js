import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Card = (props) => {
	return (
		<View style={{ ...styles.container, ...props.style }}>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		elevation: 8,
		shadowColor: Colors.accent,
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowRadius: 6,
		shadowOpacity: 0.25,
		backgroundColor: "white",
		borderRadius: 5,
	},
});

export default Card;
