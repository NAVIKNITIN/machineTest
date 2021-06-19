import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
	return (
		<>
			<Navbar bg="secondary">
				<LinkContainer className="navbar-brand" to="/">
					<Navbar.Brand><b><i>TEST</i></b></Navbar.Brand>
				</LinkContainer>

				<Nav className="mr-auto" style={{width: '100%' , justifyContent:"flex-End" }}>
					<LinkContainer id="col" className="justify-content-left" exact to="/">
						<Nav.Link><b>HOME</b></Nav.Link>
					</LinkContainer>
					<LinkContainer id="col" className="justify-content-left" to="/tasks">
						<Nav.Link><b>TASKS</b></Nav.Link>
					</LinkContainer>
					<LinkContainer id="col" className="justify-content-left" to="/user">
						<Nav.Link><b>USER</b></Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		</>
	);
};

export default NavBar;
