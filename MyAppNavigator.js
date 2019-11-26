import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "./screen/Main";
import Next from "./screen/Next";

const Route = createStackNavigator(
	{
		Home: { screen: Main },
		Next: { screen: Next }
	},
	{
		initialRouteName: "Home"
	}
);

const AppContainer = createAppContainer(Route);

export default class MyComponent extends Component {
	render() {
		return <AppContainer />;
	}
}
