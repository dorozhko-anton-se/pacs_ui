import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";

function Key(props) {
	return (
		<Card>
			<Card.Header>{props.value}</Card.Header>
			<Card.Body>
				<ButtonGroup className="d-flex" vertical>
					<Button
						variant="light"
						onClick={props.editKey.bind(this, props.value)}
					>
						Изменить
					</Button>
					<Button
						variant="light"
						onClick={props.removeKey.bind(this, props.value)}
					>
						Удалить
					</Button>
				</ButtonGroup>
			</Card.Body>
		</Card>
	);
}

export default Key;
