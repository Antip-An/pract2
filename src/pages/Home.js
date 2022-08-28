import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => (
  <>
    <Card style={{ width: '95%', margin: 'auto', marginTop: 20 }}>

      <Button style={{width: '10rem', marginLeft: '25px'}} variant="light" type="submit" href="/courses">Создание курсов</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/utprp">УТП и РП</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/forms">Форма проведения</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/listeners">Категория слушателей</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/users">Создание пользователей</Button>
      <Button style={{width: '10rem', marginLeft: '25px', marginTop: 20}} variant="light" type="submit" href="/cathedra">Создание кафедры</Button>
    </Card>
  </>
)

export default Home;