import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Details from './Details';
function Exemple() {
  return (
    <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>marwen barhoumi</Card.Title>
        <Card.Text>
      also known as F9: The Fast Saga and internationally as Fast & Furious 9
        </Card.Text>
        <Link to="/Details">
        <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Exemple;