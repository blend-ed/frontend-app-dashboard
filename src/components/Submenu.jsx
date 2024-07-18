import { Container } from '@openedx/paragon';

const Submenu = () => (
    <div className='d-flex'>
        <div className="submenu bg-blue text-white">
            Submenu
        </div>
        <Container className="py-3 w-auto">
            <h1>Example Page</h1>
            <p>Hello world!</p>
        </Container>
    </div>
);

export default Submenu;
