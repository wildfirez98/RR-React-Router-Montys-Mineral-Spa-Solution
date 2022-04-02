import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { ListGroupItem } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) =>
        <ListGroup.Item>{eachPackage}</ListGroup.Item>)


    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>
                        Check out some of our packages! Every package is ethically sourced and organic!
                    </Card.Text>
                </Card.Body>
            </Card>
            <ListGroup>
                {displayPackages}
            </ListGroup>
        </Container>
    )
}