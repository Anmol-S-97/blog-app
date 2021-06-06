import './App.css';
import BlogList from './components/BlogList';
import CreateBlog from './components/CreateBlog';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ViewBlog from './components/ViewBlog';
import EditBlog from './components/EditBlog';

function App() {
  return (
  <BrowserRouter>
  <div className="App">
  <Switch>
    <Route path="/createblog" exact component={CreateBlog}></Route>
    <Route path="/" exact component={BlogList}></Route>
    <Route path="/viewblog/:id"  component={ViewBlog}></Route>
    <Route path="/editblog/:id"  component={EditBlog}></Route>
  </Switch>
  </div>
  </BrowserRouter>
  );
}

export default App;
