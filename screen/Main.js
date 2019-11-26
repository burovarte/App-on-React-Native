import React, { Component } from "react";
import { Button, View, TextInput } from "react-native";

export default class Main extends Component {
	static navigationOptions = {
		title: "Программа написания имени"
	};

	constructor(props) {
		super(props);
		this.state = { name: "", secName: "" };
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<TextInput
					style={{
						width: 200,
						height: 40,
						borderWidth: 4,
						borderColor: "blue",
						borderRadius: 4,
						margin: 10
					}}
					value={this.state.textValue}
					keyboardType="default"
					onChangeText={(text) => this.setState({ name: text })}
					placeholder="Напиши свое имя"
				/>
				<TextInput
					style={{
						width: 200,
						height: 40,
						borderWidth: 4,
						borderColor: "blue",
						borderRadius: 4,
						margin: 10
					}}
					value={this.state.textValue}
					keyboardType="default"
					onChangeText={(text) => this.setState({ secName: text })}
					placeholder="Напиши свою фамилию"
				/>
				<Button
					title="НАЖМИ СЮДА"
					onPress={() => {
						this.props.navigation.navigate("Next", {
							name: this.state.name,
							secName: this.state.secName
						});
					}}
				/>
			</View>
		);
	}
}
