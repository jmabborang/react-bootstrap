import '../assets/css/tester.css'
import '../assets/css/landingPage.css'
import { 
	Container, 
	Button, 
	Row, 
	Col,
	Modal,
	Fade,
	Accordion,
	Card
} from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react';
import backgroundImg from '../assets/images/warehouse_stocks.jpg';
import NavigationBar from '../components/navbar';
function LandingPage() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [isVisible, setVisible] = useState(false);

	const domRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => setVisible(entry.isIntersecting));
		});

		const current = domRef.current;
		if (current) observer.observe(current);

		return () => observer.disconnect();
	}, []);

	const backgroundStyle = {
		backgroundImage: `url(${backgroundImg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		height: '90vh',
		width: '100vw',
		position: 'relative',
		color: 'white',
	};

	const overlayStyle = {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(27, 25, 25, 0.6)', // dark overlay
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		textAlign: 'center',
		padding: '0 20px',
	};

	const footerStyle = {
		backgroundColor: '#222',
		color: '#fff',
		padding: '20px 0',
		marginTop: '50px',
	};
  	return (
		<>
			<NavigationBar/>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>

			<div style={backgroundStyle} >
				<div style={overlayStyle} >
					<h1>Welcome to Our Inventory System</h1>
					<p>Streamline your operations with real-time inventory tracking.</p>
					<Container className="justify-content-md-center">
						<div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
							<Button variant="outline-success" size="lg" onClick={handleShow}>
								Get Started
							</Button>
							<Button variant="outline-info" size="lg" onClick={handleShow}>
								Learn More
							</Button>
						</div>
					</Container>
				</div>
			</div>

			<Container>
				<Col className={`fade-in-section ${isVisible ? 'is-visible' : ''} mt-5	`}
      				ref={domRef}
				>
					<Card>
						<Card.Img variant="top" src="https://www.brightpearl.com/wp-content/uploads/2022/08/inventory-managment-procress-diagram-2.webp" />
					</Card>
				</Col>
				{/* <Col>
					<Row>
						<Col className='justify-content-md-center'>
							<Col key={1}>
								<Card>
									<Card.Img variant="top" src="https://www.erp-information.com/wp-content/uploads/2021/01/inventory-management-1.png" />
								</Card>
							</Col>
						</Col>
						<Col className=''>
							
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col className=''>
							<Card>
								<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className=' justify-content-md-center'>
							<Col key={1}>
								<Card>
									<Card.Img variant="top" src="https://8466950.fs1.hubspotusercontent-na1.net/hubfs/8466950/illustration-of-automatic-logistics-management.png" />
								</Card>
							</Col>
						</Col>
					</Row>
				</Col> */}
				
				<Col>
					<Row className='m-4'>
						<Col>Column</Col>
					</Row>
				</Col>
				{/* Create Ui for this image */}
				{/* https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Graphic/inventory-management-strategies-image-us-en.jpg */}
			</Container>
			
			<footer style={footerStyle}>
				<Container>
					<Row className="text-center text-md-left">
						<Col md={4}>
							<p>&copy; {new Date().getFullYear()} Inventory System. All rights reserved.</p>
						</Col>
						<Col md={4}>
							<p>
							<a href="#privacy" className="footer-link">Privacy Policy</a> | 
							<a href="#terms" className="footer-link"> Terms of Use</a>
							</p>
						</Col>
						<Col md={4}>
							<p>
							<a href="#privacy" className="footer-link">Privacy Policy</a> | 
							<a href="#terms" className="footer-link"> Terms of Use</a>
							</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
  	)
}

export default LandingPage