import React, {useState} from 'react';

//rfc ->react functional based component
//rfce ->react functional based component with extension

function DemoHooks(){

	let [count,setCount]=useState(0);
	return(
		<div>
			<h1>Its Hooks</h1>
			<h2>{count}</h2>
			<button className="btn-primary" onClick={
				()=>setCount(count+1)
			}>
			Increment
			</button>
		</div>
		  );
}
export default DemoHooks;