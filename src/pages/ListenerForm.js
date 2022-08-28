// const ListenerForm = () => {
//     return (
//         <div>ListenerForm</div>
//     );
// };

// export default ListenerForm;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ListenerForm() {
  return (
    <Form>
      <Button variant="primary" type="submit" href="/home">
        Вернуться на главную
      </Button>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Категория</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Создать
      </Button>
    </Form>
  );
}

export default ListenerForm;
