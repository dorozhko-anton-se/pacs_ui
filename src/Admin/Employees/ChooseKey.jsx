import React from "react";
import { Button, Modal, CardColumns, Card } from "react-bootstrap";

function KeysModal(props) {
	const keyList = props.keys.map(key => (
		<Card key={key}>
			<Card.Header>{key}</Card.Header>
			<Card.Body>
				<Button
					variant="light"
					size="lg"
					block
					onClick={props.chooseKey.bind(this, [props.employee, key])}
				>
					Добавить
				</Button>
			</Card.Body>
		</Card>
	));
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Выбрать ключ для {props.employee[0]}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<CardColumns>{keyList}</CardColumns>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="light" onClick={props.onHide}>
					Закрыть
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

function ChooseKey(props) {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div>
			<Button variant="light" onClick={() => setModalShow(true)}>
				Выбрать ключ
			</Button>

			<KeysModal
				employee={props.employee}
				chooseKey={props.chooseKey}
				keys={props.keys}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
}

export default ChooseKey;
