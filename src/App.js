import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import StateComponent from './state.js';
import Head from './props.js';
import Vinod from './vinod.js';
import Cards from './card.js';
import {BrowserRouter ,Route} from 'react-router-dom';
import Resume from './resume.js';
import DemoHooks from './DemoHooks.js';
import ReactDOM from 'react-dom';
import Hello from './header.js';
/*
function App() {
//	return React.createElement("div",{id:"vinod"},React.createElement("h2",'null',React.createElement("p",'null',"kumar")));
//	return React.createElement("h2",{style:{color:"red"}},'vinod')
/*  return (
    <div className="App">
      <h1>VINOD KUMAR</h1>
      <p>Web Designing Using ReactJS</p>
      <p>Free Training By APSSDC for Students</p>
      <Header></Header>
      <Footer></Footer>
      <StateComponent></StateComponent>
      <Head name="vinod">
      <p>Hi all</p>
      <p>this is vinod</p>
      </Head>

      <Head name="kumar">
      <p>Hi all</p>
      <p>this is kumar</p>
      </Head>
      <Head children="Schools">
      <p>this school childrens</p>
      </Head>
      

    </div>
  );
}*/

// in class based we want to give in render and use component form react
// class App extends React.Component{
//   render(){
//     return(
//     <div>
//       <Vinod name="Vinod Kumar" role="Developer"></Vinod>
//       <Vinod name="Franklin" role="Tester"></Vinod>

//     </div>
//     );
//   }
// }

// class App extends React.Component{
//   render(){
//     return(
//     <div>
//       <Vinod></Vinod>
//     </div>
//     );
//   }
// }

// function App(){
//   return(
//     <div>
//     <center>
//     <Cards>
//     </Cards>
//     </center>
//     </div>
//     )
// }

// function App(){
//   return(
//     <div className="App">
//     <BrowserRouter>
//     <Route exact path="/React_Project_Original" component={Cards}/>

//     <Route exact path="/resume"component={Resume}/>
//     </BrowserRouter>
//     </div>
//     )
// }
function App(){
  return(
    <div  className="App">
      <DemoHooks></DemoHooks>
    </div>
    )
}

export default App;