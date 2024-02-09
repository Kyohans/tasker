import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectList from './components/Projects/ProjectList';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import TasksList from './components/Tasks/TasksList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Header/>}>
            <Route index element = {<Home/>}/>
            <Route path = '/projects' element = {<ProjectList/>}/>
            <Route path = '/project/:id' element = {<TasksList/>}/>
            <Route path = '/profile/:id' element = {<Profile/>}/>
            <Route path = '*' element = {<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
