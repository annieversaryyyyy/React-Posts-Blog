import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import AddPost from "./containers/AddPost/AddPost";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contacts from "./containers/Contacts/Contacts";
import FullPost from "./containers/FullPost/FullPost";
import Edit from "./containers/Edit/Edit";

function App() {
  return (
    <>
        <BrowserRouter>
             <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" exact component={Home}/>
                <Route path="/posts/:id" exact component={FullPost}/>
                <Route path="/posts/:id/edit" exact component={Edit}/>
                <Route path="/add" component={AddPost}/>
                <Route path="/about" component={AboutUs}/>
                <Route path="/contacts" component={Contacts}/>
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
