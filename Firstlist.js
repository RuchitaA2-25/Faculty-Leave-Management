import React from 'react';

const Firstlist = (props) => {
	return (
		<div className="firststyle ma4 bg-light-purple dib pa3 grow shadow4 tc">
			<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Faculty"/>
				<h1 className=""> {props.name} </h1>
				<p> {props.work} </p>
		</div>
		)
}

export default Firstlist;