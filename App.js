import React, {useState, useEffect} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';


import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from "./components/layouts/Footer";
import First from './First';
import Form from './Form';
import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import Hod from "./components/Hod";
import Homepage from './components/Homepage';
import Slider from './components/Slider';



function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      axios
      .get('/articles')
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Navbar ><Route path="/first" component={First}/> </Navbar>
      <Route exact path="/">
      
      </Route>
      
     
      {/* <Route exact  path="/" render={() => <Hod posts={posts}/>} />  */}
      <Route path="/add-article" component={AddArticle} />      
      

        

      
      
    <Route path="/form" component={Form}/>
     <Route path="/first" component={First}/>

     <Route exact path ="/" render={() => <Slider />}/>

      <Route exact path ="/" render={() => <Homepage />}/>
     
     <Footer />

     
      
    </div>
  );
}

export default App;


  
  
  


