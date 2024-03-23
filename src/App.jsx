import { Outlet } from 'react-router-dom';
import './App.css';
// import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="body">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
