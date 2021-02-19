import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
    
	return (
        <View style={styles.container}>
            {props.labelText && <Text style={styles.label}>{props.labelText}</Text>}
            <View style={{ ...styles.numberContainer, ...props.style }}>
                <Text style={{ ...styles.numberText, ...props.fontStyle }}>
                    {props.children}
                </Text>
            </View>
        </View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    label: {
        color: Colors.primary
    },
	numberContainer: {
		borderWidth: 2,
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 15,
		margin: 5,
		alignItems: "center",
	},
	numberText: {
		fontSize: 50,
		fontFamily: "poppins-bold",
        color: Colors.accent,
        
	},
});
