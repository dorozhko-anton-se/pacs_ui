import React from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";

import ChooseKey from "./ChooseKey";

function Employee(props) {
	return (
		<Card>
			<Card.Header>{props.employee[0]}</Card.Header>
			<Card.Body>
				<Card.Title>Ключ: {props.employee[1]}</Card.Title>
				<ButtonGroup className="d-flex">
					<ChooseKey
						employee={props.employee}
						chooseKey={props.chooseKey}
						keys={props.keys}
					/>
					<Button
						variant="light"
						onClick={props.removeEmployee.bind(
							this,
							props.employee
						)}
					>
						Удалить сотрудника
					</Button>
				</ButtonGroup>
			</Card.Body>
		</Card>
	);
}

export default Employee;
