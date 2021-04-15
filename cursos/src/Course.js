import React from 'react'
import Part from './Part'

const Course = (props) => {
	return (
		<div>
			{props.parts.map((part) => {
			    return(
			        <Part
			          part={part}
			        />
			    )
			})}
		</div>
	)
}

export default Course