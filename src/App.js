import './App.css';
import { Switch, Route } from 'react-router-dom';

//Import Pages
import HomePage from './pages/HomePage.jsx';
import PatientPage from './pages/PatientPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      {/* Declare pages */}
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/patient' exact component={PatientPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
