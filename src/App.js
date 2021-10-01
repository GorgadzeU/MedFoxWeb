import './App.css';
import { Switch, Route } from 'react-router-dom';

//Import Pages
import HomePage from './pages/HomePage.jsx';
import PatientPage from './pages/PatientPage';

function App() {
  return (
    <div className='App'>
      {/* Declare pages */}
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/patient' exact component={PatientPage} />
      </Switch>
    </div>
  );
}

export default App;
