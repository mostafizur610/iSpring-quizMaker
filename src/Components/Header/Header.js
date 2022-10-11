import Card from 'react-bootstrap/Card';
import ispring from '../../images/ispring.png';
import './Header.css';

function Header() {
    return (
        <Card className="bg-dark text-warning header">
            <Card.Img src={ispring} className='image' alt="" />
            <Card.ImgOverlay className='mt-5'>
                <Card.Title className='text-center'>More Than Just A Quiz Maker</Card.Title>
                <Card.Text className='text-center'>
                    iSpring is built to gamify your classroom for an interactive learning process
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Header;







