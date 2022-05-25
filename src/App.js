import { Provider } from 'react-redux';
import './App.css';
import {HomePage} from './Component/HomePage';
import {Store} from './store'
import {PostsList} from './Component/PostsList'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Provider store = {Store}>
         <HomePage></HomePage>
      </Provider> */}



<Provider store = {Store}>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} exac> </Route>
            <Route path='Posts/:id' element={<PostsList />} exac></Route>
          </Routes>
        </BrowserRouter>
        </Provider>
     
    </div>
  );
}

export default App;
