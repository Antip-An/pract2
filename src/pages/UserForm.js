import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UserForm() {
  return (
    <Form>
      <Button variant="primary" type="submit" href="/home">
        Вернуться на главную
      </Button>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Логин</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ФИО</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Почта</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Роль</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>---</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Кафедра</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>---</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Создать
      </Button>
    </Form>
  );
}

export default UserForm;
