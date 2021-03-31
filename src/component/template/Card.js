import React from 'react';
class Card extends React.Component{
	render(){
		return(
			<div className="card">
				{(this.props.name ? this.props.name : 'ea')}
				{this.props.kelas}

			</div>
			)
	}
}

export default Card