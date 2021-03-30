import React from 'react';
class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<h4>{this.props.keterangan}</h4>
			</div>
			)
	}
}

export default Header