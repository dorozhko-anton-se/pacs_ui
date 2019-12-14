import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import Controller from "../Controller/Controller";

function Header() {
	return (
		<Navbar bg="dark" variant="dark" fixed="top">
			<Navbar.Brand href="#">Откройте</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link as={Link} to="/journaling">
					Журналирование
				</Nav.Link>
				<Nav.Link as={Link} to="/admin">
					Администрирование
				</Nav.Link>
			</Nav>
			<Button variant="dark" onClick={Controller}>
				Настройка
			</Button>
		</Navbar>
	);
}

export default Header;

// openDoor() {
// 	var url = "http://10.10.2.113/door/open"; // вынести на бэк
// 	var xmlHttp = new XMLHttpRequest();
// 	xmlHttp.open("GET", url, true);
// 	xmlHttp.send(null);
// 	return xmlHttp.responseText;
// }
