import React, { Component } from "react";
import Keys from "./Keys/Keys";
import Employees from "./Employees/Employees";

// const axios = require("axios");

class Admin extends Component {
	constructor(props) {
		super(props);
		this.addKey = this.addKey.bind(this);
		this.editKey = this.editKey.bind(this);
		this.removeKey = this.removeKey.bind(this);
		this.switchEmployeeList = this.switchEmployeeList.bind(this);
		this.removeEmployee = this.removeEmployee.bind(this);
		this.chooseKey = this.chooseKey.bind(this);

		this.state = {
			keys: [
				"1111 1111",
				"2222 2222",
				"3333 3333",
				"4444 4444",
				"5555 5555",
				"6666 6666",
				"7777 7777",
				"8888 8888",
				"9999 9999",
				"1010 1010",
				"1212 1212",
				"1313 1313",
				"1414 1414",
				"1515 1515",
				"1616 1616",
				"1717 1717",
				"1818 1818",
				"1919 1919",
				"2020 2020",
				"2121 2121",
				"2323 2323",
				"2424 2424",
				"2525 2525",
				"2626 2626",
				"2727 2727",
				"2828 2828",
				"2929 2929",
				"3030 3030",
				"3131 3131",
				"3232 3232"
			],
			employees: [
				["1111 1111", "0011 0011"],
				["2222 2222", "0022 0022"],
				["3333 3333", "0033 0033"],
				["4444 4444", "0044 0044"],
				["5555 5555", "0055 0055"],
				["6666 6666", "0066 0066"],
				["7777 7777", "0077 0077"],
				["8888 8888", "0088 0088"],
				["9999 9999", "0099 0099"],
				["1010 1010", "0010 0010"],
				["1212 1212", "0012 0012"],
				["1313 1313", "0013 0013"],
				["1414 1414", "0014 0014"],
				["1515 1515", "0015 0015"],
				["1616 1616", "0016 0016"],
				["1717 1717", "0017 0017"],
				["1818 1818", "0018 0018"],
				["1919 1919", "0019 0019"],
				["2020 2020", "0020 0020"],
				["2121 2121", "0021 0021"],
				["2323 2323", "0023 0023"],
				["2424 2424", "0024 0024"],
				["2525 2525", "0025 0025"],
				["2626 2626", "0026 0026"],
				["2727 2727", "0027 0027"],
				["2828 2828", "0028 0028"],
				["2929 2929", "0029 0029"],
				["3030 3030", "0030 0030"],
				["3131 3131", "0031 0031"],
				["3232 3232", "0032 0032"]
			],
			buttonName: "Добавить сотрудника",
			inAddEmployeeMode: false
		};
	}

	addKey() {
		const key = Math.trunc(Math.random() * 100000000);
		const keys = this.state.keys.slice();
		keys.push(key);
		this.setState({ keys });
	}

	editKey(key) {
		console.log("Key is edited" + key);
	}

	removeKey(key) {
		const keys = this.state.keys.slice();
		keys.splice(keys.indexOf(key), 1);
		this.setState({ keys });
	}

	switchEmployeeList() {
		if (this.state.inAddEmployeeMode) {
			this.setState({
				inAddEmployeeMode: !this.state.inAddEmployeeMode,
				buttonName: "Добавить сотрудника"
			});
		} else {
			this.setState({
				inAddEmployeeMode: !this.state.inAddEmployeeMode,
				buttonName: "Назад"
			});
		}
	}

	removeEmployee(employee) {
		const employees = this.state.employees.slice();
		employees.splice(employees.indexOf(employee), 1);
		this.setState({ employees });
	}

	chooseKey([employee, key]) {
		const employees = this.state.employees.slice();
		const oldKey = employees[employees.indexOf(employee)][1];
		employees[employees.indexOf(employee)][1] = key;
		this.setState({ employees });

		const keys = this.state.keys.slice();
		keys[keys.indexOf(key)] = oldKey;
		this.setState({ keys });
	}

	render() {
		return (
			<div>
				<Keys
					addKey={this.addKey}
					keys={this.state.keys}
					editKey={this.editKey}
					removeKey={this.removeKey}
				/>
				<Employees
					switchEmployeeList={this.switchEmployeeList}
					buttonName={this.state.buttonName}
					employees={this.state.employees}
					removeEmployee={this.removeEmployee}
					chooseKey={this.chooseKey}
					keys={this.state.keys}
				/>
			</div>
		);
	}
}

export default Admin;
