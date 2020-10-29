import React,{Component} from 'react';

// FUNCTIONAL BASED NO THIS
// function Vinod(props){
// 	return(
// 			<h2>{props.name} Role is :{props.role}</h2>
// 			);
// }

// CLASS BASED APPROACH USING REACT.COMPONENT,RENDER AND THIS
// class Vinod extends React.Component{
// 	render(){
// 		return(
// 			<h2>{this.props.name} Role is : {this.props.role}</h2>

// 		)
// 	}
// }

//BASED ON STATE
// class Vinod extends Component{

// 	constructor(){
// 		super();
// 		this.state={
// 			name:"Vinod",
// 			bestfriend:"me",
// 		}
// 	}

// 	changeState=()=>{
// 		this.setState({
// 			name:"Kumar",
// 			bestfriend:"franklin"
// 		});
// 	}

//  	render(){
//  		return(
//  			<div>
//  			 <h2>{this.state.name}</h2>
//  			 <h3>{this.state.bestfriend}</h3>
//  			 <button onClick={this.changeState}>Click Me</button>
// 			</div>
//  		);
//  }
// }

class Vinod extends Component{

	constructor(){
		super();
		this.state={
			count:0
		}
	}

	changeState=()=>{
		this.setState({
			count:this.state.count+1
	    });
    }

 	render(){
 		return(
 			<div>
 			 <h2>{this.state.count}</h2>
 			 <button onClick={this.changeState}>Click Me</button>
			</div>
 		);
 }
}
export default Vinod;