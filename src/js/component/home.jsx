import '../../styles/index.css'
import React, { useState } from 'react';

//create your first component
const Home = () => {

	const[colorOn, setColorOn] = useState('red');
	
	function handelClick(e){
		setColorOn(e.target.id)
	}

	return (
		<div id="fondo">
			<div className="trafficlight ">
				<div className="protector"></div>
				<div className="protector"></div>
				<div className="protector"></div>
				<div id='red'
				style={{boxShadow: colorOn ==='red' ? '0 0 50px red' :  'none'}} 
					onClick={handelClick} className="red"></div>
				<div id='yellow' style={{boxShadow: colorOn ==='yellow' ? '0 0 50px yellow' : 'none'}} onClick={handelClick} className="yellow"></div>
				<div id='green' style={{boxShadow: colorOn ==='green' ? '0 0 50px lime' : 'none'}} onClick={handelClick} className="green"></div>
			</div>
		</div>
	);
};

export default Home;
