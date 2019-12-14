import React from "react";
import { Button, CardColumns } from "react-bootstrap";

import Employee from "./Employee";

function Employees(props) {
	const employeeList = props.employees.map(employee => (
		<Employee
			employee={employee}
			removeEmployee={props.removeEmployee}
			chooseKey={props.chooseKey}
			keys={props.keys}
			key={employee}
		/>
	));

	return (
		<div className="Employees">
			<Button
				variant="light"
				size="lg"
				block
				onClick={props.switchEmployeeList}
			>
				{props.buttonName}
			</Button>
			<div className="EmployeeList">
				<CardColumns>{employeeList}</CardColumns>
			</div>
		</div>
	);
}

export default Employees;

// import ShowEmployees from "./ShowEmployees";
// import AddEmployees from "./AddEmployees";
// export default class Employees extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { count: "list", buttonName: "Добавить сотрудника" };
// 	}

// 	componentDidMount(count) {
// 		if (count === "list") {
// 			this.setState({ count: "add", buttonName: "Назад" });
// 		} else {
// 			this.setState({ count: "list", buttonName: "Добавить сотрудника" });
// 		}
// 	}

// 	render() {
// 		let list = [];
// 		if (this.state.count === "list") {
// 			list = <ShowEmployees key={"show"} />;
// 		} else {
// 			list = <AddEmployees />;
// 		}

// 		return (
// 			<div className="Employees">
// 				<Button
// 					variant="light"
// 					onClick={() => this.componentDidMount(this.state.count)}
// 					size="lg"
// 					block
// 				>
// 					{this.state.buttonName}
// 				</Button>

// 				{list}
// 			</div>
// 		);
// 	}
// }
// setState переделать
