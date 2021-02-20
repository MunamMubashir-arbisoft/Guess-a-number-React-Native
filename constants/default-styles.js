import React from "react";
import { StyleSheet } from "react-native";
import colors from "./colors";

const default_styles = StyleSheet.create({
	title: {
		fontFamily: "poppins",
		fontSize: 28,
		color: colors.primary
	},
	bodyText: {
		fontFamily: "poppins-light",
		fontSize: 18,
	},
	m5: {
		margin: 5,
	},
});

export default default_styles;
