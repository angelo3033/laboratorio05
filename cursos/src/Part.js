import React from 'react'

const Part = (props) => {

	return (
		<div>
			<p>{props.part.name} {props.part.exercises} {props.part.id}</p>
		</div>
	)
}

export default Part