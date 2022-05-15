import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/LandingPage/LandingPage';
import EcommercePage from './components/EcommercePage/EcommercePage';
import DocumentationPage from './components/DocumentationPage/DocumentationPage';

function App() {
  return (
    <div className="App">
      <div className='landing-screen'>
      <Navbar/>
      <Landing/>
      </div>
      <EcommercePage/>
      <DocumentationPage/>
    </div>
  );
}

export default App;
