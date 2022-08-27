// const ListenerForm = () => {
//     return (
//         <div>ListenerForm</div>
//     );
// };

// export default ListenerForm;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ListenerForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ListenerForm;