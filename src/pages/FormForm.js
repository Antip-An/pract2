import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormForm() {
  return (
    <Form>
      <Button variant="primary" type="submit" href="/home">
        Вернуться на главную
      </Button>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Форма проведения</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Создать
      </Button>
    </Form>
  );
}

export default FormForm;
