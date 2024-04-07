import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Project from './components/pages/Projects';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/projects' element={<Project></Project>}></Route>
            <Route path='/company' element={<Company></Company>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/newproject' element={<NewProject></NewProject>}></Route>         
        </Routes>
        </Container>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
