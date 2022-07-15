import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { store } from './store/store';

import AppBarComponent from './components/appBar/AppBarComponent';
import RouterComponent from './components/Router';


function App() {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Provider store={store}>
        <div>
          <Router> 
            <RouterComponent />
          </Router>
        </div>
    </Provider>
  </LocalizationProvider>
  );
}

export default App;
