import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UtpRpForm() {
  return (
    <Form>
      <Button variant="primary" type="submit" href="/home">
        Вернуться на главную
      </Button>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Год</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Сохранить
      </Button>
    </Form>
  );
}

export default UtpRpForm;
