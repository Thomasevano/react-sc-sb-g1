import React from "react";
import { icons } from "./ui/atoms/Icon"
import Header from "./ui/molecules/Header";

export default function App() {
	return (
			<div className="App">
				<Header iconsList={[icons.avatar, icons.notification, icons.social, icons.search]}></Header>
				<Header iconsList={[icons.leftIcon, icons.discover, icons.social, icons.notification, icons.search]}></Header>
				<Header iconsList={[icons.leftIcon, icons.social]}></Header>
			</div>
	);
}