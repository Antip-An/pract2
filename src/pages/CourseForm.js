import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./css.css";

function CourseForm() {
  return (
    <Form>
      <Button variant="primary" type="submit" href="/home">
        Вернуться на главную
      </Button>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Номер курса</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Название курса</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>СДО</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>УТП</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>---</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>РП</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>---</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Планируемые даты</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Кол-во часов</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Кол-во человек</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Кол-во групп</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Общее кол-во часов</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Преподаватель</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Форма проведения</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>---</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Категория слушателей</Form.Label>
        <Form type="checkbox" className="mb-4">
          <Form.Check label="1" name="group1" />
          <Form.Check label="2" name="group1" />
          <Form.Check label="3" name="group1" />
        </Form>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Аннотация</Form.Label>
        <Form.Control as="textarea" style={{ height: "100px" }} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Создать
      </Button>
    </Form>
  );
}

export default CourseForm;
