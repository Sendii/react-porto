import React from 'react'

class CardGrid extends React.Component{
	render(){
		return(
			<div className="content">
			<p>{this.props.info}</p>
			</div>
			)
	}
}

export default CardGrid