import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { ActivityIndicator } from "react-native";
import muller from "../muller.jpg";
import funnygif from "../2GU.gif";
export default class Next extends Component {
	static navigationOptions = {
		title: "Результат"
	};
	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Image
					style={{ width: "80%", height: "40%", marginBottom: 15 }}
					source={funnygif}
				/>
				<Text>
					А вас, {this.props.navigation.getParam("name")}{" "}
					{this.props.navigation.getParam("secName")}, я попрошу остаться!
				</Text>
				<Image
					style={{ width: "100%", height: "40%", margin: 25 }}
					source={muller}
				/>
			</View>
		);
	}
}
