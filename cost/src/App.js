import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';




function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/newproject">Novo Projeto</Link>
        </ul>
        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/company' element={<Company></Company>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/newproject' element={<NewProject></NewProject>}></Route>         
        </Routes>
        </Container>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
