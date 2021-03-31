import React from 'react'
import logo_github from '../../asset/github.png'
import logo_fullstar from '../../asset/full-star.png'

class Card extends React.Component{
	render(){
		return(
			<div className="card">
			<img src={logo_github} alt="gambar" className="logo-skill"/>
			<p>{this.props.name}</p>
			<div className="skill">
				<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
				<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
				<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
				<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
				<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
			</div>
			</div>
			)
	}
}

export default Card