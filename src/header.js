import React from 'react';

//functional based component header
function Header(){
	return(
		<div>
		<p>Hi Everyone</p>
		<h6>This is From Header.js file</h6>
		<h2>After completed</h2>
		<Welcome></Welcome>
		</div>
		);
}

let Welcome=()=>{
	return <p>This is anonymous Tag</p>;
}

export default Header;
