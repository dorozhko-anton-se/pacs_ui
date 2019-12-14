import React from "react";
import { Button, CardColumns } from "react-bootstrap";

import Key from "./Key";

function Keys(props) {
	const keyList = props.keys.map(key => (
		<Key
			value={key}
			editKey={props.editKey}
			removeKey={props.removeKey}
			key={key}
		/>
	));

	return (
		<div className="Keys">
			<Button variant="light" size="lg" block onClick={props.addKey}>
				Добавить ключ
			</Button>
			<div className="KeyList">
				<CardColumns>{keyList}</CardColumns>
			</div>
		</div>
	);
}

export default Keys;

// for (let id = 0; id < this.state.keys.length; id++) {
//   list.push(
//     <Card key={id}>
//       <Card.Header></Card.Header>
//       <Card.Body>
//         <Card.Text>{this.state.keys[id]}</Card.Text>
//         <Button
//           variant="light"
//           onClick={() => this.removeKey(this.state.keys[id])}
//         >
//           Удалить
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// componentDidMount() {
// 	axios.get(`/api/v1.0/allkeys`).then(response => {
// 		const keys = response.data;
// 		console.log(keys);
// 		this.setState({ keys });
// 	});
// }

// addCard() {
// 	axios.get(`/api/v1.0/controller/addsimplecard/`).then(response => {
// 		this.componentDidMount();
// 	});
// }

// removeKey(key) {
// 	axios.delete("/api/v1.0/removekey/", { data: key }).then(response => {
// 		this.componentDidMount();
// 	});
// }
