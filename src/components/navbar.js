import React from 'react'
import { useRef } from 'react';
import { 
	Container, 
	Button, 
	Form, 
	Nav, 
	Navbar, 
} from 'react-bootstrap'
function NavigationBar() {
	
	const searchValue = useRef(null);

	const logoStyle = {
		height: '35px',
		width: '35px',
		borderRadius: '30%'
	}
	
	return (
		<Navbar sticky="top" expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="./"><img src='./logo/IMS_Logo.png' style={logoStyle} alt='logo'/></Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link href="#action1">About Us</Nav.Link>
						<Nav.Link href="#action1">Contact</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="text"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
							ref={searchValue}
						/>
						<Button variant="outline-success" onClick={()=> console.log(searchValue.current.value)}>Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
  )
}

export default NavigationBar

